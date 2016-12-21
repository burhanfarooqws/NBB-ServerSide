using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SharedAspectsService.Models
{
    public class SoftTokenDeviceExistenceModelRequest
    {
        [Required]
        public string DeviceId { get; set; }
    }

    public class SoftTokenDeviceExistenceModelResponse
    {
        public bool IsExisting { get; set; }

        public bool UseFingerPrint { get; set; }

        public long UserId { get; set; }
    }
}