export const OMNIDEF = {"userTimeZone":-480,"userProfile":"Google System Admin","userName":"kauday@google.com.fiberv3.devpro","userId":"0058G000000NUpPQAW","userCurrencyCode":"USD","timeStamp":"2021-11-26T16:21:35.990Z","sOmniScriptId":"a3N8G000000GojNUAS","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"isSeoEnabled":false,"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":true},"prefillJSON":"{}","lwcId":"0543d8d2-fa6f-b9b3-41c3-7767e17ef0cf","labelMap":{"extractCampaign":"extractCampaign","pilot":"leadInformation:pilot","interactionNotes":"leadInformation:interactionNotes","followUpDate":"leadInformation:followUpDate","campaignTypeAhead-Block":"leadInformation:campaignTypeAhead-Block","objectionReason":"leadInformation:objectionReason","phone":"leadInformation:phone","email":"leadInformation:email","lastName":"leadInformation:lastName","firstName":"leadInformation:firstName","heading":"leadInformation:heading","updateLeadLastD2DActivityDate":"updateLeadLastD2DActivityDate","save":"save","leadInformation":"leadInformation","extractPilotPicklistValues":"extractPilotPicklistValues","extractLead":"extractLead","campaignTypeAhead":"leadInformation:campaignTypeAhead-Block:campaignTypeAhead"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":null,"ssm":false,"showPersistentComponent":[true,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":3000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"extractLead","inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"dataRaptor Input Parameters":[{"inputParam":"leadId","element":"ContextId"}],"controlWidth":12,"businessEvent":"","businessCategory":"","bundle":"GEO_ExtractLead","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"extractLead","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"extractLead","lwcId":"lwc0"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":null,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendOnlyExtraPayload":true,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"customPicklist","remoteClass":"CustomPicklistController","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"extractPilotPicklistValues","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"fieldName":"Pilot__c","ContextId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"extractPilotPicklistValues","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"extractPilotPicklistValues","lwcId":"lwc1"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Save","message":{},"label":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"leadInformation":"","firstName":"","lastName":"","email":"","phone":"","objectionReason":"","campaignTypeAhead":"","campaignTypeAhead-Block":"","followUpDate":"","interactionNotes":""},"aggElements":{"pilot":""}},"offSet":0,"name":"leadInformation","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":2,"response":null,"propSetMap":{"textKey":"","text":"<h2>Lead Information</h2>","show":null,"sanitize":false,"label":"heading","disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"heading","level":1,"JSONPath":"leadInformation:heading","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc20-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Text","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"First Name","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"firstName","level":1,"JSONPath":"leadInformation:firstName","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc21-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Text","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"Last Name","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"lastName","level":1,"JSONPath":"leadInformation:lastName","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc22-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Email","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":{"group":{"rules":[{"field":"phone","data":null,"condition":"="}],"operator":"AND"}},"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","label":"Email","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":12,"conditionType":"Optional if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"email","level":1,"JSONPath":"leadInformation:email","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bEmail":true,"lwcId":"lwc23-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Telephone","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":{"group":{"rules":[{"field":"email","data":null,"condition":"="}],"operator":"AND"}},"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"(999) 999-9999","label":"Phone","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":12,"conditionType":"Optional if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"phone","level":1,"JSONPath":"leadInformation:phone","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bTelephone":true,"lwcId":"lwc24-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":5,"eleArray":[{"type":"Select","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[{"name":"Price","value":"Price"},{"name":"Payment method","value":"Payment method"},{"name":"Existing contract","value":"Existing contract"},{"name":"Happy with current provider","value":"Happy with current provider"},{"name":"Installation timeframe","value":"Installation timeframe"},{"name":"Unhappy with Construction","value":"Unhappy with Construction"},{"name":"Unresponsive in Chat","value":"Unresponsive in Chat"},{"name":"Moving soon","value":"Moving soon"},{"name":"Product","value":"Product"},{"name":"Previous poor experience with Fiber","value":"Previous poor experience with Fiber"},{"name":"Non-decision maker","value":"Non-decision maker"},{"name":"Needs more time","value":"Needs more time"},{"name":"Vacant","value":"Vacant"},{"name":"Door Slam/Hung Up","value":"Door Slam/Hung Up"},{"name":"Ineligible Address","value":"Ineligible Address"},{"name":"Pending Address Review","value":"Pending Address Review"},{"name":"Force Cancellation","value":"Force Cancellation"}],"optionSource":{"type":"SObject","source":"Lead.Objection_Reason__c"},"label":"Objection Reason","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":"Door Slam/Hung Up","controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"objectionReason","level":1,"JSONPath":"leadInformation:objectionReason","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc25-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":6,"eleArray":[{"type":"Type Ahead Block","rootIndex":2,"response":null,"propSetMap":{"useDataJson":false,"typeAheadKey":"campaignName","showInputWidth":false,"show":null,"required":true,"readOnly":false,"newItemLabel":"","minLength":0,"maxLength":255,"label":"Campaign","inputWidth":12,"hideMap":true,"hideEditButton":false,"helpText":"","help":false,"googleTransformation":{"street":"","postal_code":"","locality":"","country":"","administrative_area_level_2":"","administrative_area_level_1":""},"googleMapsAPIKey":"","googleAddressCountry":"all","enableLookup":false,"enableGoogleMapsAutocomplete":false,"editMode":false,"disableDataFilter":false,"disOnTplt":false,"debounceValue":0,"dataProcessorFunction":"","dataJsonPath":"","controlWidth":12,"conditionType":"Hide if False","callFrequency":300,"accessibleInFutureSteps":true,"HTMLTemplateId":""},"name":"campaignTypeAhead-Block","level":1,"JSONPath":"leadInformation:campaignTypeAhead-Block","indexInParent":6,"index":0,"children":[{"response":null,"level":2,"indexInParent":0,"eleArray":[{"type":"Type Ahead","rootIndex":6,"response":null,"propSetMap":{"taAction":{"type":"DataRaptor Extract Action","rootIndex":2,"response":null,"propSetMap":{"_di":1,"repeat":false,"readOnly":false,"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[false,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"extractCampaign","inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"inputCampaign","element":"campaignTypeAhead"}],"controlWidth":12,"bundle":"GEO_ExtractCampaign","HTMLTemplateId":""},"name":"extractCampaign","level":2,"JSONPath":"leadInformation:campaignTypeAhead-Block:campaignTypeAhead","indexInParent":0,"index":0,"children":[],"bHasAttachment":false},"useDataJson":false,"typeAheadKey":"campaignName","showInputWidth":false,"show":null,"required":true,"readOnly":false,"newItemLabel":"","minLength":0,"maxLength":255,"label":"Campaign","inputWidth":12,"hideMap":true,"hideEditButton":false,"helpText":"","help":false,"googleTransformation":{"street":"","postal_code":"","locality":"","country":"","administrative_area_level_2":"","administrative_area_level_1":""},"googleMapsAPIKey":"","googleAddressCountry":"all","enableLookup":false,"enableGoogleMapsAutocomplete":false,"editMode":false,"disableDataFilter":false,"disOnTplt":false,"debounceValue":0,"dataProcessorFunction":"","dataJsonPath":"","controlWidth":12,"conditionType":"Hide if False","callFrequency":300,"accessibleInFutureSteps":true,"HTMLTemplateId":""},"name":"campaignTypeAhead","level":2,"JSONPath":"leadInformation:campaignTypeAhead-Block:campaignTypeAhead","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTypeahead":true,"lwcId":"lwc2600-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bTypeaheadBlock":true,"lwcId":"lwc26-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":7,"eleArray":[{"type":"Date","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"modelDateFormat":"yyyy-MM-dd","minDate":"TODAY","maxDate":"","label":"Follow-Up Date","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"dateType":"string","dateFormat":"MM-dd-yyyy","controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"followUpDate","level":1,"JSONPath":"leadInformation:followUpDate","indexInParent":7,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc27-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":8,"eleArray":[{"type":"Text Area","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"label":"Interaction Notes","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"interactionNotes","level":1,"JSONPath":"leadInformation:interactionNotes","indexInParent":8,"index":0,"children":[],"bHasAttachment":false,"bTextarea":true,"lwcId":"lwc28-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":9,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"show":null,"lwcName":"pilotDualList","label":"Pilot","hide":false,"disOnTplt":false,"customAttributes":[{"source":"%options%","name":"options"},{"source":"%pilotPassedToLWC%","name":"pilot"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"pilot","level":1,"JSONPath":"leadInformation:pilot","indexInParent":9,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc29-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"leadInformation","lwcId":"lwc2"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Submit","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":null,"chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":true,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{"status":"success"},"label":"Save","integrationProcedureKey":"GEO_SaveInProgressLead","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"selectedPilot":"%selectedPilot%","ownerId":"%ownerId%","leadInformation:thirdPartyDelivery":"%leadInformation:thirdPartyDelivery%","leadInformation:pilot":"%leadInformation:pilot%","leadInformation:phone":"%leadInformation:phone%","leadInformation:objectionReason":"%leadInformation:objectionReason%","leadInformation:lastName":"%leadInformation:lastName%","leadInformation:interactionNotes":"%leadInformation:interactionNotes%","leadInformation:followUpDate":"%leadInformation:followUpDate%","leadInformation:firstName":"%leadInformation:firstName%","leadInformation:email":"%leadInformation:email%","leadInformation:customerConsentToThirdPartyDelivery":"%leadInformation:customerConsentToThirdPartyDelivery%","leadInformation:campaignTypeAhead-Block:campaignId":"%leadInformation:campaignTypeAhead-Block:campaignId%","leadId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"save","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"save","lwcId":"lwc3"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendOnlyExtraPayload":true,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"updateLeadLastD2DActivityDate","integrationProcedureKey":"LDM_UpdateLeadLastD2DActivityDate","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"leadId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"updateLeadLastD2DActivityDate","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"updateLeadLastD2DActivityDate","lwcId":"lwc4"}],"bReusable":false,"bpVersion":6,"bpType":"GEO","bpSubType":"LeadManagementInProgressFlow","bpLang":"English","bHasAttachment":false,"lwcVarMap":{"options":null,"pilotPassedToLWC":null}};