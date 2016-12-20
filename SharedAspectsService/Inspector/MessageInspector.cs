using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Dispatcher;
using System.Web;
using System.Web.Services.Protocols;
using System.Xml;
using VeriBranch.Common.MessageDefinitions;

namespace SharedAspectsService
{
    //TODO:WebConfig'deki 
    public class MessageInspector : IDispatchMessageInspector
    {
        #region IDispatchMessageInspector Members

        public object AfterReceiveRequest(ref System.ServiceModel.Channels.Message request, System.ServiceModel.IClientChannel channel, System.ServiceModel.InstanceContext instanceContext)
        {
            return null;
        }

        public void BeforeSendReply(ref System.ServiceModel.Channels.Message reply, object correlationState)
        {
            object result = null;
            if (OperationContext.Current.OutgoingMessageProperties.TryGetValue("VeriBranchResult", out result))
            {
                VeriBranchMessageHeader messageHeader = new VeriBranchMessageHeader();
                if (result != null)
                {
                    SharedAspectsHelper.MapVeriBranchResultToVeriBranchMessageHeader((VeriBranchResult)result, messageHeader);
                    OperationContext.Current.OutgoingMessageProperties.Remove("VeriBranchResult");
                }

                if (messageHeader != null)
                {
                    reply.Headers.Add(messageHeader);
                }
            }
        }

        #endregion
    }
}