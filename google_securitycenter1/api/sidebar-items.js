initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["Asset","Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource."],["AssetDiscoveryConfig","The configuration used for Asset Discovery runs."],["AuditConfig","Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { \"audit_configs\": [ { \"service\": \"allServices\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" }, { \"log_type\": \"ADMIN_READ\" } ] }, { \"service\": \"sampleservice.googleapis.com\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\" }, { \"log_type\": \"DATA_WRITE\", \"exempted_members\": [ \"user:aliya@example.com\" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging."],["AuditLogConfig","Provides the configuration for logging a type of permissions. Example: { \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging."],["Binding","Associates `members` with a `role`."],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`."],["Expr","Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: \"Summary size limit\" description: \"Determines if a summary is less than 100 chars\" expression: \"document.summary.size() < 100\" Example (Equality): title: \"Requestor is owner\" description: \"Determines if requestor is the document owner\" expression: \"document.owner == request.auth.claims.email\" Example (Logic): title: \"Public documents\" description: \"Determine whether the document should be publicly visible\" expression: \"document.type != 'private' && document.type != 'internal'\" Example (Data Manipulation): title: \"Notification string\" description: \"Create a notification string with a timestamp.\" expression: \"'New message received at ' + string(document.create_time)\" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information."],["Finding","Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding."],["Folder","Message that contains the resource name and display name of a folder resource."],["FolderAssetGroupCall","Filters an organization's assets and groups them by their specified properties."],["FolderAssetListCall","Lists an organization's assets."],["FolderAssetUpdateSecurityMarkCall","Updates security marks."],["FolderMethods","A builder providing access to all methods supported on folder resources. It is not used directly, but through the `SecurityCommandCenter` hub."],["FolderSourceFindingGroupCall","Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings"],["FolderSourceFindingListCall","Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings"],["FolderSourceFindingPatchCall","Creates or updates a finding. The corresponding source must exist for a finding creation to succeed."],["FolderSourceFindingSetStateCall","Updates the state of a finding."],["FolderSourceFindingUpdateSecurityMarkCall","Updates security marks."],["FolderSourceListCall","Lists all sources belonging to an organization."],["GetIamPolicyRequest","Request message for `GetIamPolicy` method."],["GetPolicyOptions","Encapsulates settings provided to GetIamPolicy."],["GroupAssetsRequest","Request message for grouping by assets."],["GroupAssetsResponse","Response message for grouping by assets."],["GroupFindingsRequest","Request message for grouping by findings."],["GroupFindingsResponse","Response message for group by findings."],["GroupResult","Result containing the properties and count of a groupBy request."],["IamPolicy","Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user."],["ListAssetsResponse","Response message for listing assets."],["ListAssetsResult","Result containing the Asset and its State."],["ListFindingsResponse","Response message for listing findings."],["ListFindingsResult","Result containing the Finding and its StateChange."],["ListNotificationConfigsResponse","Response message for listing notification configs."],["ListOperationsResponse","The response message for Operations.ListOperations."],["ListSourcesResponse","Response message for listing sources."],["NotificationConfig","Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["OrganizationAssetGroupCall","Filters an organization's assets and groups them by their specified properties."],["OrganizationAssetListCall","Lists an organization's assets."],["OrganizationAssetRunDiscoveryCall","Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error."],["OrganizationAssetUpdateSecurityMarkCall","Updates security marks."],["OrganizationGetOrganizationSettingCall","Gets the settings for an organization."],["OrganizationMethods","A builder providing access to all methods supported on organization resources. It is not used directly, but through the `SecurityCommandCenter` hub."],["OrganizationNotificationConfigCreateCall","Creates a notification config."],["OrganizationNotificationConfigDeleteCall","Deletes a notification config."],["OrganizationNotificationConfigGetCall","Gets a notification config."],["OrganizationNotificationConfigListCall","Lists notification configs."],["OrganizationNotificationConfigPatchCall","Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter"],["OrganizationOperationCancelCall","Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`."],["OrganizationOperationDeleteCall","Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`."],["OrganizationOperationGetCall","Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service."],["OrganizationOperationListCall","Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id."],["OrganizationSettings","User specified settings that are attached to the Security Command Center organization."],["OrganizationSourceCreateCall","Creates a source."],["OrganizationSourceFindingCreateCall","Creates a finding. The corresponding source must exist for finding creation to succeed."],["OrganizationSourceFindingGroupCall","Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings"],["OrganizationSourceFindingListCall","Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings"],["OrganizationSourceFindingPatchCall","Creates or updates a finding. The corresponding source must exist for a finding creation to succeed."],["OrganizationSourceFindingSetStateCall","Updates the state of a finding."],["OrganizationSourceFindingUpdateSecurityMarkCall","Updates security marks."],["OrganizationSourceGetCall","Gets a source."],["OrganizationSourceGetIamPolicyCall","Gets the access control policy on the specified Source."],["OrganizationSourceListCall","Lists all sources belonging to an organization."],["OrganizationSourcePatchCall","Updates a source."],["OrganizationSourceSetIamPolicyCall","Sets the access control policy on the specified Source."],["OrganizationSourceTestIamPermissionCall","Returns the permissions that a caller has on the specified source."],["OrganizationUpdateOrganizationSettingCall","Updates an organization's settings."],["Policy","An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation. JSON example: { \"bindings\": [ { \"role\": \"roles/resourcemanager.organizationAdmin\", \"members\": [ \"user:mike@example.com\", \"group:admins@example.com\", \"domain:google.com\", \"serviceAccount:my-project-id@appspot.gserviceaccount.com\" ] }, { \"role\": \"roles/resourcemanager.organizationViewer\", \"members\": [ \"user:eve@example.com\" ], \"condition\": { \"title\": \"expirable access\", \"description\": \"Does not grant access after Sep 2020\", \"expression\": \"request.time < timestamp('2020-10-01T00:00:00.000Z')\", } } ], \"etag\": \"BwWWja0YfJA=\", \"version\": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the IAM documentation."],["ProjectAssetGroupCall","Filters an organization's assets and groups them by their specified properties."],["ProjectAssetListCall","Lists an organization's assets."],["ProjectAssetUpdateSecurityMarkCall","Updates security marks."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `SecurityCommandCenter` hub."],["ProjectSourceFindingGroupCall","Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings"],["ProjectSourceFindingListCall","Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings"],["ProjectSourceFindingPatchCall","Creates or updates a finding. The corresponding source must exist for a finding creation to succeed."],["ProjectSourceFindingSetStateCall","Updates the state of a finding."],["ProjectSourceFindingUpdateSecurityMarkCall","Updates security marks."],["ProjectSourceListCall","Lists all sources belonging to an organization."],["Resource","Information related to the Google Cloud resource that is associated with this finding. LINT.IfChange"],["RunAssetDiscoveryRequest","Request message for running asset discovery for an organization."],["SecurityCenterProperties","Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user."],["SecurityCommandCenter","Central instance to access all SecurityCommandCenter related resource activities"],["SecurityMarks","User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization."],["SetFindingStateRequest","Request message for updating a finding's state."],["SetIamPolicyRequest","Request message for `SetIamPolicy` method."],["Source","Security Command Center finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, and other tools."],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the API Design Guide."],["StreamingConfig","The config for streaming-based notifications, which send each event as soon as it is detected."],["TestIamPermissionsRequest","Request message for `TestIamPermissions` method."],["TestIamPermissionsResponse","Response message for `TestIamPermissions` method."]]});