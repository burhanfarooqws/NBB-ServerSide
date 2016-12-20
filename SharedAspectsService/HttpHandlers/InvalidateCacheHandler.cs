using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SharedAspects.StaticData;
using VeriBranch.Business.Service;

namespace SharedAspectsService.HttpHandlers
{
    public class InvalidateCacheHandler : VeriBranch.Business.Service.HttpHandlers.BaseInvalidateCacheHandler<StaticDataInitializer>
    {
    }
}