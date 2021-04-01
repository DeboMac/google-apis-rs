initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["AccountInfo","Accounts to search"],["AddHeldAccountResult","A status detailing the status of each account creation, and the HeldAccount, if successful."],["AddHeldAccountsRequest","Add a list of accounts to a hold."],["AddHeldAccountsResponse","Response for batch create held accounts."],["AddMatterPermissionsRequest","Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, it will be overwritten."],["CancelOperationRequest","The request message for Operations.CancelOperation."],["CloseMatterRequest","Close a matter by ID."],["CloseMatterResponse","Response to a CloseMatterRequest."],["CloudStorageFile","An export file on cloud storage"],["CloudStorageSink","Export sink for cloud storage files."],["CorpusQuery","Corpus specific queries."],["CountArtifactsRequest","Count artifacts request."],["DriveExportOptions","The options for Drive export."],["DriveOptions","Drive search advanced options"],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`."],["Export","An export"],["ExportOptions","Export advanced options"],["ExportStats","Stats of an export."],["GroupsExportOptions","The options for groups export."],["HangoutsChatExportOptions","The options for hangouts chat export."],["HangoutsChatInfo","Accounts to search"],["HangoutsChatOptions","Hangouts chat search advanced options"],["HeldAccount","An account being held in a particular hold. This structure is immutable. This can be either a single user or a google group, depending on the corpus."],["HeldDriveQuery","Query options for Drive holds."],["HeldGroupsQuery","Query options for group holds."],["HeldHangoutsChatQuery","Query options for hangouts chat holds."],["HeldMailQuery","Query options for mail holds."],["HeldOrgUnit","A organizational unit being held in a particular hold. This structure is immutable."],["HeldVoiceQuery","Query options for Voice holds."],["Hold","Represents a hold within Vault. A hold restricts purging of artifacts based on the combination of the query and accounts restrictions. A hold can be configured to either apply to an explicitly configured set of accounts, or can be applied to all members of an organizational unit."],["ListExportsResponse","The holds for a matter."],["ListHeldAccountsResponse","Returns a list of held accounts for a hold."],["ListHoldsResponse","The holds for a matter."],["ListMattersResponse","Provides the list of matters."],["ListOperationsResponse","The response message for Operations.ListOperations."],["ListSavedQueriesResponse","Definition of the response for method ListSaveQuery."],["MailExportOptions","The options for mail export."],["MailOptions","Mail search advanced options"],["Matter","Represents a matter."],["MatterAddPermissionCall","Adds an account as a matter collaborator."],["MatterCloseCall","Closes the specified matter. Returns matter with updated state."],["MatterCountCall","Counts the artifacts within the context of a matter and returns a detailed breakdown of metrics."],["MatterCreateCall","Creates a new matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view."],["MatterDeleteCall","Deletes the specified matter. Returns matter with updated state."],["MatterExportCreateCall","Creates an Export."],["MatterExportDeleteCall","Deletes an Export."],["MatterExportGetCall","Gets an Export."],["MatterExportListCall","Lists Exports."],["MatterGetCall","Gets the specified matter."],["MatterHoldAccountCreateCall","Adds a HeldAccount to a hold. Accounts can only be added to a hold that has no held_org_unit set. Attempting to add an account to an OU-based hold will result in an error."],["MatterHoldAccountDeleteCall","Removes a HeldAccount from a hold. If this request leaves the hold with no held accounts, the hold will not apply to any accounts."],["MatterHoldAccountListCall","Lists HeldAccounts for a hold. This will only list individually specified held accounts. If the hold is on an OU, then use Admin SDK to enumerate its members."],["MatterHoldAddHeldAccountCall","Adds HeldAccounts to a hold. Returns a list of accounts that have been successfully added. Accounts can only be added to an existing account-based hold."],["MatterHoldCreateCall","Creates a hold in the given matter."],["MatterHoldDeleteCall","Removes a hold by ID. This will release any HeldAccounts on this Hold."],["MatterHoldGetCall","Gets a hold by ID."],["MatterHoldListCall","Lists holds within a matter. An empty page token in ListHoldsResponse denotes no more holds to list."],["MatterHoldRemoveHeldAccountCall","Removes HeldAccounts from a hold. Returns a list of statuses in the same order as the request. If this request leaves the hold with no held accounts, the hold will not apply to any accounts."],["MatterHoldUpdateCall","Updates the OU and/or query parameters of a hold. You cannot add accounts to a hold that covers an OU, nor can you add OUs to a hold that covers individual accounts. Accounts listed in the hold will be ignored."],["MatterListCall","Lists matters the user has access to."],["MatterMethods","A builder providing access to all methods supported on matter resources. It is not used directly, but through the `Vault` hub."],["MatterPermission","Currently each matter only has one owner, and all others are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist."],["MatterRemovePermissionCall","Removes an account as a matter collaborator."],["MatterReopenCall","Reopens the specified matter. Returns matter with updated state."],["MatterSavedQueryCreateCall","Creates a saved query."],["MatterSavedQueryDeleteCall","Deletes a saved query by Id."],["MatterSavedQueryGetCall","Retrieves a saved query by Id."],["MatterSavedQueryListCall","Lists saved queries within a matter. An empty page token in ListSavedQueriesResponse denotes no more saved queries to list."],["MatterUndeleteCall","Undeletes the specified matter. Returns matter with updated state."],["MatterUpdateCall","Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["OperationCancelCall","Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`."],["OperationDeleteCall","Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`."],["OperationGetCall","Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service."],["OperationListCall","Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id."],["OperationMethods","A builder providing access to all methods supported on operation resources. It is not used directly, but through the `Vault` hub."],["OrgUnitInfo","Org Unit to search"],["Query","A query definition relevant for search & export."],["RemoveHeldAccountsRequest","Remove a list of accounts from a hold."],["RemoveHeldAccountsResponse","Response for batch delete held accounts."],["RemoveMatterPermissionsRequest","Remove an account as a matter collaborator."],["ReopenMatterRequest","Reopen a matter by ID."],["ReopenMatterResponse","Response to a ReopenMatterRequest."],["SavedQuery","Definition of the saved query."],["SharedDriveInfo","Shared drives to search"],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the API Design Guide."],["TeamDriveInfo","Team Drives to search"],["UndeleteMatterRequest","Undelete a matter by ID."],["UserInfo","User's information."],["Vault","Central instance to access all Vault related resource activities"],["VoiceExportOptions","The options for voice export."],["VoiceOptions","Voice search options"]]});