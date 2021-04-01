initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["Document","Central instance to access all Document related resource activities"],["GoogleCloudDocumentaiV1BatchDocumentsInputConfig","The common config to specify a set of documents used as input."],["GoogleCloudDocumentaiV1BatchProcessRequest","Request message for batch process document method."],["GoogleCloudDocumentaiV1BoundingPoly","A bounding polygon for the detected image annotation."],["GoogleCloudDocumentaiV1Document","Document represents the canonical document resource in Document Understanding AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document Understanding AI to iterate and optimize for quality."],["GoogleCloudDocumentaiV1DocumentEntity","A phrase in the text that is a known entity type, such as a person, an organization, or location."],["GoogleCloudDocumentaiV1DocumentEntityNormalizedValue","Parsed and normalized entity value."],["GoogleCloudDocumentaiV1DocumentEntityRelation","Relationship between Entities."],["GoogleCloudDocumentaiV1DocumentOutputConfig","Config that controls the output of documents. All documents will be written as a JSON file."],["GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig","The configuration used when outputting documents."],["GoogleCloudDocumentaiV1DocumentPage","A page in a Document."],["GoogleCloudDocumentaiV1DocumentPageAnchor","Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types."],["GoogleCloudDocumentaiV1DocumentPageAnchorPageRef","Represents a weak reference to a page element within a document."],["GoogleCloudDocumentaiV1DocumentPageBlock","A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation."],["GoogleCloudDocumentaiV1DocumentPageDetectedLanguage","Detected language for a structural component."],["GoogleCloudDocumentaiV1DocumentPageDimension","Dimension for the page."],["GoogleCloudDocumentaiV1DocumentPageFormField","A form field detected on the page."],["GoogleCloudDocumentaiV1DocumentPageImage","Rendered image contents for this page."],["GoogleCloudDocumentaiV1DocumentPageLayout","Visual element describing a layout unit on a page."],["GoogleCloudDocumentaiV1DocumentPageLine","A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc."],["GoogleCloudDocumentaiV1DocumentPageMatrix","Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation."],["GoogleCloudDocumentaiV1DocumentPageParagraph","A collection of lines that a human would perceive as a paragraph."],["GoogleCloudDocumentaiV1DocumentPageTable","A table representation similar to HTML table structure."],["GoogleCloudDocumentaiV1DocumentPageTableTableCell","A cell representation inside the table."],["GoogleCloudDocumentaiV1DocumentPageTableTableRow","A row of table cells."],["GoogleCloudDocumentaiV1DocumentPageToken","A detected token."],["GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak","Detected break at the end of a Token."],["GoogleCloudDocumentaiV1DocumentPageVisualElement","Detected non-text visual elements e.g. checkbox, signature etc. on the page."],["GoogleCloudDocumentaiV1DocumentProvenance","Structure to identify provenance relationships between annotations in different revisions."],["GoogleCloudDocumentaiV1DocumentProvenanceParent","Structure for referencing parent provenances. When an element replaces one of more other elements parent references identify the elements that are replaced."],["GoogleCloudDocumentaiV1DocumentRevision","Contains past or forward revisions of this document."],["GoogleCloudDocumentaiV1DocumentRevisionHumanReview","Human Review information of the document."],["GoogleCloudDocumentaiV1DocumentShardInfo","For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is."],["GoogleCloudDocumentaiV1DocumentStyle","Annotation for common text style attributes. This adheres to CSS conventions as much as possible."],["GoogleCloudDocumentaiV1DocumentStyleFontSize","Font size with unit."],["GoogleCloudDocumentaiV1DocumentTextAnchor","Text reference indexing into the Document.text."],["GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment","A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset"],["GoogleCloudDocumentaiV1DocumentTextChange","This message is used for text changes aka. OCR corrections."],["GoogleCloudDocumentaiV1GcsDocument","Specifies a document stored on Cloud Storage."],["GoogleCloudDocumentaiV1GcsDocuments","Specifies a set of documents on Cloud Storage."],["GoogleCloudDocumentaiV1GcsPrefix","Specifies all documents on Cloud Storage with a common prefix."],["GoogleCloudDocumentaiV1HumanReviewStatus","The status of human review on a processed document."],["GoogleCloudDocumentaiV1NormalizedVertex","A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1."],["GoogleCloudDocumentaiV1ProcessRequest","Request message for the process document method."],["GoogleCloudDocumentaiV1ProcessResponse","Response message for the process document method."],["GoogleCloudDocumentaiV1RawDocument","Payload message of raw document content (bytes)."],["GoogleCloudDocumentaiV1ReviewDocumentRequest","Request message for review document method."],["GoogleCloudDocumentaiV1Vertex","A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image."],["GoogleCloudLocationListLocationsResponse","The response message for Locations.ListLocations."],["GoogleCloudLocationLocation","A resource that represents Google Cloud Platform location."],["GoogleLongrunningCancelOperationRequest","The request message for Operations.CancelOperation."],["GoogleLongrunningListOperationsResponse","The response message for Operations.ListOperations."],["GoogleLongrunningOperation","This resource represents a long-running operation that is the result of a network API call."],["GoogleProtobufEmpty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`."],["GoogleRpcStatus","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the API Design Guide."],["GoogleTypeColor","Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ..."],["GoogleTypeDate","Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`."],["GoogleTypeDateTime","Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year is 0, the DateTime is considered not to have a specific year. month and day must have valid, non-zero values. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations."],["GoogleTypeMoney","Represents an amount of money with its currency type."],["GoogleTypePostalAddress","Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478"],["GoogleTypeTimeZone","Represents a time zone from the IANA Time Zone Database."],["OperationCancelCall","Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`."],["OperationDeleteCall","Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`."],["OperationListCall","Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id."],["OperationMethods","A builder providing access to all methods supported on operation resources. It is not used directly, but through the `Document` hub."],["ProjectLocationGetCall","Gets information about a location."],["ProjectLocationListCall","Lists information about the supported locations for this service."],["ProjectLocationOperationGetCall","Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service."],["ProjectLocationProcessorBatchProcesCall","LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format."],["ProjectLocationProcessorHumanReviewConfigReviewDocumentCall","Send a document for Human Review. The input document should be processed by the specified processor."],["ProjectLocationProcessorProcesCall","Processes a single document."],["ProjectLocationProcessorProcessorVersionBatchProcesCall","LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format."],["ProjectLocationProcessorProcessorVersionProcesCall","Processes a single document."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `Document` hub."],["ProjectOperationGetCall","Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service."],["Uiv1beta3Methods","A builder providing access to all methods supported on uiv1beta3 resources. It is not used directly, but through the `Document` hub."],["Uiv1beta3ProjectLocationGetCall","Gets information about a location."],["Uiv1beta3ProjectLocationListCall","Lists information about the supported locations for this service."],["Uiv1beta3ProjectLocationOperationGetCall","Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service."]]});