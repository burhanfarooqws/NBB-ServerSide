using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


using VeriBranch.Common.MessageDefinitions;namespace SharedAspectsService
{
    public class SharedAspectsHelper
    {
        public static void MapVeriBranchResultToVeriBranchMessageHeader(VeriBranchResult result, VeriBranchMessageHeader messageHeader)
        {
            if (result == null)
            { 
                messageHeader = null;
                return;
            }

            messageHeader.IsSuccess = result.IsSuccess;

            if (result.Error != null)
            {
                messageHeader.Description = result.Error.Description;
                messageHeader.DisplayMessage = result.Error.DisplayMessage;
                messageHeader.ErrorCode = result.Error.Code;
                messageHeader.ExceptionMessage = result.Error.ExceptionMessage;
            }
        }
    }
}