using System;
using System.Collections.Generic;
using System.Linq;
using VeriBranch.Common.MessageDefinitions;
using VeriBranch.DataAccess;
using VeriBranch.Utilities.Common;
using VeriBranch.Utilities.CommonHelper;
using VeriBranch.Utilities.ConfigurationUtilities;
using VeriBranch.Utilities.Diagnostics;

namespace VeriBranch.Business.Managers.Authentication.Helper
{

    public class AuthenticationFlowHelper
    {
        private static DefaultLogger logger = new DefaultLogger(typeof(AuthenticationFlowHelper));

        private struct ConfigurationParameterKeys
        {
            public static readonly string UsedPasswordControlType = "UsedPasswordControlType";
            public static readonly string UsedPasswordControlValue = "UsedPasswordControlValue";
        }

        public static bool IsCurrentFlowSuccess(LoginResultEnum result)
        {
            return (result == LoginResultEnum.FirstLevelSuccess ||
                result == LoginResultEnum.ImageSelectionSucess ||
                result == LoginResultEnum.OTPSecuritySuccess ||
                result == LoginResultEnum.OTPSelectionSucess ||
                result == LoginResultEnum.PasswordChangeSuccess ||
                result == LoginResultEnum.PinChangeSuccess ||
                result == LoginResultEnum.SecondLevelSuccess ||
                result == LoginResultEnum.SecurityImageSelectSuccess ||
                result == LoginResultEnum.SecurityImageSuccess ||
                result == LoginResultEnum.SecurityWarningConfirmed ||
                result == LoginResultEnum.CustomerInfoSuccess ||
                result == LoginResultEnum.Successful ||
                result == LoginResultEnum.UserNameChangeSuccess ||
                result == LoginResultEnum.SPKSuccess ||
                result == LoginResultEnum.MasakSuccess ||
                result == LoginResultEnum.LoginByCard ||
                result == LoginResultEnum.LoginByTCID ||
                result == LoginResultEnum.LoginByUserCode ||
                result == LoginResultEnum.SoftOTPSuccess ||
                result == LoginResultEnum.SmsOTPSuccess ||
                result == LoginResultEnum.HardOTPSuccess ||
                result == LoginResultEnum.LogoutSuccess ||
                result == LoginResultEnum.SecretQuestionAnswerSuccess ||
                result == LoginResultEnum.ValidationSuccess ||
                result == LoginResultEnum.BirthDateValidationSuccess);
        }

        public static bool ControlToPasswordIsUsed(VeriBranchDataEntities entities, string password, long userID, short channelID)
        {
            short usedPasswordControl = ConfigurationParametersPresenter.GetParameter(ConfigurationParameterKeys.UsedPasswordControlType).ToShort(0);
            UsedPasswordControlTypeEnum passwordControlType = (UsedPasswordControlTypeEnum)usedPasswordControl;
            int usedPasswordControlValue = ConfigurationParametersPresenter.GetParameter(ConfigurationParameterKeys.UsedPasswordControlValue).ToInteger();
            if (usedPasswordControlValue!=0 && passwordControlType != UsedPasswordControlTypeEnum.Undefined)
            {
                List<string> passwordHistory = new List<string>();
                if (passwordControlType == UsedPasswordControlTypeEnum.Day)
                {
                    DateTime oldPinControlDate = DateTime.Now.AddDays(-1 * usedPasswordControlValue);
                    passwordHistory = entities.VpPasswordHistory.Where
                     (q => q.UserID == userID
                     && q.ChannelID == channelID
                     && q.CreateDate > oldPinControlDate
                     ).OrderByDescending(q => q.CreateDate).Select(q => q.Password).ToList();
                }
                else
                {
                    int usedControlCount = usedPasswordControlValue;
                    passwordHistory = (entities.VpPasswordHistory.Where
                     (q => q.UserID == userID
                     && q.ChannelID == channelID).OrderByDescending(q => q.CreateDate).Select(q => q.Password).ToList().Take(usedControlCount).ToList());
                }
                if (passwordHistory != null && passwordHistory.Count > 0)
                {
                    return passwordHistory.Contains(password);
                }
            }
            return false;
        }

        public static void AddtoPasswordHistory(VeriBranchDataEntities entities, string password, long userID, short channelID)
        {
            VpPasswordHistory addedPin = new VpPasswordHistory();
            addedPin.Password = password;
            addedPin.UserID = userID;
            addedPin.ChannelID = channelID;
            addedPin.CreateDate = DateTime.Now;
            addedPin.CreateBy = "User";
            entities.VpPasswordHistory.Add(addedPin);

        }

        public static void AddLogonHistory(AuthenticationContext context, AuthenticationResult result)
        {
            if (context.UserID != 0)
            {
                VpUserLogonHistory history = new VpUserLogonHistory();
                history.UserID = context.UserID;
                history.ChannelID = context.ChannelID;
                history.InitialSessionID = context.InitialSessionID;
                history.IP = context.ClientIp;
                history.LogonType = (int)context.TransactionHeader.Customer.LogonType;
                history.LoginResult = (short)(result != null ? result.Result.GetHashCode() : LoginResultEnum.Undefined.GetHashCode());
                string logonBrowser = context.LogonBrowser;
                if (!string.IsNullOrEmpty(logonBrowser))
                {
                    if (logonBrowser.Length > 255)
                    {
                        logger.Error(string.Format("Max LogonBrowser length (255) is reached for following UserAgent : {0} \n InitialSessionId : {1} \n UserID: {2}", logonBrowser, context.InitialSessionID, context.UserID));
                        logonBrowser = logonBrowser.Substring(0, 255);
                    }
                }
                if (string.IsNullOrEmpty(ConfigurationParametersPresenter.Instance["AllowedLoginTypesForLogonBrowserLogging"]) ||
                    ConfigurationParametersPresenter.Instance["AllowedLoginTypesForLogonBrowserLogging"].Split(',').ToList().Contains(history.LoginResult.ToString()))
                {
                    history.LogonBrowser = logonBrowser;
                }
                history.LoginDate = DateTime.Now;
                history.IsLogonDeviceMobile = Utils.IsMobileBrowser(context.LogonBrowser);
                if (LoggingManager.AsyncLoggingEnabled && ConfigurationParametersPresenter.Instance["UserLogonHistoryAsyncLoggingEnabled"].ToBoolean())
                {
                    QueueHelper.Enqueue(history, ConfigReader.DefaultLogMessageQueuePath);
                }
                else
                {
                    using (VeriBranchDataEntities dataEntities = new VeriBranchDataEntities())
                    {
                        dataEntities.VpUserLogonHistory.Add(history);
                        dataEntities.SaveChanges();
                    }
                }
            }
        }

        public static List<int> GetFailedLoginResult()
        {
            List<int> list = new List<int>();
            foreach (var item in Enum.GetValues(typeof(LoginResultEnum)))
            {
                LoginResultEnum loginresult = (LoginResultEnum)item;
                if (!IsCurrentFlowSuccess(loginresult))
                {
                    list.Add(loginresult.GetHashCode());
                }
            }
            return list;
        }
    }
}
