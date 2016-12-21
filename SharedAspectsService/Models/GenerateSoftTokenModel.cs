using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SharedAspectsService.Models
{
    public class GenerateSoftTokenModelRequest
    {
        public string AutoPassword { get; set; }
        [Required]
        public string DeviceId { get; set; }
        public bool IsAuthenticatedWithFingerPrint { get; set; }
        public bool IsFingerPrint { get; set; }
        public string Password { get; set; }
    }

    public class GenerateSoftTokenModelResponse
    {
        public string OTP { get; set; }
    }
}