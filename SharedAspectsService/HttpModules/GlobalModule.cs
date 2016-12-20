using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SharedAspects.StaticData;
using VeriBranch.Business.Service.HttpModules;
using VeriBranch.Business.Service.Implementations.HttpModules;
using System.Collections;
using VeriBranch.WebApplication.Proxy;

namespace SharedAspectsService.HttpModules
{
    public class GlobalModule : BaseGlobalModule<StaticDataInitializer>
    {
        static GlobalModule()
        {
            EnableLog4NetInitialize = true;
            EnableStaticDataInitialize = true;

            EnableXmlSerializer = true;
            EnablePerfCounterInitialize = false;
            BusinessLayerProxy.ExpressionEvaluator = ExpressionRequestEvaluator;

        }

        private static bool ExpressionRequestEvaluator(string expression)
        {
            return (bool)VeriBranch.Expressions.ExpressionEvaluator.GetValue(new VeriBranch.Common.MessageDefinitions.RequestMessage(), expression);
        }
    }
}