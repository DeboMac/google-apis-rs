initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["AllocateIdsRequest","The request for Datastore.AllocateIds."],["AllocateIdsResponse","The response for Datastore.AllocateIds."],["ArrayValue","An array value."],["BeginTransactionRequest","The request for Datastore.BeginTransaction."],["BeginTransactionResponse","The response for Datastore.BeginTransaction."],["CommitRequest","The request for Datastore.Commit."],["CommitResponse","The response for Datastore.Commit."],["CompositeFilter","A filter that merges multiple other filters using the given operator."],["Datastore","Central instance to access all Datastore related resource activities"],["Entity","A Datastore data object. An entity is limited to 1 megabyte when stored. That roughly corresponds to a limit of 1 megabyte for the serialized form of this message."],["EntityResult","The result of fetching an entity from Datastore."],["Filter","A holder for any type of filter."],["GqlQuery","A GQL query."],["GqlQueryParameter","A binding parameter for a GQL query."],["Key","A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts."],["KindExpression","A representation of a kind."],["LatLng","An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges."],["LookupRequest","The request for Datastore.Lookup."],["LookupResponse","The response for Datastore.Lookup."],["Mutation","A mutation to apply to an entity."],["MutationResult","The result of applying a mutation."],["PartitionId","A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. Partition dimensions: - May be `\"\"`. - Must be valid UTF-8 bytes. - Must have values that match regex `[A-Za-z\\d\\.\\-_]{1,100}` If the value of any dimension matches regex `__.*__`, the partition is reserved/read-only. A reserved/read-only partition ID is forbidden in certain documented contexts. Foreign partition IDs (in which the project ID does not match the context project ID ) are discouraged. Reads and writes of foreign partition IDs may fail if the project is not in an active state."],["PathElement","A (kind, ID/name) pair used to construct a key path. If either name or ID is set, the element is complete. If neither is set, the element is incomplete."],["ProjectAllocateIdCall","Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted."],["ProjectBeginTransactionCall","Begins a new transaction."],["ProjectCommitCall","Commits a transaction, optionally creating, deleting or modifying some entities."],["ProjectLookupCall","Looks up entities by key."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `Datastore` hub."],["ProjectReserveIdCall","Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore."],["ProjectRollbackCall","Rolls back a transaction."],["ProjectRunQueryCall","Queries for entities."],["Projection","A representation of a property in a projection."],["PropertyFilter","A filter on a specific property."],["PropertyOrder","The desired order for a specific property."],["PropertyReference","A reference to a property relative to the kind expressions."],["Query","A query for entities."],["QueryResultBatch","A batch of results produced by a query."],["ReadOnly","Options specific to read-only transactions."],["ReadOptions","The options shared by read requests."],["ReadWrite","Options specific to read / write transactions."],["ReserveIdsRequest","The request for Datastore.ReserveIds."],["ReserveIdsResponse","The response for Datastore.ReserveIds."],["RollbackRequest","The request for Datastore.Rollback."],["RollbackResponse","The response for Datastore.Rollback. (an empty message)."],["RunQueryRequest","The request for Datastore.RunQuery."],["RunQueryResponse","The response for Datastore.RunQuery."],["TransactionOptions","Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests."],["Value","A message that can hold any of the supported value types and associated metadata."]]});