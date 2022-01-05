export const OMNIDEF = {"userTimeZone":-480,"userProfile":"Google System Admin","userName":"katukams@google.com.fiberv3.devpro","userId":"0058G000000NiWHQA0","userCurrencyCode":"USD","timeStamp":"2021-11-16T11:13:00.579Z","sOmniScriptId":"a3N8G000000GojmUAC","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":true},"prefillJSON":"{}","lwcId":"165da2b3-d834-0281-b7ff-dd448bc281a1","labelMap":{"selectIssueTicket":"issueTicket:selectIssueTicket","errorMessageForNoIssueTicket":"errorForNoIssueTicket:errorMessageForNoIssueTicket","historyEventOverviewPage":"historyEventOverviewPage","accountOverviewPage":"accountOverviewPage","closeContactBuganizerTicketService":"closeContactBuganizerTicketService","updateHistoryEvent":"updateHistoryEvent","issueTicket":"issueTicket","errorForNoIssueTicket":"errorForNoIssueTicket","setValueForNoTicket":"setValueForNoTicket","extractTicketIdFromAccount":"extractTicketIdFromAccount","extractAccountAndLeadFromHistoryEvent":"extractAccountAndLeadFromHistoryEvent","extractHistoryEventFromAccount":"extractHistoryEventFromAccount"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[false,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"Extract History Event From Account","inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"accountId","element":"accountId"},{"inputParam":"userId","element":"userId"},{"inputParam":"leadId","element":"leadId"},{"inputParam":"historyEventId","element":"historyEventId"}],"controlWidth":12,"bundle":"CON_ExtractHistoryEventFromAccount","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"extractHistoryEventFromAccount","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"extractHistoryEventFromAccount","lwcId":"lwc0"},{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"historyEventId","data":null,"condition":"<>"}],"operator":"AND"}},"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"extractAccountAndLeadFromHistoryEvent","inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"historyEventId","element":"historyEventId"}],"controlWidth":12,"bundle":"TCK_ExtractAccountAndLeadFromHistoryEvent","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"extractAccountAndLeadFromHistoryEvent","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"extractAccountAndLeadFromHistoryEvent","lwcId":"lwc1"},{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[true,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"extractTicketIdFromAccount","inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"dataRaptor Input Parameters":[{"inputParam":"accountId","element":"accountId"},{"inputParam":"leadId","element":"leadId"},{"inputParam":"Id","element":"historyEventId"}],"controlWidth":12,"businessEvent":"","businessCategory":"","bundle":"TCK_ExtractIssueTicketFromAccountOrLead","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"extractTicketIdFromAccount","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"extractTicketIdFromAccount","lwcId":"lwc2"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[true,false],"show":null,"pubsub":false,"message":{},"label":"setValueForNoTicket","elementValueMap":{"flag":"=IF(%isAction% == \"No\"  ,true,false)"},"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"setValueForNoTicket","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"setValueForNoTicket","lwcId":"lwc3"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"flag","data":"true","condition":"="},{"field":"status","data":"Open","condition":"="}],"operator":"AND"}},"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":0,"previousLabel":"Previous","nextWidth":0,"nextLabel":"Next","message":{},"label":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"errorForNoIssueTicket":""},"aggElements":{}},"offSet":0,"name":"errorForNoIssueTicket","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":4,"response":null,"propSetMap":{"textKey":"","text":"<h2>&nbsp;</h2>\n<h2><strong>Please log an issue ticket before closing</strong></h2>","show":null,"sanitize":false,"label":null,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"errorMessageForNoIssueTicket","level":1,"JSONPath":"errorForNoIssueTicket:errorMessageForNoIssueTicket","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc40-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"errorForNoIssueTicket","lwcId":"lwc4"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[false,false],"show":null,"saveMessage":"","saveLabel":"","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"","nextWidth":3,"nextLabel":"","message":{},"label":"Close Contact Ticket","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"","chartLabel":null,"cancelMessage":"","cancelLabel":"","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"issueTicket":""},"aggElements":{"selectIssueTicket":""}},"offSet":0,"name":"issueTicket","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":5,"response":null,"propSetMap":{"show":null,"lwcName":"openIssueTickets","label":"Select Issue Ticket","hide":false,"disOnTplt":false,"customAttributes":[{"source":"%accountId%","name":"account-id"},{"source":"%leadId%","name":"lead-id"},{"source":"%historyEventId%","name":"history-id"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"selectIssueTicket","level":1,"JSONPath":"issueTicket:selectIssueTicket","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc50-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"issueTicket","lwcId":"lwc5"},{"type":"DataRaptor Post Action","propSetMap":{"wpm":false,"validationRequired":"Submit","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"endThisInteractionSetValue","data":"Yes","condition":"="}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postTransformBundle":"","postMessage":"Done","message":{},"label":"Update History Event","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"bundle":"CON_UpdateHistoryEvent","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"updateHistoryEvent","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"updateHistoryEvent","lwcId":"lwc6"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"endThisInteractionSetValue","data":"Yes","condition":"="}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"Create Close Contact Buganizer Ticket Service","integrationProcedureKey":"CON_CloseContactBuganizerTicketService","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"title":"Test Contact Ticket","ticketId":"%ticketId%","customerContactStatus":"Resolved","assignee":"%email%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"closeContactBuganizerTicketService","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"closeContactBuganizerTicketService","lwcId":"lwc7"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetType":"Record","targetName":"Account","targetLWCLayout":"lightning","targetId":"%accountId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"endThisInteractionSetValue","data":"Yes","condition":"="},{"field":"isHistoryEvent","data":"true","condition":"<>"}],"operator":"AND"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":"Account Overview Page","iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"accountOverviewPage","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"accountOverviewPage","lwcId":"lwc8"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"Submit","targetType":"Record","targetLWCLayout":"lightning","targetId":"%historyEventId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"endThisInteractionSetValue","data":"Yes","condition":"="},{"field":"isHistoryEvent","data":"true","condition":"="}],"operator":"AND"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":"History Event Overview Page","iconVariant":"","iconPosition":"left","iconName":"","controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"historyEventOverviewPage","level":0,"indexInParent":9,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"historyEventOverviewPage","lwcId":"lwc9"}],"bReusable":false,"bpVersion":6,"bpType":"CON","bpSubType":"CloseInteractions","bpLang":"English","bHasAttachment":false,"lwcVarMap":{"accountId":null,"leadId":null,"historyEventId":null}};