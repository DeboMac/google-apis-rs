initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["AuditConfig","Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { \"audit_configs\": [ { \"service\": \"allServices\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" }, { \"log_type\": \"ADMIN_READ\" } ] }, { \"service\": \"sampleservice.googleapis.com\", \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\" }, { \"log_type\": \"DATA_WRITE\", \"exempted_members\": [ \"user:aliya@example.com\" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging."],["AuditLogConfig","Provides the configuration for logging a type of permissions. Example: { \"audit_log_configs\": [ { \"log_type\": \"DATA_READ\", \"exempted_members\": [ \"user:jose@example.com\" ] }, { \"log_type\": \"DATA_WRITE\" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging."],["Binding","Associates `members` with a `role`."],["CloudResourceManager","Central instance to access all CloudResourceManager related resource activities"],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`."],["Expr","Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: \"Summary size limit\" description: \"Determines if a summary is less than 100 chars\" expression: \"document.summary.size() < 100\" Example (Equality): title: \"Requestor is owner\" description: \"Determines if requestor is the document owner\" expression: \"document.owner == request.auth.claims.email\" Example (Logic): title: \"Public documents\" description: \"Determine whether the document should be publicly visible\" expression: \"document.type != 'private' && document.type != 'internal'\" Example (Data Manipulation): title: \"Notification string\" description: \"Create a notification string with a timestamp.\" expression: \"'New message received at ' + string(document.create_time)\" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information."],["Folder","A folder in an organization's resource hierarchy, used to organize that organization's resources."],["FolderCreateCall","Creates a folder in the resource hierarchy. Returns an `Operation` which can be used to track the progress of the folder creation workflow. Upon success, the `Operation.response` field will be populated with the created Folder. In order to succeed, the addition of this new folder must not violate the folder naming, height, or fanout constraints. + The folder's `display_name` must be distinct from all other folders that share its parent. + The addition of the folder must not cause the active folder hierarchy to exceed a height of 10. Note, the full active + deleted folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders. + The addition of the folder must not cause the total number of folders under its parent to exceed 300. If the operation fails due to a folder constraint violation, some errors may be returned by the `CreateFolder` request, with status code `FAILED_PRECONDITION` and an error description. Other folder constraint violations will be communicated in the `Operation`, with the specific `PreconditionFailure` returned in the details list in the `Operation.error` field. The caller must have `resourcemanager.folders.create` permission on the identified parent."],["FolderDeleteCall","Requests deletion of a folder. The folder is moved into the DELETE_REQUESTED state immediately, and is deleted approximately 30 days later. This method may only be called on an empty folder, where a folder is empty if it doesn't contain any folders or projects in the ACTIVE state. If called on a folder in DELETE_REQUESTED state the operation will result in a no-op success. The caller must have `resourcemanager.folders.delete` permission on the identified folder."],["FolderGetCall","Retrieves a folder identified by the supplied resource name. Valid folder resource names have the format `folders/{folder_id}` (for example, `folders/1234`). The caller must have `resourcemanager.folders.get` permission on the identified folder."],["FolderGetIamPolicyCall","Gets the access control policy for a folder. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the folder's resource name, for example: \"folders/1234\". The caller must have `resourcemanager.folders.getIamPolicy` permission on the identified folder."],["FolderListCall","Lists the folders that are direct descendants of supplied parent resource. `list()` provides a strongly consistent view of the folders underneath the specified parent resource. `list()` returns folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent."],["FolderMethods","A builder providing access to all methods supported on folder resources. It is not used directly, but through the `CloudResourceManager` hub."],["FolderMoveCall","Moves a folder under a new resource parent. Returns an `Operation` which can be used to track the progress of the folder move workflow. Upon success, the `Operation.response` field will be populated with the moved folder. Upon failure, a `FolderOperationError` categorizing the failure cause will be returned - if the failure occurs synchronously then the `FolderOperationError` will be returned in the `Status.details` field. If it occurs asynchronously, then the FolderOperation will be returned in the `Operation.error` field. In addition, the `Operation.metadata` field will be populated with a `FolderOperation` message as an aid to stateless clients. Folder moves will be rejected if they violate either the naming, height, or fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.move` permission on the folder's current and proposed new parent."],["FolderPatchCall","Updates a folder, changing its `display_name`. Changes to the folder `display_name` will be rejected if they violate either the `display_name` formatting rules or the naming constraints described in the CreateFolder documentation. The folder's `display_name` must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be between 3 and 30 characters. This is captured by the regular expression: `\\p{L}\\p{N}{1,28}[\\p{L}\\p{N}]`. The caller must have `resourcemanager.folders.update` permission on the identified folder. If the update fails due to the unique name constraint then a `PreconditionFailure` explaining this violation will be returned in the Status.details field."],["FolderSearchCall","Search for folders that match specific filter criteria. `search()` provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This will only return folders on which the caller has the permission `resourcemanager.folders.get`."],["FolderSetIamPolicyCall","Sets the access control policy on a folder, replacing any existing policy. The `resource` field should be the folder's resource name, for example: \"folders/1234\". The caller must have `resourcemanager.folders.setIamPolicy` permission on the identified folder."],["FolderTestIamPermissionCall","Returns permissions that a caller has on the specified folder. The `resource` field should be the folder's resource name, for example: \"folders/1234\". There are no permissions required for making this API call."],["FolderUndeleteCall","Cancels the deletion request for a folder. This method may be called on a folder in any state. If the folder is in the ACTIVE state the result will be a no-op success. In order to succeed, the folder's parent must be in the ACTIVE state. In addition, reintroducing the folder into the tree must not violate folder naming, height, and fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.undelete` permission on the identified folder."],["GetIamPolicyRequest","Request message for `GetIamPolicy` method."],["GetPolicyOptions","Encapsulates settings provided to GetIamPolicy."],["Lien","A Lien represents an encumbrance on the actions that can be performed on a resource."],["LienCreateCall","Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied."],["LienDeleteCall","Delete a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.updateLiens`."],["LienGetCall","Retrieve a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`"],["LienListCall","List all Liens applied to the `parent` resource. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`."],["LienMethods","A builder providing access to all methods supported on lien resources. It is not used directly, but through the `CloudResourceManager` hub."],["ListFoldersResponse","The ListFolders response message."],["ListLiensResponse","The response message for Liens.ListLiens."],["ListProjectsResponse","A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. NOTE: A response may contain fewer elements than the request `page_size` and still have a `next_page_token`."],["ListTagBindingsResponse","The ListTagBindings response."],["ListTagKeysResponse","The ListTagKeys response message."],["ListTagValuesResponse","The ListTagValues response."],["MoveFolderRequest","The MoveFolder request message."],["MoveProjectRequest","The request sent to MoveProject method."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["OperationGetCall","Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service."],["OperationMethods","A builder providing access to all methods supported on operation resources. It is not used directly, but through the `CloudResourceManager` hub."],["Organization","The root node in the resource hierarchy to which a particular entity's (a company, for example) resources belong."],["OrganizationGetCall","Fetches an organization resource identified by the specified resource name."],["OrganizationGetIamPolicyCall","Gets the access control policy for an organization resource. The policy may be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, for example: \"organizations/123\". Authorization requires the IAM permission `resourcemanager.organizations.getIamPolicy` on the specified organization."],["OrganizationMethods","A builder providing access to all methods supported on organization resources. It is not used directly, but through the `CloudResourceManager` hub."],["OrganizationSearchCall","Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`"],["OrganizationSetIamPolicyCall","Sets the access control policy on an organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, for example: \"organizations/123\". Authorization requires the IAM permission `resourcemanager.organizations.setIamPolicy` on the specified organization."],["OrganizationTestIamPermissionCall","Returns the permissions that a caller has on the specified organization. The `resource` field should be the organization's resource name, for example: \"organizations/123\". There are no permissions required for making this API call."],["Policy","An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation. JSON example: { \"bindings\": [ { \"role\": \"roles/resourcemanager.organizationAdmin\", \"members\": [ \"user:mike@example.com\", \"group:admins@example.com\", \"domain:google.com\", \"serviceAccount:my-project-id@appspot.gserviceaccount.com\" ] }, { \"role\": \"roles/resourcemanager.organizationViewer\", \"members\": [ \"user:eve@example.com\" ], \"condition\": { \"title\": \"expirable access\", \"description\": \"Does not grant access after Sep 2020\", \"expression\": \"request.time < timestamp('2020-10-01T00:00:00.000Z')\", } } ], \"etag\": \"BwWWja0YfJA=\", \"version\": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the IAM documentation."],["Project","A project is a high-level Google Cloud entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources."],["ProjectCreateCall","Request that a new project be created. The result is an `Operation` which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking `Operation` is automatically deleted after a few hours, so there is no need to call `DeleteOperation`."],["ProjectDeleteCall","Marks the project identified by the specified `name` (for example, `projects/415104041262`) for deletion. This method will only affect the project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the project with GetProject, and the project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the project is not retrievable by the GetProject, ListProjects, and SearchProjects methods. This method behaves idempotently, such that deleting a `DELETE_REQUESTED` project will not cause an error, but also won't do anything. The caller must have `resourcemanager.projects.delete` permissions for this project."],["ProjectGetCall","Retrieves the project identified by the specified `name` (for example, `projects/415104041262`). The caller must have `resourcemanager.projects.get` permission for this project."],["ProjectGetIamPolicyCall","Returns the IAM access control policy for the specified project. Permission is denied if the policy or the resource do not exist."],["ProjectListCall","Lists projects that are direct children of the specified folder or organization resource. `list()` provides a strongly consistent view of the projects underneath the specified parent resource. `list()` returns projects sorted based upon the (ascending) lexical ordering of their `display_name`. The caller must have `resourcemanager.projects.list` permission on the identified parent."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `CloudResourceManager` hub."],["ProjectMoveCall","Move a project to another place in your resource hierarchy, under a new resource parent. Returns an operation which can be used to track the process of the project move workflow. Upon success, the `Operation.response` field will be populated with the moved project. The caller must have `resourcemanager.projects.update` permission on the project and have `resourcemanager.projects.move` permission on the project's current and proposed new parent. "],["ProjectPatchCall","Updates the `display_name` and labels of the project identified by the specified `name` (for example, `projects/415104041262`). Deleting all labels requires an update mask for labels field. The caller must have `resourcemanager.projects.update` permission for this project."],["ProjectSearchCall","Search for projects that the caller has both `resourcemanager.projects.get` permission on, and also satisfy the specified query. This method returns projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method."],["ProjectSetIamPolicyCall","Sets the IAM access control policy for the specified project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. Note: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited using the Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + Invitations to grant the owner role cannot be sent using `setIamPolicy()`; they must be sent only using the Cloud Platform Console. + Membership changes that leave the project without any owners that have accepted the Terms of Service (ToS) will be rejected. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. + Calling this method requires enabling the App Engine Admin API."],["ProjectTestIamPermissionCall","Returns permissions that a caller has on the specified project."],["ProjectUndeleteCall","Restores the project identified by the specified `name` (for example, `projects/415104041262`). You can only use this method for a project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the project cannot be restored. The caller must have `resourcemanager.projects.undelete` permission for this project."],["SearchFoldersResponse","The response message for searching folders."],["SearchOrganizationsResponse","The response returned from the `SearchOrganizations` method."],["SearchProjectsResponse","A page of the response received from the SearchProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page."],["SetIamPolicyRequest","Request message for `SetIamPolicy` method."],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the API Design Guide."],["TagBinding","A TagBinding represents a connection between a TagValue and a cloud resource (currently project, folder, or organization). Once a TagBinding is created, the TagValue is applied to all the descendants of the cloud resource."],["TagBindingCreateCall","Creates a TagBinding between a TagValue and a cloud resource (currently project, folder, or organization)."],["TagBindingDeleteCall","Deletes a TagBinding."],["TagBindingListCall","Lists the TagBindings for the given cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name"],["TagBindingMethods","A builder providing access to all methods supported on tagBinding resources. It is not used directly, but through the `CloudResourceManager` hub."],["TagKey","A TagKey, used to group a set of TagValues."],["TagKeyCreateCall","Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 300 TagKeys can exist under a parent at any given time."],["TagKeyDeleteCall","Deletes a TagKey. The TagKey cannot be deleted if it has any child TagValues."],["TagKeyGetCall","Retrieves a TagKey. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it."],["TagKeyGetIamPolicyCall","Gets the access control policy for a TagKey. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagKey's resource name. For example, \"tagKeys/1234\". The caller must have `cloudresourcemanager.googleapis.com/tagKeys.getIamPolicy` permission on the specified TagKey."],["TagKeyListCall","Lists all TagKeys for a parent resource."],["TagKeyMethods","A builder providing access to all methods supported on tagKey resources. It is not used directly, but through the `CloudResourceManager` hub."],["TagKeyPatchCall","Updates the attributes of the TagKey resource."],["TagKeySetIamPolicyCall","Sets the access control policy on a TagKey, replacing any existing policy. The `resource` field should be the TagKey's resource name. For example, \"tagKeys/1234\". The caller must have `resourcemanager.tagKeys.setIamPolicy` permission on the identified tagValue."],["TagKeyTestIamPermissionCall","Returns permissions that a caller has on the specified TagKey. The `resource` field should be the TagKey's resource name. For example, \"tagKeys/1234\". There are no permissions required for making this API call."],["TagValue","A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies."],["TagValueCreateCall","Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 300 TagValues can exist under a TagKey at any given time."],["TagValueDeleteCall","Deletes a TagValue. The TagValue cannot have any bindings when it is deleted."],["TagValueGetCall","Retrieves TagValue. If the TagValue or namespaced name does not exist, or if the user does not have permission to view it, this method will return `PERMISSION_DENIED`."],["TagValueGetIamPolicyCall","Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy."],["TagValueListCall","Lists all TagValues for a specific TagKey."],["TagValueMethods","A builder providing access to all methods supported on tagValue resources. It is not used directly, but through the `CloudResourceManager` hub."],["TagValuePatchCall","Updates the attributes of the TagValue resource."],["TagValueSetIamPolicyCall","Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue."],["TagValueTestIamPermissionCall","Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call."],["TestIamPermissionsRequest","Request message for `TestIamPermissions` method."],["TestIamPermissionsResponse","Response message for `TestIamPermissions` method."],["UndeleteFolderRequest","The UndeleteFolder request message."],["UndeleteProjectRequest","The request sent to the UndeleteProject method."]]});