using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using SharedAspectsService.DataContracts;
using SharedAspectsService.ServiceInterfaces;
using VeriBranch.Business.Service;
using VeriBranch.Common.Constants;
using VeriBranch.Common.MessageDefinitions;
using VeriBranch.Common.Exceptions;
using VeriBranch.Utilities.ConfigurationUtilities;
using System.Web.Services.Protocols;
using System.Web.Services;
using System.ServiceModel.Channels;
using Custom.Utilities.Common;


namespace SharedAspectsService
{
    public class IVRIntegration : IIVRIntegration
    {

        public void SetCardPin(IVRCardOperationsRequest request)
        {
            VBMCallDispatcher callDispatcher = new VBMCallDispatcher();
            callDispatcher.DispatchAction<IVRCardOperationsRequest, IVROperationResponse>(Custom.Common.Constants.TransactionNameConstants.IVRCreditCardPinChangeTransaction, MethodTypeEnum.Execute, Channels.SharedAspects, request);
        }

        public void VerifyCardPin(IVRCardOperationsRequest request)
        {
            VBMCallDispatcher callDispatcher = new VBMCallDispatcher();
            callDispatcher.DispatchAction<IVRCardOperationsRequest, IVROperationResponse>(Custom.Common.Constants.TransactionNameConstants.IVRVerifyCreditCardPinTransaction, MethodTypeEnum.Execute, Channels.SharedAspects, request);
        }
        public void BlockUser(IVROperationRequest request)
        {
            VBMCallDispatcher callDispatcher = new VBMCallDispatcher();
            callDispatcher.DispatchAction<IVROperationRequest, IVROperationResponse>(Custom.Common.Constants.TransactionNameConstants.IVRBlockUserTransaction, MethodTypeEnum.Execute, Channels.SharedAspects, request);
        }
        public void VerifyInternetBankingPassword(IVRVerifyInternetBankingPasswordRequest request)
        {
            VBMCallDispatcher callDispatcher = new VBMCallDispatcher();
            callDispatcher.DispatchAction<IVRVerifyInternetBankingPasswordRequest, IVROperationResponse>(Custom.Common.Constants.TransactionNameConstants.IVRVerifyInternetBankingPasswordTransaction, MethodTypeEnum.Execute, Channels.SharedAspects, request);
        }
    }
}
