initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["ActionExecuteCall","Execute an action remotely. In order to execute an action, the client must first upload all of the inputs, the Command to run, and the Action into the ContentAddressableStorage. It then calls `Execute` with an `action_digest` referring to them. The server will run the action and eventually return the result. The input `Action`'s fields MUST meet the various canonicalization requirements specified in the documentation for their types so that it has the same digest as other logically equivalent `Action`s. The server MAY enforce the requirements and return errors if a non-canonical input is received. It MAY also proceed without verifying some or all of the requirements, such as for performance reasons. If the server does not verify the requirement, then it will treat the `Action` as distinct from another logically equivalent action if they hash differently. Returns a stream of google.longrunning.Operation messages describing the resulting execution, with eventual `response` ExecuteResponse. The `metadata` on the operation is of type ExecuteOperationMetadata. If the client remains connected after the first response is returned after the server, then updates are streamed as if the client had called WaitExecution until the execution completes or the request reaches an error. The operation can also be queried using Operations API. The server NEED NOT implement other methods or functionality of the Operations API. Errors discovered during creation of the `Operation` will be reported as gRPC Status errors, while errors that occurred while running the action will be reported in the `status` field of the `ExecuteResponse`. The server MUST NOT set the `error` field of the `Operation` proto. The possible errors include: * `INVALID_ARGUMENT`: One or more arguments are invalid. * `FAILED_PRECONDITION`: One or more errors occurred in setting up the action requested, such as a missing input or command or no worker being available. The client may be able to fix the errors and retry. * `RESOURCE_EXHAUSTED`: There is insufficient quota of some resource to run the action. * `UNAVAILABLE`: Due to a transient condition, such as all workers being occupied (and the server does not support a queue), the action could not be started. The client should retry. * `INTERNAL`: An internal error occurred in the execution engine or the worker. * `DEADLINE_EXCEEDED`: The execution timed out. * `CANCELLED`: The operation was cancelled by the client. This status is only possible if the server implements the Operations API CancelOperation method, and it was called for the current execution. In the case of a missing input or command, the server SHOULD additionally send a PreconditionFailure error detail where, for each requested blob not present in the CAS, there is a `Violation` with a `type` of `MISSING` and a `subject` of `\"blobs/{hash}/{size}\"` indicating the digest of the missing blob. The server does not need to guarantee that a call to this method leads to at most one execution of the action. The server MAY execute the action multiple times, potentially in parallel. These redundant executions MAY continue to run, even if the operation is completed."],["ActionMethods","A builder providing access to all methods supported on action resources. It is not used directly, but through the `RemoteBuildExecution` hub."],["ActionResultGetCall","Retrieve a cached execution result. Implementations SHOULD ensure that any blobs referenced from the ContentAddressableStorage are available at the time of returning the ActionResult and will be for some period of time afterwards. The lifetimes of the referenced blobs SHOULD be increased if necessary and applicable. Errors: * `NOT_FOUND`: The requested `ActionResult` is not in the cache."],["ActionResultMethods","A builder providing access to all methods supported on actionResult resources. It is not used directly, but through the `RemoteBuildExecution` hub."],["ActionResultUpdateCall","Upload a new execution result. In order to allow the server to perform access control based on the type of action, and to assist with client debugging, the client MUST first upload the Action that produced the result, along with its Command, into the `ContentAddressableStorage`. Server implementations MAY modify the `UpdateActionResultRequest.action_result` and return an equivalent value. Errors: * `INVALID_ARGUMENT`: One or more arguments are invalid. * `FAILED_PRECONDITION`: One or more errors occurred in updating the action result, such as a missing command or action. * `RESOURCE_EXHAUSTED`: There is insufficient storage space to add the entry to the cache."],["BlobBatchReadCall","Download many blobs at once. The server may enforce a limit of the combined total size of blobs to be downloaded using this API. This limit may be obtained using the Capabilities API. Requests exceeding the limit should either be split into smaller chunks or downloaded using the ByteStream API, as appropriate. This request is equivalent to calling a Bytestream `Read` request on each individual blob, in parallel. The requests may succeed or fail independently. Errors: * `INVALID_ARGUMENT`: The client attempted to read more than the server supported limit. Every error on individual read will be returned in the corresponding digest status."],["BlobBatchUpdateCall","Upload many blobs at once. The server may enforce a limit of the combined total size of blobs to be uploaded using this API. This limit may be obtained using the Capabilities API. Requests exceeding the limit should either be split into smaller chunks or uploaded using the ByteStream API, as appropriate. This request is equivalent to calling a Bytestream `Write` request on each individual blob, in parallel. The requests may succeed or fail independently. Errors: * `INVALID_ARGUMENT`: The client attempted to upload more than the server supported limit. Individual requests may return the following errors, additionally: * `RESOURCE_EXHAUSTED`: There is insufficient disk quota to store the blob. * `INVALID_ARGUMENT`: The Digest does not match the provided data."],["BlobFindMissingCall","Determine if blobs are present in the CAS. Clients can use this API before uploading blobs to determine which ones are already present in the CAS and do not need to be uploaded again. Servers SHOULD increase the lifetimes of the referenced blobs if necessary and applicable. There are no method-specific errors."],["BlobGetTreeCall","Fetch the entire directory tree rooted at a node. This request must be targeted at a Directory stored in the ContentAddressableStorage (CAS). The server will enumerate the `Directory` tree recursively and return every node descended from the root. The GetTreeRequest.page_token parameter can be used to skip ahead in the stream (e.g. when retrying a partially completed and aborted request), by setting it to a value taken from GetTreeResponse.next_page_token of the last successfully processed GetTreeResponse). The exact traversal order is unspecified and, unless retrieving subsequent pages from an earlier request, is not guaranteed to be stable across multiple invocations of `GetTree`. If part of the tree is missing from the CAS, the server will return the portion present and omit the rest. Errors: * `NOT_FOUND`: The requested tree root is not present in the CAS."],["BlobMethods","A builder providing access to all methods supported on blob resources. It is not used directly, but through the `RemoteBuildExecution` hub."],["BuildBazelRemoteExecutionV2ActionCacheUpdateCapabilities","Describes the server/instance capabilities for updating the action cache."],["BuildBazelRemoteExecutionV2ActionResult","An ActionResult represents the result of an Action being run. It is advised that at least one field (for example `ActionResult.execution_metadata.Worker`) have a non-default value, to ensure that the serialized value is non-empty, which can then be used as a basic data sanity check."],["BuildBazelRemoteExecutionV2BatchReadBlobsRequest","A request message for ContentAddressableStorage.BatchReadBlobs."],["BuildBazelRemoteExecutionV2BatchReadBlobsResponse","A response message for ContentAddressableStorage.BatchReadBlobs."],["BuildBazelRemoteExecutionV2BatchReadBlobsResponseResponse","A response corresponding to a single blob that the client tried to download."],["BuildBazelRemoteExecutionV2BatchUpdateBlobsRequest","A request message for ContentAddressableStorage.BatchUpdateBlobs."],["BuildBazelRemoteExecutionV2BatchUpdateBlobsRequestRequest","A request corresponding to a single blob that the client wants to upload."],["BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse","A response message for ContentAddressableStorage.BatchUpdateBlobs."],["BuildBazelRemoteExecutionV2BatchUpdateBlobsResponseResponse","A response corresponding to a single blob that the client tried to upload."],["BuildBazelRemoteExecutionV2CacheCapabilities","Capabilities of the remote cache system."],["BuildBazelRemoteExecutionV2Digest","A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server. The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request. The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff. When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message: * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type. Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields."],["BuildBazelRemoteExecutionV2Directory","A `Directory` represents a directory node in a file tree, containing zero or more children FileNodes, DirectoryNodes and SymlinkNodes. Each `Node` contains its name in the directory, either the digest of its content (either a file blob or a `Directory` proto) or a symlink target, as well as possibly some metadata about the file or directory. In order to ensure that two equivalent directory trees hash to the same value, the following restrictions MUST be obeyed when constructing a a `Directory`: * Every child in the directory must have a path of exactly one segment. Multiple levels of directory hierarchy may not be collapsed. * Each child in the directory must have a unique path segment (file name). Note that while the API itself is case-sensitive, the environment where the Action is executed may or may not be case-sensitive. That is, it is legal to call the API with a Directory that has both \"Foo\" and \"foo\" as children, but the Action may be rejected by the remote system upon execution. * The files, directories and symlinks in the directory must each be sorted in lexicographical order by path. The path strings must be sorted by code point, equivalently, by UTF-8 bytes. * The NodeProperties of files, directories, and symlinks must be sorted in lexicographical order by property name. A `Directory` that obeys the restrictions is said to be in canonical form. As an example, the following could be used for a file named `bar` and a directory named `foo` with an executable file named `baz` (hashes shortened for readability): `json // (Directory proto) { files: [ { name: \"bar\", digest: { hash: \"4a73bc9d03...\", size: 65534 }, node_properties: [ { \"name\": \"MTime\", \"value\": \"2017-01-15T01:30:15.01Z\" } ] } ], directories: [ { name: \"foo\", digest: { hash: \"4cf2eda940...\", size: 43 } } ] } // (Directory proto with hash \"4cf2eda940...\" and size 43) { files: [ { name: \"baz\", digest: { hash: \"b2c941073e...\", size: 1294, }, is_executable: true } ] } `"],["BuildBazelRemoteExecutionV2DirectoryNode","A `DirectoryNode` represents a child of a Directory which is itself a `Directory` and its associated metadata."],["BuildBazelRemoteExecutionV2ExecuteRequest","A request message for Execution.Execute."],["BuildBazelRemoteExecutionV2ExecutedActionMetadata","ExecutedActionMetadata contains details about a completed execution."],["BuildBazelRemoteExecutionV2ExecutionCapabilities","Capabilities of the remote execution system."],["BuildBazelRemoteExecutionV2ExecutionPolicy","An `ExecutionPolicy` can be used to control the scheduling of the action."],["BuildBazelRemoteExecutionV2FileNode","A `FileNode` represents a single file and associated metadata."],["BuildBazelRemoteExecutionV2FindMissingBlobsRequest","A request message for ContentAddressableStorage.FindMissingBlobs."],["BuildBazelRemoteExecutionV2FindMissingBlobsResponse","A response message for ContentAddressableStorage.FindMissingBlobs."],["BuildBazelRemoteExecutionV2GetTreeResponse","A response message for ContentAddressableStorage.GetTree."],["BuildBazelRemoteExecutionV2NodeProperties","Node properties for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the properties that it accepts."],["BuildBazelRemoteExecutionV2NodeProperty","A single property for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the property `name`s that it accepts. If permitted by the server, the same `name` may occur multiple times."],["BuildBazelRemoteExecutionV2OutputDirectory","An `OutputDirectory` is the output in an `ActionResult` corresponding to a directory's full contents rather than a single file."],["BuildBazelRemoteExecutionV2OutputFile","An `OutputFile` is similar to a FileNode, but it is used as an output in an `ActionResult`. It allows a full file path rather than only a name."],["BuildBazelRemoteExecutionV2OutputSymlink","An `OutputSymlink` is similar to a Symlink, but it is used as an output in an `ActionResult`. `OutputSymlink` is binary-compatible with `SymlinkNode`."],["BuildBazelRemoteExecutionV2PriorityCapabilities","Allowed values for priority in ResultsCachePolicy and ExecutionPolicy Used for querying both cache and execution valid priority ranges."],["BuildBazelRemoteExecutionV2PriorityCapabilitiesPriorityRange","Supported range of priorities, including boundaries."],["BuildBazelRemoteExecutionV2ResultsCachePolicy","A `ResultsCachePolicy` is used for fine-grained control over how action outputs are stored in the CAS and Action Cache."],["BuildBazelRemoteExecutionV2ServerCapabilities","A response message for Capabilities.GetCapabilities."],["BuildBazelRemoteExecutionV2SymlinkNode","A `SymlinkNode` represents a symbolic link."],["BuildBazelRemoteExecutionV2WaitExecutionRequest","A request message for WaitExecution."],["BuildBazelSemverSemVer","The full version of a given tool."],["GoogleLongrunningOperation","This resource represents a long-running operation that is the result of a network API call."],["GoogleRpcStatus","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the API Design Guide."],["MethodGetCapabilityCall","GetCapabilities returns the server capabilities configuration of the remote endpoint. Only the capabilities of the services supported by the endpoint will be returned: * Execution + CAS + Action Cache endpoints should return both CacheCapabilities and ExecutionCapabilities. * Execution only endpoints should return ExecutionCapabilities. * CAS + Action Cache only endpoints should return CacheCapabilities."],["MethodMethods","A builder providing access to all free methods, which are not associated with a particular resource. It is not used directly, but through the `RemoteBuildExecution` hub."],["OperationMethods","A builder providing access to all methods supported on operation resources. It is not used directly, but through the `RemoteBuildExecution` hub."],["OperationWaitExecutionCall","Wait for an execution operation to complete. When the client initially makes the request, the server immediately responds with the current status of the execution. The server will leave the request stream open until the operation completes, and then respond with the completed operation. The server MAY choose to stream additional updates as execution progresses, such as to provide an update as to the state of the execution."],["RemoteBuildExecution","Central instance to access all RemoteBuildExecution related resource activities"]]});