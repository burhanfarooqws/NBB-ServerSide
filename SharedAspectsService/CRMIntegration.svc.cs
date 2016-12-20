using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using SharedAspectsService.DataContracts;
using SharedAspectsService.ServiceInterfaces;
using VeriBranch.Business.Service;
using VeriBranch.Common.Constants;
using VeriBranch.Common.MessageDefinitions;
using VeriBranch.Common.Exceptions;
using VeriBranch.Utilities.ConfigurationUtilities;
using System.Web.Services.Protocols;
using System.Web.Services;
using System.ServiceModel.Channels;

namespace SharedAspectsService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class CRMIntegration : ICRMIntegration
    {
        #region Role
        public Role[] GetRoleList(RoleListRequestData request)
        {
            VBMCallDispatcher callDispatcher = new VBMCallDispatcher();

            RoleListResponse roleListResponse = new RoleListResponse();
            RoleListRequest roleListRequest = new RoleListRequest();
            if (request == null)
            {
                return null;
            }
            try
            {
                roleListRequest.UserID = request.UserID;
                roleListRequest.ChannelCode = Channel.GetChannelID(Channels.BackOffice);
                roleListResponse = callDispatcher.DispatchAction<RoleListRequest, VeriBranch.Common.MessageDefinitions.RoleListResponse>(TransactionNameConstants.GetRoleListTransaction, MethodTypeEnum.Execute, Channels.SharedAspects, roleListRequest);
            }
            catch (Exception ex)
            {
                throw new FaultException(
                ex.Message,
                new FaultCode("Response Fault"));
            }

            if (roleListResponse == null)
                return null;

            return roleListResponse.Role;
        }
        #endregion

        #region Menu
        // TODO For Atakan
        //public CustomMenuItem[] GetMenuList(MenuListRequestData request)
        //{
        //    VBMCallDispatcher callDispatcher = new VBMCallDispatcher();
        //    MenuListResponse menuListResponse = new MenuListResponse();
        //    MenuListRequest menuListRequest = new MenuListRequest();
        //    if (request==null)
        //    {
        //        return null;
        //    }
        //    try
        //    {
        //        menuListRequest.UserID = request.UserID;
        //        menuListRequest.CultureCode = request.CultureCode;
        //        menuListRequest.BackOfficeMenuType = request.BackOfficeMenuType;
        //        menuListResponse = callDispatcher.DispatchAction<MenuListRequest, MenuListResponse>(TransactionNameConstants.GetMenuListTransaction, MethodTypeEnum.Execute, Channels.SharedAspects, menuListRequest);
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new FaultException(
        //        ex.Message,
        //        new FaultCode("Response Fault"));
        //    }
        //    if (menuListResponse == null)
        //        return null;

        //    return menuListResponse.MenuItems;
        //}
        #endregion

        #region User
        public BackOfficeUserManagementResult CreateUser(BackOfficeUserManagementData request)
        {
            return CreateOrUpdateUser(request, RequestTypeEnum.Add);
        }

        public void UpdateUser(BackOfficeUserManagementData request)
        {
            CreateOrUpdateUser(request, RequestTypeEnum.Update);
        }

        public void DeleteUser(BackOfficeUserManagementData request)
        {
            CreateOrUpdateUser(request, RequestTypeEnum.Delete);
        }

        private BackOfficeUserManagementResult CreateOrUpdateUser(BackOfficeUserManagementData userData, RequestTypeEnum requestType)
        {
            VBMCallDispatcher callDispatcher = new VBMCallDispatcher();
            BackOfficeUserManagementRequest request = new BackOfficeUserManagementRequest { User = userData };
            request.RequestType = requestType;
            var response = new BackOfficeUserManagementResponse();
            response = callDispatcher.DispatchAction<BackOfficeUserManagementRequest, BackOfficeUserManagementResponse>(TransactionNameConstants.CreateUserTransaction, MethodTypeEnum.Execute, Channels.SharedAspects, request);
            return response.Result;
        }
        #endregion

    }
}
