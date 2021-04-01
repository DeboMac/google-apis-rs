initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["BigQueryOptions","Options that change functionality of a sink exporting data to BigQuery."],["BillingAccountBucketGetCall","Gets a bucket."],["BillingAccountBucketViewGetCall","Gets a view."],["BillingAccountExclusionCreateCall","Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource."],["BillingAccountExclusionDeleteCall","Deletes an exclusion."],["BillingAccountExclusionGetCall","Gets the description of an exclusion."],["BillingAccountExclusionListCall","Lists all the exclusions in a parent resource."],["BillingAccountExclusionPatchCall","Changes one or more properties of an existing exclusion."],["BillingAccountLocationBucketCreateCall","Creates a bucket that can be used to store log entries. Once a bucket has been created, the region cannot be changed."],["BillingAccountLocationBucketDeleteCall","Deletes a bucket. Moves the bucket to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all logs in the bucket will be permanently deleted."],["BillingAccountLocationBucketListCall","Lists buckets."],["BillingAccountLocationBucketPatchCall","Updates a bucket. This method replaces the following fields in the existing bucket with values from the new bucket: retention_periodIf the retention period is decreased and the bucket is locked, FAILED_PRECONDITION will be returned.If the bucket has a LifecycleState of DELETE_REQUESTED, FAILED_PRECONDITION will be returned.A buckets region may not be modified after it is created."],["BillingAccountLocationBucketUndeleteCall","Undeletes a bucket. A bucket that has been deleted may be undeleted within the grace period of 7 days."],["BillingAccountLocationBucketViewCreateCall","Creates a view over logs in a bucket. A bucket may contain a maximum of 50 views."],["BillingAccountLocationBucketViewDeleteCall","Deletes a view from a bucket."],["BillingAccountLocationBucketViewListCall","Lists views on a bucket."],["BillingAccountLocationBucketViewPatchCall","Updates a view. This method replaces the following fields in the existing view with values from the new view: filter."],["BillingAccountLocationGetCall","Gets information about a location."],["BillingAccountLocationListCall","Lists information about the supported locations for this service."],["BillingAccountLogDeleteCall","Deletes all the log entries in a log for the _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted."],["BillingAccountLogListCall","Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed."],["BillingAccountMethods","A builder providing access to all methods supported on billingAccount resources. It is not used directly, but through the `Logging` hub."],["BillingAccountSinkCreateCall","Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink."],["BillingAccountSinkDeleteCall","Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted."],["BillingAccountSinkGetCall","Gets a sink."],["BillingAccountSinkListCall","Lists sinks."],["BillingAccountSinkPatchCall","Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field."],["BillingAccountSinkUpdateCall","Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field."],["BucketOptions","BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite."],["CmekSettings","Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.See Enabling CMEK for Logs Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information."],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for Empty is empty JSON object {}."],["EntryListCall","Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs (https://cloud.google.com/logging/docs/export)."],["EntryMethods","A builder providing access to all methods supported on entry resources. It is not used directly, but through the `Logging` hub."],["EntryTailCall","Streaming read of log entries as they are ingested. Until the stream is terminated, it will continue reading logs."],["EntryWriteCall","Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)"],["ExclusionCreateCall","Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource."],["ExclusionDeleteCall","Deletes an exclusion."],["ExclusionGetCall","Gets the description of an exclusion."],["ExclusionListCall","Lists all the exclusions in a parent resource."],["ExclusionMethods","A builder providing access to all methods supported on exclusion resources. It is not used directly, but through the `Logging` hub."],["ExclusionPatchCall","Changes one or more properties of an existing exclusion."],["Explicit","Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets."],["Exponential","Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i). Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1))."],["FolderExclusionCreateCall","Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource."],["FolderExclusionDeleteCall","Deletes an exclusion."],["FolderExclusionGetCall","Gets the description of an exclusion."],["FolderExclusionListCall","Lists all the exclusions in a parent resource."],["FolderExclusionPatchCall","Changes one or more properties of an existing exclusion."],["FolderLocationBucketCreateCall","Creates a bucket that can be used to store log entries. Once a bucket has been created, the region cannot be changed."],["FolderLocationBucketDeleteCall","Deletes a bucket. Moves the bucket to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all logs in the bucket will be permanently deleted."],["FolderLocationBucketGetCall","Gets a bucket."],["FolderLocationBucketListCall","Lists buckets."],["FolderLocationBucketPatchCall","Updates a bucket. This method replaces the following fields in the existing bucket with values from the new bucket: retention_periodIf the retention period is decreased and the bucket is locked, FAILED_PRECONDITION will be returned.If the bucket has a LifecycleState of DELETE_REQUESTED, FAILED_PRECONDITION will be returned.A buckets region may not be modified after it is created."],["FolderLocationBucketUndeleteCall","Undeletes a bucket. A bucket that has been deleted may be undeleted within the grace period of 7 days."],["FolderLocationBucketViewCreateCall","Creates a view over logs in a bucket. A bucket may contain a maximum of 50 views."],["FolderLocationBucketViewDeleteCall","Deletes a view from a bucket."],["FolderLocationBucketViewGetCall","Gets a view."],["FolderLocationBucketViewListCall","Lists views on a bucket."],["FolderLocationBucketViewPatchCall","Updates a view. This method replaces the following fields in the existing view with values from the new view: filter."],["FolderLocationGetCall","Gets information about a location."],["FolderLocationListCall","Lists information about the supported locations for this service."],["FolderLogDeleteCall","Deletes all the log entries in a log for the _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted."],["FolderLogListCall","Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed."],["FolderMethods","A builder providing access to all methods supported on folder resources. It is not used directly, but through the `Logging` hub."],["FolderSinkCreateCall","Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink."],["FolderSinkDeleteCall","Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted."],["FolderSinkGetCall","Gets a sink."],["FolderSinkListCall","Lists sinks."],["FolderSinkPatchCall","Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field."],["FolderSinkUpdateCall","Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field."],["HttpRequest","A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message."],["LabelDescriptor","A description of a label."],["Linear","Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i). Lower bound (1 <= i < N): offset + (width * (i - 1))."],["ListBucketsResponse","The response from ListBuckets."],["ListExclusionsResponse","Result returned from ListExclusions."],["ListLocationsResponse","The response message for Locations.ListLocations."],["ListLogEntriesRequest","The parameters to ListLogEntries."],["ListLogEntriesResponse","Result returned from ListLogEntries."],["ListLogMetricsResponse","Result returned from ListLogMetrics."],["ListLogsResponse","Result returned from ListLogs."],["ListMonitoredResourceDescriptorsResponse","Result returned from ListMonitoredResourceDescriptors."],["ListSinksResponse","Result returned from ListSinks."],["ListViewsResponse","The response from ListViews."],["Location","A resource that represents Google Cloud Platform location."],["LocationBucketCreateCall","Creates a bucket that can be used to store log entries. Once a bucket has been created, the region cannot be changed."],["LocationBucketDeleteCall","Deletes a bucket. Moves the bucket to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all logs in the bucket will be permanently deleted."],["LocationBucketGetCall","Gets a bucket."],["LocationBucketListCall","Lists buckets."],["LocationBucketPatchCall","Updates a bucket. This method replaces the following fields in the existing bucket with values from the new bucket: retention_periodIf the retention period is decreased and the bucket is locked, FAILED_PRECONDITION will be returned.If the bucket has a LifecycleState of DELETE_REQUESTED, FAILED_PRECONDITION will be returned.A buckets region may not be modified after it is created."],["LocationBucketUndeleteCall","Undeletes a bucket. A bucket that has been deleted may be undeleted within the grace period of 7 days."],["LocationBucketViewCreateCall","Creates a view over logs in a bucket. A bucket may contain a maximum of 50 views."],["LocationBucketViewDeleteCall","Deletes a view from a bucket."],["LocationBucketViewGetCall","Gets a view."],["LocationBucketViewListCall","Lists views on a bucket."],["LocationBucketViewPatchCall","Updates a view. This method replaces the following fields in the existing view with values from the new view: filter."],["LocationGetCall","Gets information about a location."],["LocationListCall","Lists information about the supported locations for this service."],["LocationMethods","A builder providing access to all methods supported on location resources. It is not used directly, but through the `Logging` hub."],["LogBucket","Describes a repository of logs."],["LogDeleteCall","Deletes all the log entries in a log for the _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted."],["LogEntry","An individual entry in a log."],["LogEntryOperation","Additional information about a potentially long-running operation with which a log entry is associated."],["LogEntrySourceLocation","Additional information about the source code location that produced the log entry."],["LogExclusion","Specifies a set of log entries that are not to be stored in Logging. If your GCP resource receives a large volume of logs, you can use exclusions to reduce your chargeable logs. Exclusions are processed after log sinks, so you can export log entries before they are excluded. Note that organization-level and folder-level exclusions don't apply to child resources, and that you can't exclude audit log entries."],["LogListCall","Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed."],["LogMethods","A builder providing access to all methods supported on log resources. It is not used directly, but through the `Logging` hub."],["LogMetric","Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options."],["LogSink","Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a Cloud Pub/Sub topic or a Cloud Logging Bucket. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder."],["LogView","Describes a view over logs in a bucket."],["Logging","Central instance to access all Logging related resource activities"],["MethodGetCmekSettingCall","Gets the Logs Router CMEK settings for the given resource.Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.See Enabling CMEK for Logs Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information."],["MethodMethods","A builder providing access to all free methods, which are not associated with a particular resource. It is not used directly, but through the `Logging` hub."],["MethodUpdateCmekSettingCall","Updates the Logs Router CMEK settings for the given resource.Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.UpdateCmekSettings will fail if 1) kms_key_name is invalid, or 2) the associated service account does not have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key, or 3) access to the key is disabled.See Enabling CMEK for Logs Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information."],["MetricDescriptor","Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable."],["MetricDescriptorMetadata","Additional annotations that can be used to guide the usage of a metric."],["MonitoredResource","An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for \"gce_instance\" has labels \"instance_id\" and \"zone\": { \"type\": \"gce_instance\", \"labels\": { \"instance_id\": \"12345678901234\", \"zone\": \"us-central1-a\" }} "],["MonitoredResourceDescriptor","An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of \"gce_instance\" and specifies the use of the labels \"instance_id\" and \"zone\" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API."],["MonitoredResourceDescriptorListCall","Lists the descriptors for monitored resource types used by Logging."],["MonitoredResourceDescriptorMethods","A builder providing access to all methods supported on monitoredResourceDescriptor resources. It is not used directly, but through the `Logging` hub."],["MonitoredResourceMetadata","Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message."],["OrganizationExclusionCreateCall","Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource."],["OrganizationExclusionDeleteCall","Deletes an exclusion."],["OrganizationExclusionGetCall","Gets the description of an exclusion."],["OrganizationExclusionListCall","Lists all the exclusions in a parent resource."],["OrganizationExclusionPatchCall","Changes one or more properties of an existing exclusion."],["OrganizationGetCmekSettingCall","Gets the Logs Router CMEK settings for the given resource.Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.See Enabling CMEK for Logs Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information."],["OrganizationLocationBucketCreateCall","Creates a bucket that can be used to store log entries. Once a bucket has been created, the region cannot be changed."],["OrganizationLocationBucketDeleteCall","Deletes a bucket. Moves the bucket to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all logs in the bucket will be permanently deleted."],["OrganizationLocationBucketGetCall","Gets a bucket."],["OrganizationLocationBucketListCall","Lists buckets."],["OrganizationLocationBucketPatchCall","Updates a bucket. This method replaces the following fields in the existing bucket with values from the new bucket: retention_periodIf the retention period is decreased and the bucket is locked, FAILED_PRECONDITION will be returned.If the bucket has a LifecycleState of DELETE_REQUESTED, FAILED_PRECONDITION will be returned.A buckets region may not be modified after it is created."],["OrganizationLocationBucketUndeleteCall","Undeletes a bucket. A bucket that has been deleted may be undeleted within the grace period of 7 days."],["OrganizationLocationBucketViewCreateCall","Creates a view over logs in a bucket. A bucket may contain a maximum of 50 views."],["OrganizationLocationBucketViewDeleteCall","Deletes a view from a bucket."],["OrganizationLocationBucketViewGetCall","Gets a view."],["OrganizationLocationBucketViewListCall","Lists views on a bucket."],["OrganizationLocationBucketViewPatchCall","Updates a view. This method replaces the following fields in the existing view with values from the new view: filter."],["OrganizationLocationGetCall","Gets information about a location."],["OrganizationLocationListCall","Lists information about the supported locations for this service."],["OrganizationLogDeleteCall","Deletes all the log entries in a log for the _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted."],["OrganizationLogListCall","Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed."],["OrganizationMethods","A builder providing access to all methods supported on organization resources. It is not used directly, but through the `Logging` hub."],["OrganizationSinkCreateCall","Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink."],["OrganizationSinkDeleteCall","Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted."],["OrganizationSinkGetCall","Gets a sink."],["OrganizationSinkListCall","Lists sinks."],["OrganizationSinkPatchCall","Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field."],["OrganizationSinkUpdateCall","Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field."],["OrganizationUpdateCmekSettingCall","Updates the Logs Router CMEK settings for the given resource.Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.UpdateCmekSettings will fail if 1) kms_key_name is invalid, or 2) the associated service account does not have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key, or 3) access to the key is disabled.See Enabling CMEK for Logs Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information."],["ProjectExclusionCreateCall","Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource."],["ProjectExclusionDeleteCall","Deletes an exclusion."],["ProjectExclusionGetCall","Gets the description of an exclusion."],["ProjectExclusionListCall","Lists all the exclusions in a parent resource."],["ProjectExclusionPatchCall","Changes one or more properties of an existing exclusion."],["ProjectLocationBucketCreateCall","Creates a bucket that can be used to store log entries. Once a bucket has been created, the region cannot be changed."],["ProjectLocationBucketDeleteCall","Deletes a bucket. Moves the bucket to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all logs in the bucket will be permanently deleted."],["ProjectLocationBucketGetCall","Gets a bucket."],["ProjectLocationBucketListCall","Lists buckets."],["ProjectLocationBucketPatchCall","Updates a bucket. This method replaces the following fields in the existing bucket with values from the new bucket: retention_periodIf the retention period is decreased and the bucket is locked, FAILED_PRECONDITION will be returned.If the bucket has a LifecycleState of DELETE_REQUESTED, FAILED_PRECONDITION will be returned.A buckets region may not be modified after it is created."],["ProjectLocationBucketUndeleteCall","Undeletes a bucket. A bucket that has been deleted may be undeleted within the grace period of 7 days."],["ProjectLocationBucketViewCreateCall","Creates a view over logs in a bucket. A bucket may contain a maximum of 50 views."],["ProjectLocationBucketViewDeleteCall","Deletes a view from a bucket."],["ProjectLocationBucketViewGetCall","Gets a view."],["ProjectLocationBucketViewListCall","Lists views on a bucket."],["ProjectLocationBucketViewPatchCall","Updates a view. This method replaces the following fields in the existing view with values from the new view: filter."],["ProjectLocationGetCall","Gets information about a location."],["ProjectLocationListCall","Lists information about the supported locations for this service."],["ProjectLogDeleteCall","Deletes all the log entries in a log for the _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted."],["ProjectLogListCall","Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `Logging` hub."],["ProjectMetricCreateCall","Creates a logs-based metric."],["ProjectMetricDeleteCall","Deletes a logs-based metric."],["ProjectMetricGetCall","Gets a logs-based metric."],["ProjectMetricListCall","Lists logs-based metrics."],["ProjectMetricUpdateCall","Creates or updates a logs-based metric."],["ProjectSinkCreateCall","Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink."],["ProjectSinkDeleteCall","Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted."],["ProjectSinkGetCall","Gets a sink."],["ProjectSinkListCall","Lists sinks."],["ProjectSinkPatchCall","Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field."],["ProjectSinkUpdateCall","Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field."],["SinkCreateCall","Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink."],["SinkDeleteCall","Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted."],["SinkGetCall","Gets a sink."],["SinkListCall","Lists sinks."],["SinkMethods","A builder providing access to all methods supported on sink resources. It is not used directly, but through the `Logging` hub."],["SinkUpdateCall","Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field."],["SuppressionInfo","Information about entries that were omitted from the session."],["TailLogEntriesRequest","The parameters to TailLogEntries."],["TailLogEntriesResponse","Result returned from TailLogEntries."],["UndeleteBucketRequest","The parameters to UndeleteBucket."],["WriteLogEntriesRequest","The parameters to WriteLogEntries."],["WriteLogEntriesResponse","Result returned from WriteLogEntries."]]});