using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;
using SharedAspectsService.DataContracts;
using System.Runtime.Serialization;

using VeriBranch.Common.MessageDefinitions;
using System.Web.Services;

namespace SharedAspectsService.ServiceInterfaces
{
    [ServiceContract]
    
    interface IIVRIntegration
    {
        [OperationContract]
        void SetCardPin(IVRCardOperationsRequest request);
        [OperationContract]
        void VerifyCardPin(IVRCardOperationsRequest request);
        [OperationContract]
        void BlockUser(IVROperationRequest request);
        [OperationContract]
        void VerifyInternetBankingPassword(IVRVerifyInternetBankingPasswordRequest request);
    }
}
