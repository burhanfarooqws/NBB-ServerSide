using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;
using SharedAspectsService.DataContracts;
using System.Runtime.Serialization;
using VeriBranch.Common.MessageDefinitions;

namespace SharedAspectsService.ServiceInterfaces
{
    [ServiceContract]
    interface ICRMIntegration
    {
        [OperationContract]
        Role[] GetRoleList(RoleListRequestData request);
        // TODO For Atakan
        //[OperationContract]
        //CustomMenuItem[] GetMenuList(MenuListRequestData request);
        [OperationContract]
        BackOfficeUserManagementResult CreateUser(BackOfficeUserManagementData request);
        [OperationContract]
        void UpdateUser(BackOfficeUserManagementData request);
        [OperationContract]
        void DeleteUser(BackOfficeUserManagementData request);
    }
}
