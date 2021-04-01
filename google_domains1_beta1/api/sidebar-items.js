initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["AuditConfig","Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { \"audit_configs\": [ { \"service\": \"allServices\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" }, { \"log_type\": \"ADMIN_READ\" } ] }, { \"service\": \"sampleservice.googleapis.com\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\" }, { \"log_type\": \"DATA_WRITE\", \"exempted_members\": [ \"user:aliya@example.com\" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging."],["AuditLogConfig","Provides the configuration for logging a type of permissions. Example: { \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging."],["AuthorizationCode","Defines an authorization code."],["Binding","Associates `members` with a `role`."],["CloudDomains","Central instance to access all CloudDomains related resource activities"],["ConfigureContactSettingsRequest","Request for the `ConfigureContactSettings` method."],["ConfigureDnsSettingsRequest","Request for the `ConfigureDnsSettings` method."],["ConfigureManagementSettingsRequest","Request for the `ConfigureManagementSettings` method."],["Contact","Details required for a contact associated with a `Registration`."],["ContactSettings","Defines the contact information associated with a `Registration`. ICANN requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical."],["CustomDns","Configuration for an arbitrary DNS provider."],["DnsSettings","Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records."],["DsRecord","Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC for a domain. It contains a digest (hash) of a DNSKEY record that must be present in the domain's DNS zone."],["ExportRegistrationRequest","Request for the `ExportRegistration` method."],["Expr","Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: \"Summary size limit\" description: \"Determines if a summary is less than 100 chars\" expression: \"document.summary.size() < 100\" Example (Equality): title: \"Requestor is owner\" description: \"Determines if requestor is the document owner\" expression: \"document.owner == request.auth.claims.email\" Example (Logic): title: \"Public documents\" description: \"Determine whether the document should be publicly visible\" expression: \"document.type != 'private' && document.type != 'internal'\" Example (Data Manipulation): title: \"Notification string\" description: \"Create a notification string with a timestamp.\" expression: \"'New message received at ' + string(document.create_time)\" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information."],["GlueRecord","Defines a host on your domain that is a DNS name server for your domain and/or other domains. Glue records are a way of making the IP address of a name server known, even when it serves DNS queries for its parent domain. For example, when `ns.example.com` is a name server for `example.com`, the host `ns.example.com` must have a glue record to break the circular DNS reference."],["GoogleDomainsDns","Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to Google Domains."],["ListLocationsResponse","The response message for Locations.ListLocations."],["ListOperationsResponse","The response message for Operations.ListOperations."],["ListRegistrationsResponse","Response for the `ListRegistrations` method."],["Location","A resource that represents Google Cloud Platform location."],["ManagementSettings","Defines renewal, billing, and transfer settings for a `Registration`."],["Money","Represents an amount of money with its currency type."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["Policy","An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation. JSON example: { \"bindings\": [ { \"role\": \"roles/resourcemanager.organizationAdmin\", \"members\": [ \"user:mike@example.com\", \"group:admins@example.com\", \"domain:google.com\", \"serviceAccount:my-project-id@appspot.gserviceaccount.com\" ] }, { \"role\": \"roles/resourcemanager.organizationViewer\", \"members\": [ \"user:eve@example.com\" ], \"condition\": { \"title\": \"expirable access\", \"description\": \"Does not grant access after Sep 2020\", \"expression\": \"request.time < timestamp('2020-10-01T00:00:00.000Z')\", } } ], \"etag\": \"BwWWja0YfJA=\", \"version\": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the IAM documentation."],["PostalAddress","Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478"],["ProjectLocationGetCall","Gets information about a location."],["ProjectLocationListCall","Lists information about the supported locations for this service."],["ProjectLocationOperationGetCall","Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service."],["ProjectLocationOperationListCall","Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id."],["ProjectLocationRegistrationConfigureContactSettingCall","Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact ."],["ProjectLocationRegistrationConfigureDnsSettingCall","Updates a `Registration`'s DNS settings."],["ProjectLocationRegistrationConfigureManagementSettingCall","Updates a `Registration`'s management settings."],["ProjectLocationRegistrationDeleteCall","Deletes a `Registration` resource. This method only works on resources in one of the following states: * `state` is `EXPORTED` with `expire_time` in the past * `state` is `REGISTRATION_FAILED`"],["ProjectLocationRegistrationExportCall","Exports a `Registration` that you no longer want to use with Cloud Domains. You can continue to use the domain in Google Domains until it expires. If the export is successful: * The resource's `state` becomes `EXPORTED`, meaning that it is no longer managed by Cloud Domains * Because individual users can own domains in Google Domains, the calling user becomes the domain's sole owner. Permissions for the domain are subsequently managed in Google Domains. * Without further action, the domain does not renew automatically. The new owner can set up billing in Google Domains to renew the domain if needed."],["ProjectLocationRegistrationGetCall","Gets the details of a `Registration` resource."],["ProjectLocationRegistrationGetIamPolicyCall","Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set."],["ProjectLocationRegistrationListCall","Lists the `Registration` resources in a project."],["ProjectLocationRegistrationPatchCall","Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`"],["ProjectLocationRegistrationRegisterCall","Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration."],["ProjectLocationRegistrationResetAuthorizationCodeCall","Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration."],["ProjectLocationRegistrationRetrieveAuthorizationCodeCall","Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration."],["ProjectLocationRegistrationRetrieveRegisterParameterCall","Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`."],["ProjectLocationRegistrationSearchDomainCall","Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability."],["ProjectLocationRegistrationSetIamPolicyCall","Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors."],["ProjectLocationRegistrationTestIamPermissionCall","Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may \"fail open\" without warning."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `CloudDomains` hub."],["RegisterDomainRequest","Request for the `RegisterDomain` method."],["RegisterParameters","Parameters required to register a new domain."],["Registration","The `Registration` resource facilitates managing and configuring domain name registrations. To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. "],["ResetAuthorizationCodeRequest","Request for the `ResetAuthorizationCode` method."],["RetrieveRegisterParametersResponse","Response for the `RetrieveRegisterParameters` method."],["SearchDomainsResponse","Response for the `SearchDomains` method."],["SetIamPolicyRequest","Request message for `SetIamPolicy` method."],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the API Design Guide."],["TestIamPermissionsRequest","Request message for `TestIamPermissions` method."],["TestIamPermissionsResponse","Response message for `TestIamPermissions` method."]]});