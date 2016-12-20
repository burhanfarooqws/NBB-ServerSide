using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.ServiceModel.Description;
using System.Web;
using System.Web.Services.Description;
using System.Xml;
using System.Xml.Schema;

namespace SharedAspectsService
{
    //TODO : Header'da gidecek tiplerin xsd'lerinin yeri belirlenecek 
    public class SoapHeaderWsdlExport
    {
        public static readonly string MessageHeaderXSD = "VeriBranch.Common.MessageDefinitions.CommonTypes.VeriBranchMessageHeader.xsd";

        public static void ExportEndpoint(WsdlExporter exporter, WsdlEndpointConversionContext context)
        {
            // Read the schema of the custom header message
            var assembly = Assembly.GetAssembly(typeof(VeriBranch.Common.MessageDefinitions.AccessRestriction));

            XmlSchema customSoapHeaderSchema = XmlSchema.Read(assembly.GetManifestResourceStream(MessageHeaderXSD),
                new ValidationEventHandler(SoapHeaderWsdlExport.ValidationCallBack));

            // Create the HeaderMessage to add to wsdl:message AND to refer to from wsdl:operation
            System.Web.Services.Description.Message headerMessage = CreateHeaderMessage();

            foreach (System.Web.Services.Description.ServiceDescription wsdl in exporter.GeneratedWsdlDocuments)
            {
                // Add the schema of the CustomSoapHeader to the types AND add the namespace to the list of namespaces
                wsdl.Types.Schemas.Add(customSoapHeaderSchema);
                wsdl.Namespaces.Add("sh", VeriBranchMessageHeaderNames.SoapHeaderNamespace);

                // The actual adding of the message to the list of messages
                wsdl.Messages.Add(headerMessage);
            }

            addHeaderToOperations(headerMessage, context);
        }

        private static System.Web.Services.Description.Message CreateHeaderMessage()
        {
            // Create Message
            System.Web.Services.Description.Message headerMessage = new System.Web.Services.Description.Message();

            // Set the name of the header message
            headerMessage.Name = VeriBranchMessageHeaderNames.SoapHeaderName;

            // Create the messagepart and add to the header message
            MessagePart part = new MessagePart();
            part.Name = "Header";
            part.Element = new XmlQualifiedName(VeriBranchMessageHeaderNames.SoapHeaderName, VeriBranchMessageHeaderNames.SoapHeaderNamespace);
            headerMessage.Parts.Add(part);

            return headerMessage;
        }

        private static void addHeaderToOperations(System.Web.Services.Description.Message headerMessage, WsdlEndpointConversionContext context)
        {
            // Create a XmlQualifiedName based on the header message, this will be used for binding the header message and the SoapHeaderBinding
            XmlQualifiedName header = new XmlQualifiedName(headerMessage.Name, headerMessage.ServiceDescription.TargetNamespace);

            foreach (OperationBinding operation in context.WsdlBinding.Operations)
            {
                // Add the SoapHeaderBinding to the MessageBinding
                ExportMessageHeaderBinding(operation.Input, context, header, false);
                ExportMessageHeaderBinding(operation.Output, context, header, false);
            }
        }

        private static void ExportMessageHeaderBinding(MessageBinding messageBinding, WsdlEndpointConversionContext context, XmlQualifiedName header, bool isEncoded)
        {
            // For brevity, assume Soap12HeaderBinding for Soap 1.2
            SoapHeaderBinding binding = new Soap12HeaderBinding();
            binding.Part = "Header";
            binding.Message = header;
            binding.Use = isEncoded ? SoapBindingUse.Encoded : SoapBindingUse.Literal;

            messageBinding.Extensions.Add(binding);
        }

        private static void ValidationCallBack(object sender, ValidationEventArgs args)
        {
            if (args.Severity == XmlSeverityType.Warning)
                Console.WriteLine("\tWarning: Matching schema not found. No validation occurred." + args.Message);
            else
                Console.WriteLine("\tValidation error: " + args.Message);
        }
    }
}