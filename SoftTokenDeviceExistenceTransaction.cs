using System;
using System.Linq;
using VeriBranch.Business.Managers;
using VeriBranch.Business.Transactions;
using VeriBranch.Common.MessageDefinitions;
using VeriBranch.DataAccess;

namespace Custom.Business.Internet.Transactions
{
    public class SoftTokenDeviceExistenceTransaction : ITransaction
    {
        public void Start(object request, ref object response, TransactionHeader transactionHeader)
        {

        }

        public void Confirm(object request, ref object response, TransactionHeader transactionHeader)
        {

        }

        public void Execute(object requestMessage, ref object responseMessage, TransactionHeader transactionHeader)
        {
            SoftTokenDeviceExistenceTransactionRequest request = requestMessage as SoftTokenDeviceExistenceTransactionRequest;
            SoftTokenDeviceExistenceTransactionResponse response = responseMessage as SoftTokenDeviceExistenceTransactionResponse;
            
            using (VeriBranchDataEntities dataEntities = new VeriBranchDataEntities())
            {
                var result = dataEntities.VPSoftTokenRegistration.Where(x => x.VpOtpDevice.SerialNumber.Equals(request.DeviceId)).ToList();

                if (result != null && result.Count > 0)
                {
                    response.IsExisting = true;
                    response.UserId = result[0].UserId;
                    response.UseFingerPrint = Convert.ToBoolean(result[0].Preference);
                }
                else
                    response.IsExisting = false;
            }


        }

        public void Fetch(object request, ref object response, TransactionHeader transactionHeader)
        {

        }
    }
}
