using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VeriBranch.Business.Service;
using VeriBranch.Common.Constants;
using VeriBranch.Common.MessageDefinitions;
using VeriBranch.Utilities.ConfigurationUtilities;
using System;
using System.Configuration;
using VeriBranch.Business.Service;
using VeriBranch.Business.Service.StaticData;
using VeriBranch.Common.Constants;
using VeriBranch.Common.MessageDefinitions;
using VeriBranch.Utilities.ConfigurationUtilities;

namespace SharedAspectsService.Services
{
    public class MobileServiceController : ApiController
    {
        // GET api/<controller>
        public HttpResponseMessage Get()
        {
            //return StaticDataInitializer();
            return DeviceExistance();
        }

        private HttpResponseMessage StaticDataInitializer()
        {
            StaticDataConfigResponse staticDataConfigResponse = new StaticDataConfigResponse();
            StaticDataConfigRequest staticDataConfigRequest = new StaticDataConfigRequest();
            staticDataConfigRequest.ManageRequestType = VeriBranch.Common.MessageDefinitions.ManageRequestTypeEnum.List;
            staticDataConfigRequest.WebSiteName = ConfigReader.WebSiteName;
            var callDispatcher = new VBMCallDispatcher();
            staticDataConfigResponse = callDispatcher.DispatchAction<StaticDataConfigRequest, StaticDataConfigResponse>(
                TransactionNameConstants.StaticDataConfigTransaction, MethodTypeEnum.Execute, Channels.SharedAspects, staticDataConfigRequest);
            //return staticDataConfigResponse;
            return Request.CreateResponse(HttpStatusCode.OK, staticDataConfigResponse);
        }

        private HttpResponseMessage DeviceExistance()
        {
            SoftTokenDeviceExistenceTransactionResponse response = null;
            SoftTokenDeviceExistenceTransactionRequest request = new SoftTokenDeviceExistenceTransactionRequest();
            request.DeviceId = "5cc32f764f43ef66";
            var callDispatcher = new VBMCallDispatcher();
            response = callDispatcher.DispatchAction<SoftTokenDeviceExistenceTransactionRequest, SoftTokenDeviceExistenceTransactionResponse>(
                "SoftTokenDeviceExistenceTransaction", MethodTypeEnum.Execute, Channels.SharedAspects, request);
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}