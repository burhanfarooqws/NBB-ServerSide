using SharedAspectsService.Formats;
using SharedAspectsService.Providers;
using Microsoft.Owin;
using Microsoft.Owin.Security.Jwt;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace SharedAspectsService
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();

            // Web API routes
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            ConfigureOAuth(app);
            app.UseJwtBearerAuthentication(new MyJwtOptions());
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            app.UseWebApi(config);
        }

        public void ConfigureOAuth(IAppBuilder app)
        {
            OAuthAuthorizationServerOptions OAuthServerOptions = new OAuthAuthorizationServerOptions()
            {
                //For Dev enviroment only (on production should be AllowInsecureHttp = false)
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/oauth2/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(30),
                Provider = new CustomOAuthProvider()
            };

            OAuthServerOptions.AccessTokenFormat = new CustomJwtFormat(OAuthServerOptions);
            // OAuth 2.0 Bearer Access Token Generation
            app.UseOAuthAuthorizationServer(OAuthServerOptions);
        }

        public class MyJwtOptions : JwtBearerAuthenticationOptions
        {
            public MyJwtOptions()
            {
                var issuer = "localhost";
                var audience = "all";
                var key = Convert.FromBase64String("SXhyQWpEb2EyRnFFbE83SWhyU3JVSkVMaFVja2VQRVBWcGFlUGxTX1hhdw==");

                AllowedAudiences = new[] { audience };
                IssuerSecurityTokenProviders = new[]
        {
            new SymmetricKeyIssuerSecurityTokenProvider(issuer, key)
        };
            }
        }

    }
}
