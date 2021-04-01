initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["AuditConfig","Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { \"audit_configs\": [ { \"service\": \"allServices\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" }, { \"log_type\": \"ADMIN_READ\" } ] }, { \"service\": \"sampleservice.googleapis.com\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\" }, { \"log_type\": \"DATA_WRITE\", \"exempted_members\": [ \"user:aliya@example.com\" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging."],["AuditLogConfig","Provides the configuration for logging a type of permissions. Example: { \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging."],["AuditableService","Contains information about an auditable service."],["Aws","Represents an Amazon Web Services identity provider."],["Binding","Associates `members` with a `role`."],["CreateRoleRequest","The request to create a new role."],["CreateServiceAccountKeyRequest","The service account key create request."],["CreateServiceAccountRequest","The service account create request."],["DisableServiceAccountRequest","The service account disable request."],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`."],["EnableServiceAccountRequest","The service account enable request."],["Expr","Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: \"Summary size limit\" description: \"Determines if a summary is less than 100 chars\" expression: \"document.summary.size() < 100\" Example (Equality): title: \"Requestor is owner\" description: \"Determines if requestor is the document owner\" expression: \"document.owner == request.auth.claims.email\" Example (Logic): title: \"Public documents\" description: \"Determine whether the document should be publicly visible\" expression: \"document.type != 'private' && document.type != 'internal'\" Example (Data Manipulation): title: \"Notification string\" description: \"Create a notification string with a timestamp.\" expression: \"'New message received at ' + string(document.create_time)\" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information."],["Iam","Central instance to access all Iam related resource activities"],["IamPolicyLintPolicyCall","Lints, or validates, an IAM policy. Currently checks the google.iam.v1.Binding.condition field, which contains a condition expression for a role binding. Successful calls to this method always return an HTTP `200 OK` status code, even if the linter detects an issue in the IAM policy."],["IamPolicyMethods","A builder providing access to all methods supported on iamPolicy resources. It is not used directly, but through the `Iam` hub."],["IamPolicyQueryAuditableServiceCall","Returns a list of services that allow you to opt into audit logs that are not generated by default. To learn more about audit logs, see the Logging documentation."],["LintPolicyRequest","The request to lint a Cloud IAM policy object."],["LintPolicyResponse","The response of a lint operation. An empty response indicates the operation was able to fully execute and no lint issue was found."],["LintResult","Structured response of a single validation unit."],["ListRolesResponse","The response containing the roles defined under a resource."],["ListServiceAccountKeysResponse","The service account keys list response."],["ListServiceAccountsResponse","The service account list response."],["ListWorkloadIdentityPoolProvidersResponse","Response message for ListWorkloadIdentityPoolProviders."],["ListWorkloadIdentityPoolsResponse","Response message for ListWorkloadIdentityPools."],["Oidc","Represents an OpenId Connect 1.0 identity provider."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["OrganizationMethods","A builder providing access to all methods supported on organization resources. It is not used directly, but through the `Iam` hub."],["OrganizationRoleCreateCall","Creates a new custom Role."],["OrganizationRoleDeleteCall","Deletes a custom Role. When you delete a custom role, the following changes occur immediately: * You cannot bind a member to the custom role in an IAM Policy. * Existing bindings to the custom role are not changed, but they have no effect. * By default, the response from ListRoles does not include the custom role. You have 7 days to undelete the custom role. After 7 days, the following changes occur: * The custom role is permanently deleted and cannot be recovered. * If an IAM policy contains a binding to the custom role, the binding is permanently removed."],["OrganizationRoleGetCall","Gets the definition of a Role."],["OrganizationRoleListCall","Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project."],["OrganizationRolePatchCall","Updates the definition of a custom Role."],["OrganizationRoleUndeleteCall","Undeletes a custom Role."],["PatchServiceAccountRequest","The request for PatchServiceAccount. You can patch only the `display_name` and `description` fields. You must use the `update_mask` field to specify which of these fields you want to patch. Only the fields specified in the request are guaranteed to be returned in the response. Other fields may be empty in the response."],["Permission","A permission which can be included by a role."],["PermissionMethods","A builder providing access to all methods supported on permission resources. It is not used directly, but through the `Iam` hub."],["PermissionQueryTestablePermissionCall","Lists every permission that you can test on a resource. A permission is testable if you can check whether a member has that permission on the resource."],["Policy","An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation. JSON example: { \"bindings\": [ { \"role\": \"roles/resourcemanager.organizationAdmin\", \"members\": [ \"user:mike@example.com\", \"group:admins@example.com\", \"domain:google.com\", \"serviceAccount:my-project-id@appspot.gserviceaccount.com\" ] }, { \"role\": \"roles/resourcemanager.organizationViewer\", \"members\": [ \"user:eve@example.com\" ], \"condition\": { \"title\": \"expirable access\", \"description\": \"Does not grant access after Sep 2020\", \"expression\": \"request.time < timestamp('2020-10-01T00:00:00.000Z')\", } } ], \"etag\": \"BwWWja0YfJA=\", \"version\": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the IAM documentation."],["ProjectLocationWorkloadIdentityPoolCreateCall","Creates a new WorkloadIdentityPool. You cannot reuse the name of a deleted pool until 30 days after deletion."],["ProjectLocationWorkloadIdentityPoolDeleteCall","Deletes a WorkloadIdentityPool. You cannot use a deleted pool to exchange external credentials for Google Cloud credentials. However, deletion does not revoke credentials that have already been issued. Credentials issued for a deleted pool do not grant access to resources. If the pool is undeleted, and the credentials are not expired, they grant access again. You can undelete a pool for 30 days. After 30 days, deletion is permanent. You cannot update deleted pools. However, you can view and list them."],["ProjectLocationWorkloadIdentityPoolGetCall","Gets an individual WorkloadIdentityPool."],["ProjectLocationWorkloadIdentityPoolListCall","Lists all non-deleted WorkloadIdentityPools in a project. If `show_deleted` is set to `true`, then deleted pools are also listed."],["ProjectLocationWorkloadIdentityPoolOperationGetCall","Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service."],["ProjectLocationWorkloadIdentityPoolPatchCall","Updates an existing WorkloadIdentityPool."],["ProjectLocationWorkloadIdentityPoolProviderCreateCall","Creates a new WorkloadIdentityPoolProvider in a WorkloadIdentityPool. You cannot reuse the name of a deleted provider until 30 days after deletion."],["ProjectLocationWorkloadIdentityPoolProviderDeleteCall","Deletes a WorkloadIdentityPoolProvider. Deleting a provider does not revoke credentials that have already been issued; they continue to grant access. You can undelete a provider for 30 days. After 30 days, deletion is permanent. You cannot update deleted providers. However, you can view and list them."],["ProjectLocationWorkloadIdentityPoolProviderGetCall","Gets an individual WorkloadIdentityPoolProvider."],["ProjectLocationWorkloadIdentityPoolProviderListCall","Lists all non-deleted WorkloadIdentityPoolProviders in a WorkloadIdentityPool. If `show_deleted` is set to `true`, then deleted providers are also listed."],["ProjectLocationWorkloadIdentityPoolProviderOperationGetCall","Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service."],["ProjectLocationWorkloadIdentityPoolProviderPatchCall","Updates an existing WorkloadIdentityPoolProvider."],["ProjectLocationWorkloadIdentityPoolProviderUndeleteCall","Undeletes a WorkloadIdentityPoolProvider, as long as it was deleted fewer than 30 days ago."],["ProjectLocationWorkloadIdentityPoolUndeleteCall","Undeletes a WorkloadIdentityPool, as long as it was deleted fewer than 30 days ago."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `Iam` hub."],["ProjectRoleCreateCall","Creates a new custom Role."],["ProjectRoleDeleteCall","Deletes a custom Role. When you delete a custom role, the following changes occur immediately: * You cannot bind a member to the custom role in an IAM Policy. * Existing bindings to the custom role are not changed, but they have no effect. * By default, the response from ListRoles does not include the custom role. You have 7 days to undelete the custom role. After 7 days, the following changes occur: * The custom role is permanently deleted and cannot be recovered. * If an IAM policy contains a binding to the custom role, the binding is permanently removed."],["ProjectRoleGetCall","Gets the definition of a Role."],["ProjectRoleListCall","Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project."],["ProjectRolePatchCall","Updates the definition of a custom Role."],["ProjectRoleUndeleteCall","Undeletes a custom Role."],["ProjectServiceAccountCreateCall","Creates a ServiceAccount."],["ProjectServiceAccountDeleteCall","Deletes a ServiceAccount. Warning: After you delete a service account, you might not be able to undelete it. If you know that you need to re-enable the service account in the future, use DisableServiceAccount instead. If you delete a service account, IAM permanently removes the service account 30 days later. Google Cloud cannot recover the service account after it is permanently removed, even if you file a support request. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use DisableServiceAccount to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account."],["ProjectServiceAccountDisableCall","Disables a ServiceAccount immediately. If an application uses the service account to authenticate, that application can no longer call Google APIs or access Google Cloud resources. Existing access tokens for the service account are rejected, and requests for new access tokens will fail. To re-enable the service account, use EnableServiceAccount. After you re-enable the service account, its existing access tokens will be accepted, and you can request new access tokens. To help avoid unplanned outages, we recommend that you disable the service account before you delete it. Use this method to disable the service account, then wait at least 24 hours and watch for unintended consequences. If there are no unintended consequences, you can delete the service account with DeleteServiceAccount."],["ProjectServiceAccountEnableCall","Enables a ServiceAccount that was disabled by DisableServiceAccount. If the service account is already enabled, then this method has no effect. If the service account was disabled by other means—for example, if Google disabled the service account because it was compromised—you cannot use this method to enable the service account."],["ProjectServiceAccountGetCall","Gets a ServiceAccount."],["ProjectServiceAccountGetIamPolicyCall","Gets the IAM policy that is attached to a ServiceAccount. This IAM policy specifies which members have access to the service account. This method does not tell you whether the service account has been granted any roles on other resources. To check whether a service account has role grants on a resource, use the `getIamPolicy` method for that resource. For example, to view the role grants for a project, call the Resource Manager API's `projects.getIamPolicy` method."],["ProjectServiceAccountKeyCreateCall","Creates a ServiceAccountKey."],["ProjectServiceAccountKeyDeleteCall","Deletes a ServiceAccountKey. Deleting a service account key does not revoke short-lived credentials that have been issued based on the service account key."],["ProjectServiceAccountKeyGetCall","Gets a ServiceAccountKey."],["ProjectServiceAccountKeyListCall","Lists every ServiceAccountKey for a service account."],["ProjectServiceAccountKeyUploadCall","Creates a ServiceAccountKey, using a public key that you provide."],["ProjectServiceAccountListCall","Lists every ServiceAccount that belongs to a specific project."],["ProjectServiceAccountPatchCall","Patches a ServiceAccount."],["ProjectServiceAccountSetIamPolicyCall","Sets the IAM policy that is attached to a ServiceAccount. Use this method to grant or revoke access to the service account. For example, you could grant a member the ability to impersonate the service account. This method does not enable the service account to access other resources. To grant roles to a service account on a resource, follow these steps: 1. Call the resource's `getIamPolicy` method to get its current IAM policy. 2. Edit the policy so that it binds the service account to an IAM role for the resource. 3. Call the resource's `setIamPolicy` method to update its IAM policy. For detailed instructions, see Granting roles to a service account for specific resources."],["ProjectServiceAccountSignBlobCall","Note: This method is deprecated. Use the `signBlob` method in the IAM Service Account Credentials API instead. If you currently use this method, see the migration guide for instructions. Signs a blob using the system-managed private key for a ServiceAccount."],["ProjectServiceAccountSignJwtCall","Note: This method is deprecated. Use the `signJwt` method in the IAM Service Account Credentials API instead. If you currently use this method, see the migration guide for instructions. Signs a JSON Web Token (JWT) using the system-managed private key for a ServiceAccount."],["ProjectServiceAccountTestIamPermissionCall","Tests whether the caller has the specified permissions on a ServiceAccount."],["ProjectServiceAccountUndeleteCall","Restores a deleted ServiceAccount. Important: It is not always possible to restore a deleted service account. Use this method only as a last resort. After you delete a service account, IAM permanently removes the service account 30 days later. There is no way to restore a deleted service account that has been permanently removed."],["ProjectServiceAccountUpdateCall","Note: We are in the process of deprecating this method. Use PatchServiceAccount instead. Updates a ServiceAccount. You can update only the `display_name` and `description` fields."],["QueryAuditableServicesRequest","A request to get the list of auditable services for a resource."],["QueryAuditableServicesResponse","A response containing a list of auditable services for a resource."],["QueryGrantableRolesRequest","The grantable role query request."],["QueryGrantableRolesResponse","The grantable role query response."],["QueryTestablePermissionsRequest","A request to get permissions which can be tested on a resource."],["QueryTestablePermissionsResponse","The response containing permissions which can be tested on a resource."],["Role","A role in the Identity and Access Management API."],["RoleGetCall","Gets the definition of a Role."],["RoleListCall","Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project."],["RoleMethods","A builder providing access to all methods supported on role resources. It is not used directly, but through the `Iam` hub."],["RoleQueryGrantableRoleCall","Lists roles that can be granted on a Google Cloud resource. A role is grantable if the IAM policy for the resource can contain bindings to the role."],["ServiceAccount","An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the overview of service accounts. When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service account."],["ServiceAccountKey","Represents a service account key. A service account has two sets of key-pairs: user-managed, and system-managed. User-managed key-pairs can be created and deleted by users. Users are responsible for rotating these keys periodically to ensure security of their service accounts. Users retain the private key of these key-pairs, and Google retains ONLY the public key. System-managed keys are automatically rotated by Google, and are used for signing for a maximum of two weeks. The rotation process is probabilistic, and usage of the new key will gradually ramp up and down over the key's lifetime. If you cache the public key set for a service account, we recommend that you update the cache every 15 minutes. User-managed keys can be added and removed at any time, so it is important to update the cache frequently. For Google-managed keys, Google will publish a key at least 6 hours before it is first used for signing and will keep publishing it for at least 6 hours after it was last used for signing. Public keys for all service accounts are also published at the OAuth2 Service Account API."],["SetIamPolicyRequest","Request message for `SetIamPolicy` method."],["SignBlobRequest","Deprecated. Migrate to Service Account Credentials API. The service account sign blob request."],["SignBlobResponse","Deprecated. Migrate to Service Account Credentials API. The service account sign blob response."],["SignJwtRequest","Deprecated. Migrate to Service Account Credentials API. The service account sign JWT request."],["SignJwtResponse","Deprecated. Migrate to Service Account Credentials API. The service account sign JWT response."],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the API Design Guide."],["TestIamPermissionsRequest","Request message for `TestIamPermissions` method."],["TestIamPermissionsResponse","Response message for `TestIamPermissions` method."],["UndeleteRoleRequest","The request to undelete an existing role."],["UndeleteServiceAccountRequest","The service account undelete request."],["UndeleteServiceAccountResponse","There is no detailed description."],["UndeleteWorkloadIdentityPoolProviderRequest","Request message for UndeleteWorkloadIdentityPoolProvider."],["UndeleteWorkloadIdentityPoolRequest","Request message for UndeleteWorkloadIdentityPool."],["UploadServiceAccountKeyRequest","The service account key upload request."],["WorkloadIdentityPool","Represents a collection of external workload identities. You can define IAM policies to grant these identities access to Google Cloud resources."],["WorkloadIdentityPoolProvider","A configuration for an external identity provider."]]});