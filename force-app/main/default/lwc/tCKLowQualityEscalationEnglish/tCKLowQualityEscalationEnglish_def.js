export const OMNIDEF = {"userTimeZone":-480,"userProfile":"Google System Admin","userName":"sipatel@google.com.fiberv3.devpro","userId":"0058G000000N8xlQAC","userCurrencyCode":"USD","timeStamp":"2021-12-06T13:07:21.416Z","sOmniScriptId":"a3N8G000000GojrUAC","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{"":""},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":true,"allowCancel":true},"prefillJSON":"{}","lwcId":"3f257bfc-11cb-4fc3-81cd-c5a25af1bea9","labelMap":{"details":"lowQualityEscalation:details","LineBreakDetails":"lowQualityEscalation:LineBreakDetails","vendorGroup":"lowQualityEscalation:vendorGroup","LineBreak":"lowQualityEscalation:LineBreak","reason":"lowQualityEscalation:reason","navigateToTicketRecord":"navigateToTicketRecord","updateBugafiberTicket":"updateBugafiberTicket","lowQualityEscalation":"lowQualityEscalation","extractTicketDetails":"extractTicketDetails"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[true,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"extractTicketDetails","inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"dataRaptor Input Parameters":[{"inputParam":"ticketId","element":"ContextId"}],"controlWidth":12,"businessEvent":"","businessCategory":"","bundle":"TCK_ExtractTicketDetails","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"extractTicketDetails","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"extractTicketDetails","lwcId":"lwc0"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":"3","previousLabel":"Previous","nextWidth":3,"nextLabel":"Escalate","message":{},"label":"Low Quality Escalation","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"lowQualityEscalation":"","reason":"","vendorGroup":"","details":""},"aggElements":{}},"offSet":0,"name":"lowQualityEscalation","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Select","rootIndex":1,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[{"value":"Bad Workflow/Symptom Issues","name":"Bad Workflow/Symptom Issues","autoAdv":null},{"value":"Basic","name":"Basic","autoAdv":null},{"value":"Escalate Elsewhere","name":"Escalate Elsewhere","autoAdv":null},{"value":"Incomplete Information","name":"Incomplete Information","autoAdv":null},{"value":"Other","name":"Other","autoAdv":null}],"optionSource":{"type":"","source":""},"label":"Reason","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"controllingField":{"type":"","source":"","element":""},"controlWidth":8,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"reason","level":1,"JSONPath":"lowQualityEscalation:reason","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc10-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Line Break","rootIndex":1,"response":null,"propSetMap":{"show":null,"padding":10,"label":"LineBreak1","HTMLTemplateId":""},"name":"LineBreak","level":1,"JSONPath":"lowQualityEscalation:LineBreak","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc11-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Select","rootIndex":1,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[{"value":"bds-gfiber-ticketing","name":"bds-gfiber-ticketing","autoAdv":null},{"value":"ibex-gfiber-ticketing","name":"ibex-gfiber-ticketing","autoAdv":null},{"value":"nelson-gfiber-ticketing","name":"nelson-gfiber-ticketing","autoAdv":null},{"value":"telus-gfiber-ticketing","name":"telus-gfiber-ticketing","autoAdv":null},{"value":"tni-gfiber-ticketing","name":"tni-gfiber-ticketing","autoAdv":null}],"optionSource":{"type":"","source":""},"label":"Vendor Group","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"controllingField":{"type":"","source":"","element":""},"controlWidth":8,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"vendorGroup","level":1,"JSONPath":"lowQualityEscalation:vendorGroup","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc12-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Line Break","rootIndex":1,"response":null,"propSetMap":{"show":null,"padding":10,"label":"LineBreak2","HTMLTemplateId":""},"name":"LineBreakDetails","level":1,"JSONPath":"lowQualityEscalation:LineBreakDetails","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc13-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Text Area","rootIndex":1,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","placeholder":"","pattern":"","minLength":0,"maxLength":255,"label":"Details","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":8,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"details","level":1,"JSONPath":"lowQualityEscalation:details","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bTextarea":true,"lwcId":"lwc14-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"lowQualityEscalation","lwcId":"lwc1"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":null,"sendOnlyExtraPayload":true,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"Update Bugafiber Ticket","integrationProcedureKey":"TCK_UpdateIssueTicket","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"field":true,"vendorGroup":"%lowQualityEscalation:vendorGroup%","ticketId":"%bugafiberId%","reason":"%lowQualityEscalation:reason%","details":"%lowQualityEscalation:details%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"updateBugafiberTicket","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"updateBugafiberTicket","lwcId":"lwc2"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"Submit","targetType":"Record","targetName":"Ticket__c","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":null,"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":"navigateToTicketRecord","iconVariant":"","iconPosition":"left","iconName":"","controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"navigateToTicketRecord","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"navigateToTicketRecord","lwcId":"lwc3"}],"bReusable":false,"bpVersion":2,"bpType":"TCK","bpSubType":"LowQualityEscalation","bpLang":"English","bHasAttachment":false,"lwcVarMap":{}};