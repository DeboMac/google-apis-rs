initSidebarItems({"struct":[["AndroidProvisioningPartner","Central instance to access all AndroidProvisioningPartner related resource activities"],["ClaimDeviceRequest","Request message to claim a device on behalf of a customer."],["ClaimDeviceResponse","Response message containing device id of the claim."],["ClaimDevicesRequest","Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal."],["Company","A reseller, vendor, or customer in the zero-touch reseller and customer APIs."],["Configuration","A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases."],["CreateCustomerRequest","Request message to create a customer."],["CustomerApplyConfigurationRequest","Request message for customer to assign a configuration to device."],["CustomerConfigurationCreateCall","Creates a new configuration. Once created, a customer can apply the configuration to devices."],["CustomerConfigurationDeleteCall","Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied."],["CustomerConfigurationGetCall","Gets the details of a configuration."],["CustomerConfigurationListCall","Lists a customer's configurations."],["CustomerConfigurationPatchCall","Updates a configuration's field values."],["CustomerDeviceApplyConfigurationCall","Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset."],["CustomerDeviceGetCall","Gets the details of a device."],["CustomerDeviceListCall","Lists a customer's devices."],["CustomerDeviceRemoveConfigurationCall","Removes a configuration from device."],["CustomerDeviceUnclaimCall","Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again."],["CustomerDpcListCall","Lists the DPCs (device policy controllers) that support zero-touch enrollment."],["CustomerListCall","Lists the user's customer accounts."],["CustomerListConfigurationsResponse","Response message of customer's listing configuration."],["CustomerListCustomersResponse","Response message for listing my customers."],["CustomerListDevicesResponse","Response message of customer's liting devices."],["CustomerListDpcsResponse","Response message of customer's listing DPCs."],["CustomerMethods","A builder providing access to all methods supported on customer resources. It is not used directly, but through the `AndroidProvisioningPartner` hub."],["CustomerRemoveConfigurationRequest","Request message for customer to remove the configuration from device."],["CustomerUnclaimDeviceRequest","Request message for customer to unclaim a device."],["Device","An Android device registered for zero-touch enrollment."],["DeviceClaim","A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read Claim devices for customers."],["DeviceIdentifier","Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read Identifiers."],["DeviceMetadata","Metadata entries that can be attached to a `Device`. To learn more, read Device metadata."],["DeviceReference","A `DeviceReference` is an API abstraction that lets you supply a device argument to a method using one of the following identifier types: * A numeric API resource ID. * Real-world hardware IDs, such as IMEI number, belonging to the manufactured device. Methods that operate on devices take a `DeviceReference` as a parameter type because it's more flexible for the caller. To learn more about device identifiers, read Identifiers."],["Dpc","An EMM's DPC (device policy controller). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play."],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`."],["FindDevicesByDeviceIdentifierRequest","Request to find devices."],["FindDevicesByDeviceIdentifierResponse","Response containing found devices."],["FindDevicesByOwnerRequest","Request to find devices by customers."],["FindDevicesByOwnerResponse","Response containing found devices."],["ListCustomersResponse","Response message of all customers related to this partner."],["ListVendorCustomersResponse","Response message to list customers of the vendor."],["ListVendorsResponse","Response message to list vendors of the partner."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["OperationGetCall","Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service."],["OperationMethods","A builder providing access to all methods supported on operation resources. It is not used directly, but through the `AndroidProvisioningPartner` hub."],["PartnerClaim","Identifies one claim request."],["PartnerCustomerCreateCall","Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal."],["PartnerCustomerListCall","Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal."],["PartnerDeviceClaimAsyncCall","Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read Long‑running batch operations."],["PartnerDeviceClaimCall","Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error."],["PartnerDeviceFindByIdentifierCall","Finds devices by hardware identifiers, such as IMEI."],["PartnerDeviceFindByOwnerCall","Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results."],["PartnerDeviceGetCall","Gets a device."],["PartnerDeviceMetadataCall","Updates reseller metadata associated with the device."],["PartnerDeviceUnclaimAsyncCall","Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read Long‑running batch operations."],["PartnerDeviceUnclaimCall","Unclaims a device from a customer and removes it from zero-touch enrollment."],["PartnerDeviceUpdateMetadataAsyncCall","Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read Long‑running batch operations."],["PartnerMethods","A builder providing access to all methods supported on partner resources. It is not used directly, but through the `AndroidProvisioningPartner` hub."],["PartnerUnclaim","Identifies one unclaim request."],["PartnerVendorCustomerListCall","Lists the customers of the vendor."],["PartnerVendorListCall","Lists the vendors of the partner."],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the API Design Guide."],["UnclaimDeviceRequest","Request message to unclaim a device."],["UnclaimDevicesRequest","Request to unclaim devices asynchronously in batch."],["UpdateDeviceMetadataInBatchRequest","Request to update device metadata in batch."],["UpdateDeviceMetadataRequest","Request to set metadata for a device."],["UpdateMetadataArguments","Identifies metadata updates to one device."]]});