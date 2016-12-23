using System;
using System.Linq;
using VeriBranch.Business.Managers;
using VeriBranch.Business.Transactions;
using VeriBranch.Common.Constants;
using VeriBranch.Common.Exceptions;
using VeriBranch.Common.MessageDefinitions;
using VeriBranch.DataAccess;
using VeriBranch.Utilities.Common;
using VeriBranch.Utilities.CommonHelper;
using VeriBranch.Utilities.ConfigurationUtilities;

namespace Custom.Business.Internet.Transactions
{
    public class GenerateSoftTokenTransaction : ITransaction
    {
        public void Start(object request, ref object response, TransactionHeader transactionHeader)
        {

        }

        public void Confirm(object request, ref object response, TransactionHeader transactionHeader)
        {

        }

        public void Execute(object requestMessage, ref object responseMessage, TransactionHeader transactionHeader)
        {
            GenerateSoftTokenRequest request = requestMessage as GenerateSoftTokenRequest;
            GenerateSoftTokenResponse response = responseMessage as GenerateSoftTokenResponse;
            VpOtpHistory otpHistory = null;

            string hashedPassword = string.Empty;
            using (VeriBranchDataEntities context = new VeriBranchDataEntities())
            {
                var device = context.VpOtpDevice.Where(obj => obj.SerialNumber == request.DeviceId).FirstOrDefault();
                if (device == null)
                {
                    throw new VPBusinessException("DeviceNotExistException");
                }
                long userId = Convert.ToInt32(device.CreateBy);
                
                if (!string.IsNullOrEmpty(request.Password))
                {
                    hashedPassword = HashHelper.Hash(request.Password, string.Empty, HashTypeEnum.Md5);
                    if (context.VPSoftTokenRegistration.Where(obj => obj.UserId == userId && obj.Password == hashedPassword).FirstOrDefault() != null)
                    {
                        otpHistory = context.VpOtpHistory.Where(obj => obj.UserID == userId && obj.ExpireTime>=DateTime.Now).OrderByDescending(obj => obj.ID).FirstOrDefault();
                    }
                    else
                        throw new VPBusinessException("WrongPassword");
                }
                else if (string.IsNullOrEmpty(request.Password) && request.IsAuthenticatedWithFingerPrint)
                {
                    string autoPass = request.DeviceId + "true" + request.DeviceId; // 1 because AutoPassword should have set IsAuthenticatedWithFingerPrint
                    if (autoPass.Equals(request.AutoPassword))
                    {
                        otpHistory = context.VpOtpHistory.Where(obj => obj.UserID == userId && obj.ExpireTime >= DateTime.Now).OrderByDescending(obj => obj.ID).FirstOrDefault();
                    }
                    else
                    {
                        throw new VPBusinessException("WrongPassword");
                    }
                }
                else
                {
                    throw new VPBusinessException("WrongPassword");
                }
            }
            if (otpHistory != null || string.IsNullOrEmpty( otpHistory.EncryptedOTP))
            {
                string decryptedOTP = string.Empty;
                if (ConfigurationParametersPresenter.GetParameter(LoginConstants.FlowItemType.OTPEncryptionEnabledKey) != null)
                {
                    // these must be replaced by fetching certificate from store
                    string privateKey = Convert.ToString(ConfigurationParametersPresenter.GetParameter(LoginConstants.FlowItemType.EncryptionPrivateKey));
                    int keySize = Convert.ToInt32(ConfigurationParametersPresenter.GetParameter(LoginConstants.FlowItemType.EncryptionKeySizeKey));
                    decryptedOTP = Encryption.DecryptString(otpHistory.EncryptedOTP, privateKey);
                }
                response.OTP = decryptedOTP;
            }
            else 
            {
                response.OTP = VeriBranch.Utilities.ConfigurationUtilities.ResourceHelper.GetGeneralMessage("NoOTPAvailable");
            }
        }

        public void Fetch(object request, ref object response, TransactionHeader transactionHeader)
        {

        }
    }
}
