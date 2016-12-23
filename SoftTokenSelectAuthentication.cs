using System;
using System.Linq;
using VeriBranch.Business.Managers;
using VeriBranch.Business.Managers.Authentication;
using VeriBranch.Business.Transactions;
using VeriBranch.Common.Constants;
using VeriBranch.Common.Exceptions;
using VeriBranch.Common.MessageDefinitions;
using VeriBranch.DataAccess;
using VeriBranch.Utilities.Common;
using VeriBranch.Utilities.CommonHelper;
using VeriBranch.Utilities.ConfigurationUtilities;


namespace Custom.Business.Transactions
{
    class SoftTokenSelectAuthentication : ITransaction
    {
        public void Start(object requestMessage, ref object responseMessage, TransactionHeader transactionHeader)
        {
           
        }

        public void Confirm(object requestMessage, ref object responseMessage, TransactionHeader transactionHeader)
        {
           
        }

        public void Execute(object requestMessage, ref object responseMessage, TransactionHeader transactionHeader)
        {

            long userID = transactionHeader.Customer.UserId;

            SoftTokenSelectAuthenticationRequest request = requestMessage as SoftTokenSelectAuthenticationRequest;
            SoftTokenSelectAuthenticationResponse response = responseMessage as SoftTokenSelectAuthenticationResponse;
            VpOtpHistory otpHistory = null;

            string password = request.Password;

            try
            {
                using (VeriBranchDataEntities context = new VeriBranchDataEntities())
                {
                    otpHistory = context.VpOtpHistory.Where(obj => obj.UserID == userID).OrderByDescending(obj => obj.ID).FirstOrDefault();

                    if (otpHistory != null)
                    {
                        string decryptedOTP = string.Empty;
                        if (ConfigurationParametersPresenter.GetParameter(LoginConstants.FlowItemType.OTPEncryptionEnabledKey) != null)
                        {
                            // these must be replaced by fetching certificate from store
                            string privateKey = Convert.ToString(ConfigurationParametersPresenter.GetParameter(LoginConstants.FlowItemType.EncryptionPrivateKey));
                            int keySize = Convert.ToInt32(ConfigurationParametersPresenter.GetParameter(LoginConstants.FlowItemType.EncryptionKeySizeKey));
                            decryptedOTP = Encryption.DecryptString(otpHistory.EncryptedOTP, privateKey);
                        }

                        if (decryptedOTP == password)
                            response.Status = true;
                    }
                }
            }
            catch (Exception ex)
            {
                response.Status = false;
            }
        }               
    }
}
