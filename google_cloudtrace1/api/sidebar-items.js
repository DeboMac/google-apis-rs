initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["CloudTrace","Central instance to access all CloudTrace related resource activities"],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`."],["ListTracesResponse","The response message for the `ListTraces` method."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `CloudTrace` hub."],["ProjectPatchTraceCall","Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created."],["ProjectTraceGetCall","Gets a single trace by its ID."],["ProjectTraceListCall","Returns of a list of traces that match the specified filter conditions."],["Trace","A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation."],["TraceSpan","A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace."],["Traces","List of new or updated traces."]]});