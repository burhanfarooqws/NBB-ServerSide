// -----------------------------------------------------------------------
// <copyright file="StaticDataInitializer.cs" company="Microsoft">
// TODO: Update copyright text.
// </copyright>
// -----------------------------------------------------------------------

namespace SharedAspects.StaticData
{
    using System;
    using System.Configuration;
    using VeriBranch.Business.Service;
    using VeriBranch.Business.Service.StaticData;
    using VeriBranch.Common.Constants;
    using VeriBranch.Common.MessageDefinitions;
    using VeriBranch.Utilities.ConfigurationUtilities;

    /// <summary>
    /// Service Implementations - StaticDataInitializer
    /// </summary>
    public class StaticDataInitializer : BaseStaticDataInitializer
    {
        protected override StaticDataConfigResponse GetStaticDataConfig()
        {
            StaticDataConfigResponse staticDataConfigResponse = null;

            if (ConfigReader.StaticDataConfigurationGetType == VeriBranch.Utilities.ConfigurationGetTypeEnum.FromDataBase)
            {
                StaticDataConfigRequest staticDataConfigRequest = new StaticDataConfigRequest();

                staticDataConfigRequest.ManageRequestType = VeriBranch.Common.MessageDefinitions.ManageRequestTypeEnum.List;
                staticDataConfigRequest.WebSiteName = ConfigReader.WebSiteName;

                var callDispatcher = new VBMCallDispatcher();
                staticDataConfigResponse = callDispatcher.DispatchAction<StaticDataConfigRequest, StaticDataConfigResponse>(
                    TransactionNameConstants.StaticDataConfigTransaction, MethodTypeEnum.Execute, Channels.SharedAspects, staticDataConfigRequest);

                if (staticDataConfigResponse != null && !String.IsNullOrEmpty(staticDataConfigResponse.TransactionStaticDataConfig) && !String.IsNullOrEmpty(staticDataConfigResponse.TransactionStaticServiceConfig))
                {
                    logger.Info("Static data config is fetched successfully. Continue generating cache.");
                }
                else
                {
                    string errorText = "Static data config fetch is not succedded. Throws configuration exception.";

                    logger.Error(errorText);
                    throw new ConfigurationException(errorText);
                }
            }
            else
            {
                staticDataConfigResponse = new StaticDataConfigResponse();
            }

            return staticDataConfigResponse;
        }
    }
}