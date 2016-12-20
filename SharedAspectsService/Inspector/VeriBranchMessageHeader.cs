using SharedAspectsService.DataContracts;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.ServiceModel.Channels;
using System.Web;
using System.Xml;
using System.Xml.Serialization;


namespace SharedAspectsService
{
    public static class VeriBranchMessageHeaderNames
    {
        public const string SoapHeaderName = "VeriBranchMessageHeader";
        public const string SoapHeaderNamespace = "http://tempuri.org/VeriBranchMessages.xsd";

        public const string IsSuccess = "IsSuccess";
        public const string ErrorCode = "ErrorCode";
        public const string Description = "Description";
        public const string DisplayMessage = "DisplayMessage";
        public const string ExceptionMessage = "ExceptionMessage";
    }

    //TODO : IsSuccess ve Error olması gereken tiplere çevrilerek, OnWriteHeaderContents güncellenecek
    public class VeriBranchMessageHeader : MessageHeader
    {
        #region Properties
        private bool isSuccess;
        private string description;
        private string displayMessage;
        private string errorCode;
        private string exceptionMessage;

        public bool IsSuccess
        {
            get
            {
                return (this.isSuccess);
            }
            set
            {
                this.isSuccess = value;
            }
        }

        public string Description
        {
            get
            {
                return (this.description);
            }
            set
            {
                this.description = value;
            }
        }

        public string DisplayMessage
        {
            get
            {
                return (this.displayMessage);
            }
            set
            {
                this.displayMessage = value;
            }
        }

        public string ErrorCode
        {
            get
            {
                return (this.errorCode);
            }
            set
            {
                this.errorCode = value;
            }
        }

        public string ExceptionMessage
        {
            get
            {
                return (this.exceptionMessage);
            }
            set
            {
                this.exceptionMessage = value;
            }
        }

        public override string Name
        {
            get { return (VeriBranchMessageHeaderNames.SoapHeaderName); }
        }

        public override string Namespace
        {
            get { return (VeriBranchMessageHeaderNames.SoapHeaderNamespace); }
        }

        #endregion

        #region Constructor
        public VeriBranchMessageHeader()
        {
        }

        public VeriBranchMessageHeader(bool isSuccess, string description, string displayMessage, string errorCode, string exceptionMessage)
        {
            this.isSuccess = isSuccess;
            this.errorCode = errorCode;
            this.description = description;
            this.displayMessage = displayMessage;
            this.exceptionMessage = exceptionMessage;
        }
        #endregion
        
        protected override void OnWriteHeaderContents(System.Xml.XmlDictionaryWriter writer, MessageVersion messageVersion)
        {
            writer.WriteElementString(VeriBranchMessageHeaderNames.IsSuccess, this.IsSuccess.ToString().ToLower());
            writer.WriteElementString(VeriBranchMessageHeaderNames.Description, this.Description);
            writer.WriteElementString(VeriBranchMessageHeaderNames.DisplayMessage, this.DisplayMessage);
            writer.WriteElementString(VeriBranchMessageHeaderNames.ErrorCode, this.ErrorCode);
            writer.WriteElementString(VeriBranchMessageHeaderNames.ExceptionMessage, this.ExceptionMessage);
        }

        public static VeriBranchMessageHeader ReadHeader(XmlDictionaryReader reader)
        {
            string isSuccess = String.Empty;
            string description = String.Empty;
            string displayMessage = String.Empty;
            string errorCode = String.Empty;
            string exceptionMessage = String.Empty;

            if (reader.ReadToDescendant(VeriBranchMessageHeaderNames.IsSuccess, VeriBranchMessageHeaderNames.SoapHeaderNamespace))
            {
                isSuccess = reader.ReadElementString();
            }

            if (reader.ReadToDescendant(VeriBranchMessageHeaderNames.Description, VeriBranchMessageHeaderNames.SoapHeaderNamespace))
            {
                description = reader.ReadElementString();
            }

            if (reader.ReadToDescendant(VeriBranchMessageHeaderNames.DisplayMessage, VeriBranchMessageHeaderNames.SoapHeaderNamespace))
            {
                displayMessage = reader.ReadElementString();
            }

            if (reader.ReadToDescendant(VeriBranchMessageHeaderNames.ErrorCode, VeriBranchMessageHeaderNames.SoapHeaderNamespace))
            {
                errorCode = reader.ReadElementString();
            }

            if (reader.ReadToDescendant(VeriBranchMessageHeaderNames.ExceptionMessage, VeriBranchMessageHeaderNames.SoapHeaderNamespace))
            {
                exceptionMessage = reader.ReadElementString();
            }

            if (!String.IsNullOrEmpty(isSuccess) && !String.IsNullOrEmpty(description) && !String.IsNullOrEmpty(displayMessage) &&
                !String.IsNullOrEmpty(errorCode) && !String.IsNullOrEmpty(exceptionMessage))
            {
                return new VeriBranchMessageHeader(Convert.ToBoolean(isSuccess), description, displayMessage, errorCode, exceptionMessage);
            }
            else
            {
                return null;
            }
        }
    }
}