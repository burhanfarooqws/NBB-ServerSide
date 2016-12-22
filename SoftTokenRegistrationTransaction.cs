using Custom.Business.Internet.Managers;
using System;
using System.Linq;
using VeriBranch.Business.Managers;
using VeriBranch.Business.Managers.Authentication;
using VeriBranch.Business.Transactions;
using VeriBranch.Common.Exceptions;
using VeriBranch.Common.MessageDefinitions;
using VeriBranch.DataAccess;
using VeriBranch.Utilities.Common;
using VeriBranch.Utilities.CommonHelper;
using VeriBranch.Utilities.ConfigurationUtilities;

namespace Custom.Business.Internet.Transactions
{
    public class SoftTokenRegistrationTransaction : ITransaction
    {
        public void Start(object request, ref object response, TransactionHeader transactionHeader)
        {

        }

        public void Confirm(object request, ref object response, TransactionHeader transactionHeader)
        {

        }

        public void Execute(object requestMessage, ref object responseMessage, TransactionHeader transactionHeader)
        {
            //device already registered
            //no user registed with this id
            SoftTokenRegistrationRequest request = requestMessage as SoftTokenRegistrationRequest;
            SoftTokenRegistrationResponse response = responseMessage as SoftTokenRegistrationResponse;

            VpUser user = null;
            //verify userId, password, otp
            using (VeriBranchDataEntities dataEntities = new VeriBranchDataEntities())
            {
                user = dataEntities.VpUser.Where(obj => obj.UserName.Equals(request.CustomerId)).FirstOrDefault();
            }
            if (user == null)
            {
                throw new VPBusinessException("NoUserWithThisId");
            }

            // move the below method to Login Manager
            //VerifyUserIdPassword(request, response, transactionHeader);
            response.AuthrnticationSuccess = LoginManager.VerifyUserIdPassword(request.CustomerId, request.Password, transactionHeader);

            VerifyOTP(request, response, transactionHeader, user);
            VerifyCardAccountAndPin(request, response, transactionHeader, user);
            if (response.AuthrnticationSuccess)
            {
                VpOtpDevice device = new VpOtpDevice()
                {
                    CreateBy = Convert.ToString( user.ID),
                    CreateDate = DateTime.Now,
                    OtpType = 4,
                    SerialNumber = request.DeviceId,
                    Status = 2,
                    ModifyBy = "",
                    ModifyDate = DateTime.Now,

                };
                using (VeriBranchDataEntities dataEntities = new VeriBranchDataEntities())
                {

                    if (dataEntities.VpOtpDevice.Where(obj => obj.SerialNumber == request.DeviceId).Count() > 0)
                    {
                        throw new VPBusinessException("DeviceAlreadyRegistered");
                    }
                    
                    dataEntities.VpOtpDevice.Add(device);
                    dataEntities.SaveChanges();
                    VPSoftTokenRegistration softTokenRegistration = new VPSoftTokenRegistration()
                    {
                        DeviceId = device.ID,
                        Password = HashHelper.Hash(request.STPassword, string.Empty, HashTypeEnum.Md5),
                        UserId = user.ID,
                        Preference = request.UseFingerPrint.ToString(),
                    };
                    dataEntities.VPSoftTokenRegistration.Add(softTokenRegistration);
                    dataEntities.SaveChanges();
                }

            }
        }

        private void VerifyCardAccountAndPin(SoftTokenRegistrationRequest request, SoftTokenRegistrationResponse response, TransactionHeader transactionHeader, VpUser user)
        {
            CustomerEnrollmentRequest ceRequest = new CustomerEnrollmentRequest();
            object ceResponse = new CustomerEnrollmentResponse();

            ceRequest.RequestType = EnrollmentValidationRequestTypeEnum.ValidateInfo;
            ceRequest.DemandType = EnrollmentDemandTypeEnum.WithCardAndAccount;
            ceRequest.CardInfo = new CardInfo()
            {
                CardNumber = request.AtmCardNumber,
            };
            CustomerEnrollmentTransaction operation = new CustomerEnrollmentTransaction();
            operation.Execute(ceRequest, ref ceResponse, transactionHeader);
            
        }

        private bool VerifyOTP(SoftTokenRegistrationRequest request, SoftTokenRegistrationResponse response, TransactionHeader transactionHeader, VpUser user)
        {
            using (VeriBranchDataEntities dataEntities = new VeriBranchDataEntities())
            {
                VpOtpHistory OTPHistory = dataEntities.VpOtpHistory.Where(obj => obj.UserID == user.ID).OrderByDescending(obj => obj.ID).FirstOrDefault();

                var hashedOTP = HashHelper.Hash(request.OTP, string.Empty, HashTypeEnum.Md5);
                if (OTPHistory != null && OTPHistory.OTP == hashedOTP)
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
        }

        private void VerifyUserIdPassword(SoftTokenRegistrationRequest request, SoftTokenRegistrationResponse response, TransactionHeader transactionHeader)
        {
            if (transactionHeader.Customer == null)
                transactionHeader.Customer = new Customer();

            transactionHeader.Customer.CustomerType = CustomerTypeEnum.Retail;
            AuthenticationContext context = new AuthenticationContext(transactionHeader,
               AuthenticationFlowItemTypeEnum.FirstLevel, string.Empty);
            context.SetUserDetail(0, "", "", "", request.CustomerId);


            bool isPasswordEncryptionEnabled = Convert.ToBoolean(ConfigurationParametersPresenter.GetParameter("RSA.PasswordEncryptionEnabled"));
            string password = (string)request.Password;

            // if encryption is enabled, decrypt the pin
            if (isPasswordEncryptionEnabled)
            {
                // these must be replaced by fetching certificate from store
                string privateKey = Convert.ToString(ConfigurationParametersPresenter.GetParameter("RSA.PrivateKey"));
                int keySize = Convert.ToInt32(ConfigurationParametersPresenter.GetParameter("RSA.KeySize"));

                password = Encryption.RSADecryptString(password, keySize, privateKey);
            }

            context.SetPassword(password, null);
            context.SetDiscardPasswordHashCheck(false);
            context.ExternalCheckMethod = CheckPassword;

            AuthenticationResult result = AuthenticationService.GetResult(context);
            if (result.Result == LoginResultEnum.FirstLevelSuccess)
                response.AuthrnticationSuccess = true;
        }

        public virtual object CheckPassword(AuthenticationContext context, AuthenticationResult result)
        {   
            //#region Migrated User Handling
            //if ((result.IsMigrated == true) && result.PasswordEmpty)
            //{
            //    //Code Here to handle migrated user login authentication if password is empty
            //    switch (result.PasswordEncryptionType)
            //    {
            //        case (int)PasswordEncryptionTypeEnum.Plain: // Plain
            //            //For Testing
            //            //string strTestingPassword = "1";
            //            //if (context.Password == strTestingPassword)
            //            //    return LoginResultEnum.Successful;
            //            break;
                    
            //        case (int)PasswordEncryptionTypeEnum.Bank: // Bank Method Implementation
            //            break;
                    
            //        case (int)PasswordEncryptionTypeEnum.API: // Bank IB API
            //            break;

            //        case (int)PasswordEncryptionTypeEnum.NoVerification: // Bank MB API
            //            break;
            //    }
            //}
            //#endregion

            //Default implementation own
            return null;
        }

        public void Fetch(object request, ref object response, TransactionHeader transactionHeader)
        {

        }
    }
}
