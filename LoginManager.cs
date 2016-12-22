using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using VeriBranch.Business.Managers.Authentication;
using VeriBranch.Common.MessageDefinitions;
using VeriBranch.DataAccess;
using VeriBranch.Utilities.Common;
using VeriBranch.Utilities.ConfigurationUtilities;

namespace Custom.Business.Internet.Managers
{
    public class LoginManager
    {
        public static void SetLogon(TransactionHeader transactionHeader)
        {
            using (VeriBranchDataEntities dataEntities = new VeriBranchDataEntities())
            {
                //VpLogon logon = dataEntities.VpLogon.Where(dataEntity => dataEntity.CustomerUserCode == transactionHeader.Customer.CustomerUserCode).SingleOrDefault();
                //if (logon == null)
                //{
                //    logon = new VpLogon();
                //    logon.CustomerUserCode = transactionHeader.Customer.CustomerUserCode;
                //    logon.ChannelId = transactionHeader.Channel.ChannelType.GetHashCode();
                //    logon.LastLogonDate = DateTime.Now;
                //    logon.SessionId = transactionHeader.Session.Sessionid;
                //    dataEntities.VpLogon.AddObject(logon);
                //}
                //else
                //{
                //    logon.LastLogonDate = DateTime.Now;
                //    logon.SessionId = transactionHeader.Session.Sessionid;
                //}
                //dataEntities.SaveChanges();
            }
        }

        public static bool VerifyUserIdPassword(string customerId, string password, TransactionHeader transactionHeader)
        {
            bool authenticationSuccess = false;
            //password = EncryptPassword(password);
            transactionHeader.Session.InitialSessionid = "SoftToken";
            if (transactionHeader.Customer == null)
                transactionHeader.Customer = new Customer();

            transactionHeader.Customer.CustomerType = CustomerTypeEnum.Retail;
            AuthenticationContext context = new AuthenticationContext(transactionHeader,
               AuthenticationFlowItemTypeEnum.FirstLevel, string.Empty);
            context.SetUserDetail(0, "", "", "", customerId);


            bool isPasswordEncryptionEnabled = Convert.ToBoolean(ConfigurationParametersPresenter.GetParameter("RSA.PasswordEncryptionEnabled"));
            //string password = (string)request.Password;

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
            //context.ExternalCheckMethod = CheckPassword;

            AuthenticationResult result = AuthenticationService.GetResult(context);
            if (result.Result == LoginResultEnum.FirstLevelSuccess)
                authenticationSuccess = true;

            return authenticationSuccess;
        }
        private static string EncryptPassword(string password)
        {
            string k = Convert.ToString(ConfigurationParametersPresenter.GetParameter("RSA.PublicKey.Modulus"));
            //int e = Convert.ToInt32(ConfigurationParametersPresenter.GetParameter("RSA.PublicKey.Exponent"));
            return Encryption.EncryptString(password, k);
        }

    }
}
