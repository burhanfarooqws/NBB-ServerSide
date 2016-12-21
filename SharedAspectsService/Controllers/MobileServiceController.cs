using SharedAspectsService.Models;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VeriBranch.Business.Service;
using VeriBranch.Common.Constants;
using VeriBranch.Common.MessageDefinitions;
using VeriBranch.Utilities.Common;
using VeriBranch.Utilities.ConfigurationUtilities;

namespace SharedAspectsService.Services
{
    [RoutePrefix("mobileservice")]
    public class MobileServiceController : ApiController
    {
        [Authorize]
        [HttpGet]
        [Route("authorize")]
        public HttpResponseMessage Authorize()
        {
            return Request.CreateResponse(HttpStatusCode.OK, new string[] { "value1", "value2" });
        }

        [HttpGet]
        [Route("unauthorize")]
        public HttpResponseMessage UnAuthorize()
        {
            //SoftTokenDeviceExistenceTransactionResponse response = null;
            //SoftTokenDeviceExistenceTransactionRequest request = new SoftTokenDeviceExistenceTransactionRequest();
            //request.DeviceId = "5cc32f764f43ef66";
            //var callDispatcher = new VBMCallDispatcher();
            //response = callDispatcher.DispatchAction<SoftTokenDeviceExistenceTransactionRequest, SoftTokenDeviceExistenceTransactionResponse>(
            //    "SoftTokenDeviceExistenceTransaction", MethodTypeEnum.Execute, Channels.SharedAspects, request);
            ////return response;
            //return Request.CreateResponse(HttpStatusCode.OK, response);
            return Request.CreateResponse(HttpStatusCode.OK, new string[] { "value1", "value2" });
        }

        [HttpPost]
        [Route("deviceexistance")]
        public HttpResponseMessage DeviceExistance(SoftTokenDeviceExistenceModelRequest request)
        {
            var tnxResponse = DeviceExistance(new SoftTokenDeviceExistenceTransactionRequest()
            {
                DeviceId = request.DeviceId
            });
            var response = new SoftTokenDeviceExistenceModelResponse()
            {
                IsExisting = tnxResponse.IsExisting,
                UseFingerPrint = tnxResponse.UseFingerPrint,
                UserId = tnxResponse.UserId
            };
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [HttpPost]
        [Route("generatesofttoken")]
        public HttpResponseMessage GenerateSoftToken(GenerateSoftTokenModelRequest request)
        {
            var tnxResponse = GenerateSoftToken(new GenerateSoftTokenRequest() { 
                AutoPassword = request.AutoPassword,
                DeviceId = request.DeviceId,
                IsAuthenticatedWithFingerPrint = request.IsAuthenticatedWithFingerPrint,
                IsFingerPrint = request.IsFingerPrint,
                Password = request.Password
            });
            var response = new GenerateSoftTokenModelResponse()
            {
                OTP = tnxResponse.OTP
            };
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [HttpPost]
        [Route("softtokenregistration")]
        public HttpResponseMessage SoftTokenRegistration(SoftTokenRegistrationModelRequest request)
        {
            var tnxResponse = SoftTokenRegistration(new SoftTokenRegistrationRequest(){
                AccountNumber = request.AccountNumber,
                AtmCardNumber = request.AtmCardNumber,
                AtmPin = request.AtmPin,
                CustomerId = request.CustomerId,
                DeviceId = request.DeviceId,
                OTP = request.OTP,
                Password = request.Password,//Encryption.EncryptString(request.Password, Convert.ToString(ConfigurationParametersPresenter.GetParameter("RSA.PrivateKey"))),
                STPassword = request.STPassword,
                UseFingerPrint = request.UseFingerPrint
            });

            var response = new SoftTokenRegistrationModelResponse()
            {
                AuthenticationSuccess = tnxResponse.AuthrnticationSuccess
            };
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }
        private StaticDataConfigResponse StaticDataInitializer()
        {
            StaticDataConfigResponse staticDataConfigResponse = new StaticDataConfigResponse();
            StaticDataConfigRequest staticDataConfigRequest = new StaticDataConfigRequest();
            staticDataConfigRequest.ManageRequestType = VeriBranch.Common.MessageDefinitions.ManageRequestTypeEnum.List;
            staticDataConfigRequest.WebSiteName = ConfigReader.WebSiteName;
            var callDispatcher = new VBMCallDispatcher();
            staticDataConfigResponse = callDispatcher.DispatchAction<StaticDataConfigRequest, StaticDataConfigResponse>(
                TransactionNameConstants.StaticDataConfigTransaction, MethodTypeEnum.Execute, Channels.SharedAspects, staticDataConfigRequest);
            //return staticDataConfigResponse;
            return staticDataConfigResponse;
        }
        private SoftTokenDeviceExistenceTransactionResponse DeviceExistance(SoftTokenDeviceExistenceTransactionRequest model)
        {
            SoftTokenDeviceExistenceTransactionResponse response = null;
            SoftTokenDeviceExistenceTransactionRequest request = model;
            var callDispatcher = new VBMCallDispatcher();
            response = callDispatcher.DispatchAction<SoftTokenDeviceExistenceTransactionRequest, SoftTokenDeviceExistenceTransactionResponse>(
                "SoftTokenDeviceExistenceTransaction", MethodTypeEnum.Execute, Channels.SharedAspects, request);
            return response;
        }
        private GenerateSoftTokenResponse GenerateSoftToken(GenerateSoftTokenRequest model)
        {
            GenerateSoftTokenResponse response = null;
            GenerateSoftTokenRequest request = model;
            var callDispatcher = new VBMCallDispatcher();
            response = callDispatcher.DispatchAction<GenerateSoftTokenRequest, GenerateSoftTokenResponse>(
                "GenerateSoftTokenTransaction", MethodTypeEnum.Execute, Channels.SharedAspects, request);
            return response;
        }
        private SoftTokenRegistrationResponse SoftTokenRegistration(SoftTokenRegistrationRequest model)
        {
            SoftTokenRegistrationResponse response = null;
            SoftTokenRegistrationRequest request = model;
            var callDispatcher = new VBMCallDispatcher();
            response = callDispatcher.DispatchAction<SoftTokenRegistrationRequest, SoftTokenRegistrationResponse>(
                "SoftTokenRegistrationTransaction", MethodTypeEnum.Execute, Channels.SharedAspects, request);
            return response;
        }

        #region Commented Code
        //// GET api/<controller>/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<controller>
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/<controller>/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //public void Delete(int id)
        //{
        //} 
        #endregion
    }

    //public class SoftTokenDeviceExistenceRequest
    //{
    //    [MaxLength(100)]
    //    [Required]
    //    public string DeviceId { get; set; }
    //}

    //public class SoftTokenDeviceExistenceResponse
    //{

    //}
}