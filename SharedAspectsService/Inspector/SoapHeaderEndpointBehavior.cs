using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel.Channels;
using System.ServiceModel.Configuration;
using System.ServiceModel.Description;
using System.ServiceModel.Dispatcher;
using System.Web;

namespace SharedAspectsService
{
    public class SoapHeaderEndpointBehavior : BehaviorExtensionElement, IWsdlExportExtension, IEndpointBehavior
    {
        #region BehaviorExtensionElement Members

        public override Type BehaviorType
        {
            get
            {
                return typeof(SoapHeaderEndpointBehavior);
            }
        }

        protected override object CreateBehavior()
        {
            return new SoapHeaderEndpointBehavior();
        }
        #endregion

        #region IWsdlExportExtension Members

        public void ExportContract(WsdlExporter exporter, WsdlContractConversionContext context)
        {
            //throw new NotImplementedException();
        }

        public void ExportEndpoint(WsdlExporter exporter, WsdlEndpointConversionContext context)
        {
            SoapHeaderWsdlExport.ExportEndpoint(exporter, context);
        }

        #endregion

        #region IEndpointBehavior Members

        public void AddBindingParameters(ServiceEndpoint endpoint, BindingParameterCollection bindingParameters)
        {
            //throw new NotImplementedException();
        }

        public void ApplyClientBehavior(ServiceEndpoint endpoint, ClientRuntime clientRuntime)
        {
            //throw new NotImplementedException();
        }

        public void ApplyDispatchBehavior(ServiceEndpoint endpoint, EndpointDispatcher endpointDispatcher)
        {
            MessageInspector messageInspector = new MessageInspector();
            endpointDispatcher.DispatchRuntime.MessageInspectors.Add(messageInspector);
        }

        public void Validate(ServiceEndpoint endpoint)
        {
            //throw new NotImplementedException();
        }

        #endregion
    }
}