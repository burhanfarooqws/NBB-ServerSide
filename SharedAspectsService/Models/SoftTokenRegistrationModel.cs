using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SharedAspectsService.Models
{
    public class SoftTokenRegistrationModelRequest
    {
        public string AccountNumber { get; set; }
        public string AtmCardNumber { get; set; }
        public string AtmPin { get; set; }
        public string CustomerId { get; set; }
        public string DeviceId { get; set; }
        public string OTP { get; set; }
        public string Password { get; set; }
        public string STPassword { get; set; }
        public bool UseFingerPrint { get; set; }
    }
    public class SoftTokenRegistrationModelResponse
    {
        public bool AuthenticationSuccess { get; set; }
    }
}