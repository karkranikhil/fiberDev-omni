export const OMNIDEF = {"userTimeZone":-480,"userProfile":"Google System Admin","userName":"purvap@google.com.fiberv3.devpro","userId":"0058G000000N8y0QAC","userCurrencyCode":"USD","timeStamp":"2021-11-13T13:01:12.269Z","sOmniScriptId":"a3N8G000000GokbUAC","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":true,"allowCancel":true},"prefillJSON":"{}","lwcId":"f95a93d5-2cd1-6df7-3965-8acd8588aef3","labelMap":{"advertisingEmails":"updateSubscription:advertisingEmails","newProductsOrPromotions":"updateSubscription:newProductsOrPromotions","userMarketResearchValue":"updateSubscription:userMarketResearchValue","maintenanceValue":"updateSubscription:maintenanceValue","addressNewsValue":"updateSubscription:addressNewsValue","subScriptionText":"updateSubscription:subScriptionText","updateSubscriptionTitle":"updateSubscription:updateSubscriptionTitle","navigateToAccountRecord":"navigateToAccountRecord","updateAvailedSubscriptions":"updateAvailedSubscriptions","setUpdatePreferencesValues":"setUpdatePreferencesValues","updateSubscription":"updateSubscription","setFetchPreferencesValues":"setFetchPreferencesValues","extractAvailedSubscriptions":"extractAvailedSubscriptions"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"extractAvailedSubscriptions","integrationProcedureKey":"CON_ExtractAvailedSubscriptions","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"accountId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"extractAvailedSubscriptions","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"extractAvailedSubscriptions","lwcId":"lwc0"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[true,false],"show":null,"pubsub":false,"message":{},"label":"setFetchPreferencesValues","elementValueMap":{"userMarketResearchValue":"=IF(%preferences:userMarketResearch%== \"OPT_IN\",true,false)","updateSubscriptionTitle":"Update Subscription","updateSubscriptionAlternativeText":"turn_off_notification","newProductsOrPromotions":"=IF(%preferences:newProductsOrPromotions%== \"OPT_IN\",true,false)","maintenanceValue":"=IF(%preferences:maintenance%== \"OPT_IN\",true,false)","advertisingEmails":"=IF(%preferences:advertisingEmails%== \"OPT_IN\",true,false)","addressNewsValue":"=IF(%preferences:addressNews%== \"OPT_IN\",true,false)"},"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"setFetchPreferencesValues","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"setFetchPreferencesValues","lwcId":"lwc1"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Submit","message":{},"label":"","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":"","cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"updateSubscription":"","addressNewsValue":"","maintenanceValue":"","userMarketResearchValue":"","newProductsOrPromotions":"","advertisingEmails":""},"aggElements":{"updateSubscriptionTitle":""}},"offSet":0,"name":"updateSubscription","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":2,"response":null,"propSetMap":{"show":null,"lwcName":"titleWithIcon","label":"updateSubscriptionTitle","hide":false,"customAttributes":[{"source":"utility:turn_off_notifications","name":"icon"},{"source":"%updateSubscriptionTitle%","name":"title"},{"source":"%updateSubscriptionAlternativeText%","name":"alternative-text"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"updateSubscriptionTitle","level":1,"JSONPath":"updateSubscription:updateSubscriptionTitle","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc20-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Text Block","rootIndex":2,"response":null,"propSetMap":{"textKey":"","text":"<p><strong><span style=\"color: #95a5a6;\">Deselect Checkbox to Opt Out</span></strong></p>","show":null,"sanitize":false,"label":"TextBlock1","dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"subScriptionText","level":1,"JSONPath":"updateSubscription:subScriptionText","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc21-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Checkbox","rootIndex":2,"response":null,"propSetMap":{"show":null,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"label":"Checkbox1","hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":false,"controlWidth":12,"conditionType":"Optional if False","checkLabel":"Address News","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"addressNewsValue","level":1,"JSONPath":"updateSubscription:addressNewsValue","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bCheckbox":true,"lwcId":"lwc22-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Checkbox","rootIndex":2,"response":null,"propSetMap":{"show":null,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"label":"Checkbox1","hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":false,"controlWidth":12,"conditionType":"Hide if False","checkLabel":"Maintenance","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"maintenanceValue","level":1,"JSONPath":"updateSubscription:maintenanceValue","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bCheckbox":true,"lwcId":"lwc23-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Checkbox","rootIndex":2,"response":null,"propSetMap":{"show":null,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"label":"Checkbox1","hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":false,"controlWidth":12,"conditionType":"Hide if False","checkLabel":"User Market Research","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"userMarketResearchValue","level":1,"JSONPath":"updateSubscription:userMarketResearchValue","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bCheckbox":true,"lwcId":"lwc24-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":5,"eleArray":[{"type":"Checkbox","rootIndex":2,"response":null,"propSetMap":{"show":null,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"label":"Checkbox1","hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":false,"controlWidth":12,"conditionType":"Hide if False","checkLabel":"New Products & Promotions","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"newProductsOrPromotions","level":1,"JSONPath":"updateSubscription:newProductsOrPromotions","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bCheckbox":true,"lwcId":"lwc25-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":6,"eleArray":[{"type":"Checkbox","rootIndex":2,"response":null,"propSetMap":{"show":null,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"label":"Checkbox1","hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":false,"controlWidth":12,"conditionType":"Hide if False","checkLabel":"Advertising Emails","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"advertisingEmails","level":1,"JSONPath":"updateSubscription:advertisingEmails","indexInParent":6,"index":0,"children":[],"bHasAttachment":false,"bCheckbox":true,"lwcId":"lwc26-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"updateSubscription","lwcId":"lwc2"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[true,false],"show":null,"pubsub":false,"message":{},"label":"setUpdatePreferencesValues","elementValueMap":{"setUserMarketResearchValue":"=IF(%updateSubscription:userMarketResearchValue%==true, \"OPT_IN\", \"OPT_OUT\")","setNewProductsOrPromotions":"=IF(%updateSubscription:newProductsOrPromotions%==true, \"OPT_IN\", \"OPT_OUT\")","setMaintenanceValue":"=IF(%updateSubscription:maintenanceValue%==true, \"OPT_IN\", \"OPT_OUT\")","setAdvertisingEmails":"=IF(%updateSubscription:advertisingEmails%==true, \"OPT_IN\", \"OPT_OUT\")","setAddressNews":"=IF(%updateSubscription:addressNewsValue%==true, \"OPT_IN\", \"OPT_OUT\")"},"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"setUpdatePreferencesValues","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"setUpdatePreferencesValues","lwcId":"lwc3"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"toastComplete":true,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":null,"sendOnlyExtraPayload":false,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"updateAvailedSubscriptions","integrationProcedureKey":"CON_UpdateAvailedSubscriptions","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"userMarketResearch":"%setUserMarketResearchValue%","newProductsOrPromotions":"%setNewProductsOrPromotions%","maintenance":"%setMaintenanceValue%","gaiaId":"%gaiaId%","advertisingEmails":"%setAdvertisingEmails%","addressNewsValue":"%setAddressNews%","accountId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"updateAvailedSubscriptions","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"updateAvailedSubscriptions","lwcId":"lwc4"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"Submit","targetType":"Record","targetName":"Account","targetLWCLayout":"lightning","targetId":"%accountId%","targetFilter":"Recent","ssm":false,"show":null,"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":"navigateToAccountRecord","iconVariant":"","iconPosition":"left","iconName":"","controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"navigateToAccountRecord","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"navigateToAccountRecord","lwcId":"lwc5"}],"bReusable":false,"bpVersion":4,"bpType":"CON","bpSubType":"UpdateSubscription","bpLang":"English","bHasAttachment":false,"lwcVarMap":{"updateSubscriptionTitle":null,"updateSubscriptionAlternativeText":null}};