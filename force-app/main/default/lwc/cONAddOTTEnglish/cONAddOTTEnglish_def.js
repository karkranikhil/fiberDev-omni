export const OMNIDEF = {"userTimeZone":-480,"userProfile":"Google System Admin","userName":"rutujakulkarni@google.com","userId":"0058G000000O4rqQAC","userCurrencyCode":"USD","timeStamp":"2022-01-05T14:45:28.181Z","sOmniScriptId":"a3N8G000000GppzUAC","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":true},"prefillJSON":"{}","lwcId":"97d03b50-718a-65ea-7673-554b2729f733","labelMap":{"zuoraMemoSuccessMessage":"creditMemoSuccess:zuoraMemoSuccessMessage","zuoraMemoFailedError":"showZuoraError:zuoraMemoFailedError","comment":"submitOneTimeTransaction:comment","amount":"submitOneTimeTransaction:amount","textPaddingBottom":"submitOneTimeTransaction:textPaddingBottom","minMaxAmountText":"submitOneTimeTransaction:minMaxAmountText","creditReasonPaddingBottom":"submitOneTimeTransaction:creditReasonPaddingBottom","ottTransactionSelectedOption":"submitOneTimeTransaction:ottTransactionSelectedOption","creditReasonHeader":"submitOneTimeTransaction:creditReasonHeader","ticketIdPaddingBottom":"submitOneTimeTransaction:ticketIdPaddingBottom","overrideDefaultTicketId":"submitOneTimeTransaction:overrideDefaultTicketId","ticketIdManual":"submitOneTimeTransaction:ticketIdManual","ticketIdDefault":"submitOneTimeTransaction:ticketIdDefault","serviceConsoleAddOTT":"creditOneTimeTransaction:serviceConsoleAddOTT","paddingBottom":"creditOneTimeTransaction:paddingBottom","transactionHeader":"creditOneTimeTransaction:transactionHeader","creditMemoSuccess":"creditMemoSuccess","createHistoryAction":"createHistoryAction","showZuoraError":"showZuoraError","zuoraDebitMemoPost":"zuoraDebitMemoPost","sendOutageCreditEmails":"sendOutageCreditEmails","setGammaSignalValues":"setGammaSignalValues","zuoraCreditMemoPost":"zuoraCreditMemoPost","setBugafiberId":"setBugafiberId","greaterThanMaxAmount":"greaterThanMaxAmount","lessThanMinAmount":"lessThanMinAmount","submitOneTimeTransaction":"submitOneTimeTransaction","oneTimeTransactionMinMaxAmountMatrix":"oneTimeTransactionMinMaxAmountMatrix","setCreditReason":"setCreditReason","creditOneTimeTransaction":"creditOneTimeTransaction","extractHistoryEventForOTTCredit":"extractHistoryEventForOTTCredit","transactionTitle":"transactionTitle","CANCEL":"CANCEL"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Cancel Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"Submit","targetType":"Record","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"showCancelPrompt":true,"show":null,"replace":false,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":"Cancel","iconVariant":"","iconPosition":"left","iconName":"","controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CANCEL","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bCancel":true,"JSONPath":"CANCEL","lwcId":"lwc0"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[true,false],"show":null,"pubsub":false,"message":{},"label":"Transaction Title","elementValueMap":{"transactionTitle":"One Time Transactions","transactionAlternativeTitle":"One Time Transactions","serviceAccountId":"%ContextId%"},"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"transactionTitle","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"transactionTitle","lwcId":"lwc1"},{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[true,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"Extract History Event For OTT Credit","inProgressMessage":"In Progress","ignoreCache":true,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"dataRaptor Input Parameters":[{"inputParam":"serviceAccountId","element":"serviceAccountId"}],"controlWidth":12,"businessEvent":"","businessCategory":"","bundle":"CON_ExtractHistoryEventForOTTCredit","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"extractHistoryEventForOTTCredit","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"extractHistoryEventForOTTCredit","lwcId":"lwc2"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","message":{},"label":"","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"creditOneTimeTransaction":""},"aggElements":{"transactionHeader":"","serviceConsoleAddOTT":""}},"offSet":0,"name":"creditOneTimeTransaction","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":3,"response":null,"propSetMap":{"show":null,"lwcName":"titleWithIcon","label":"","hide":false,"customAttributes":[{"source":"utility:money","name":"icon"},{"source":"%transactionTitle%","name":"title"},{"source":"%transactionAlternativeTitle%","name":"alternative-text"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"transactionHeader","level":1,"JSONPath":"creditOneTimeTransaction:transactionHeader","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc30-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Line Break","rootIndex":3,"response":null,"propSetMap":{"show":null,"padding":5,"label":"LineBreak1","HTMLTemplateId":""},"name":"paddingBottom","level":1,"JSONPath":"creditOneTimeTransaction:paddingBottom","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc31-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":3,"response":null,"propSetMap":{"show":null,"lwcName":"serviceConsoleAddOTT","label":"Service Console AddOTT","hide":false,"customAttributes":[],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"serviceConsoleAddOTT","level":1,"JSONPath":"creditOneTimeTransaction:serviceConsoleAddOTT","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent2":true,"lwcId":"lwc32-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"creditOneTimeTransaction","lwcId":"lwc3"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[true,false],"show":null,"pubsub":false,"message":{},"label":"","elementValueMap":{"creditReason":"%ottTransactionOption%"},"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"setCreditReason","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"setCreditReason","lwcId":"lwc4"},{"type":"Matrix Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"postTransformBundle":"","matrixName":"CON_GetOneTimeTransactionMinMaxAmount"},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postTransformBundle":"","postMessage":"Done","message":{},"matrix Input Parameters":[{"value":"OTTOptions","name":"ottTransactionOption"}],"label":"","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"defaultMatrixResult":{},"controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"oneTimeTransactionMinMaxAmountMatrix","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bMatrixAction":true,"JSONPath":"oneTimeTransactionMinMaxAmountMatrix","lwcId":"lwc5"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","message":{},"label":"Submit One Time Transaction","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"submitOneTimeTransaction":"","ticketIdDefault":"","ticketIdManual":"","overrideDefaultTicketId":"","amount":"","comment":""},"aggElements":{}},"offSet":0,"name":"submitOneTimeTransaction","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text","rootIndex":6,"response":null,"propSetMap":{"showInputWidth":false,"show":{"group":{"rules":[{"field":"overrideDefaultTicketId","data":"false","condition":"="}],"operator":"AND"}},"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":true,"ptrnErrText":"","placeholder":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"Contact Ticket Id","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":"%bugafiberId%","debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"ticketIdDefault","level":1,"JSONPath":"submitOneTimeTransaction:ticketIdDefault","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc60-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Text","rootIndex":6,"response":null,"propSetMap":{"showInputWidth":false,"show":{"group":{"rules":[{"field":"overrideDefaultTicketId","data":"true","condition":"="}],"operator":"AND"}},"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","placeholder":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"Contact Ticket Id","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":"%bugafiberId%","debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"ticketIdManual","level":1,"JSONPath":"submitOneTimeTransaction:ticketIdManual","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc61-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Checkbox","rootIndex":6,"response":null,"propSetMap":{"show":null,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"label":"Checkbox1","hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":false,"controlWidth":12,"conditionType":"Hide if False","checkLabel":"Override Contact Ticket Id","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"overrideDefaultTicketId","level":1,"JSONPath":"submitOneTimeTransaction:overrideDefaultTicketId","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bCheckbox":true,"lwcId":"lwc62-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Line Break","rootIndex":6,"response":null,"propSetMap":{"show":null,"padding":5,"label":"LineBreak1","HTMLTemplateId":""},"name":"ticketIdPaddingBottom","level":1,"JSONPath":"submitOneTimeTransaction:ticketIdPaddingBottom","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc63-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Text Block","rootIndex":6,"response":null,"propSetMap":{"textKey":"","text":"<p style=\"font-size: 12px; color: #6b6d70;\">Credit Reason</p>","show":null,"sanitize":false,"label":"TextBlock6","dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"creditReasonHeader","level":1,"JSONPath":"submitOneTimeTransaction:creditReasonHeader","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc64-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":5,"eleArray":[{"type":"Text Block","rootIndex":6,"response":null,"propSetMap":{"textKey":"","text":"<p style=\"background: #e5e5e5; height: 30px; display: flex; align-items: center; padding-left: 15px; border-radius: 5px; font-size: 12px; color: #6b6d70;\">%ottTransactionOption%</p>","show":null,"sanitize":false,"label":"TextBlock5","dataJSON":true,"controlWidth":12,"HTMLTemplateId":""},"name":"ottTransactionSelectedOption","level":1,"JSONPath":"submitOneTimeTransaction:ottTransactionSelectedOption","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc65-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":6,"eleArray":[{"type":"Line Break","rootIndex":6,"response":null,"propSetMap":{"show":null,"padding":5,"label":"LineBreak1","HTMLTemplateId":""},"name":"creditReasonPaddingBottom","level":1,"JSONPath":"submitOneTimeTransaction:creditReasonPaddingBottom","indexInParent":6,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc66-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":7,"eleArray":[{"type":"Text Block","rootIndex":6,"response":null,"propSetMap":{"textKey":"","text":"<p dir=\"ltr\"><span style=\"background-color: #ddecf6; color: #105fbe; padding: 0.2em;\">Minimum amount $%min% - Maximum amount $%max%</span></p>","show":null,"sanitize":false,"label":"TextBlock2","dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"minMaxAmountText","level":1,"JSONPath":"submitOneTimeTransaction:minMaxAmountText","indexInParent":7,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc67-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":8,"eleArray":[{"type":"Line Break","rootIndex":6,"response":null,"propSetMap":{"show":null,"padding":5,"label":"LineBreak1","HTMLTemplateId":""},"name":"textPaddingBottom","level":1,"JSONPath":"submitOneTimeTransaction:textPaddingBottom","indexInParent":8,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc68-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":9,"eleArray":[{"type":"Currency","rootIndex":6,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"placeholder":"","min":null,"max":null,"mask":null,"label":"Amount","inputWidth":12,"hideGroupSep":false,"hide":false,"helpText":"","help":false,"displayCurrencyCode":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":null,"conditionType":"Hide if False","allowNegative":false,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"amount","level":1,"JSONPath":"submitOneTimeTransaction:amount","indexInParent":9,"index":0,"children":[],"bHasAttachment":false,"bCurrency":true,"lwcId":"lwc69-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":10,"eleArray":[{"type":"Text Area","rootIndex":6,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","placeholder":"","pattern":"","minLength":0,"maxLength":255,"label":"Comment","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":10,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"comment","level":1,"JSONPath":"submitOneTimeTransaction:comment","indexInParent":10,"index":0,"children":[],"bHasAttachment":false,"bTextarea":true,"lwcId":"lwc610-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"submitOneTimeTransaction","lwcId":"lwc6"},{"type":"Set Errors","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"amount","data":"%min%","condition":"<"}],"operator":"AND"}},"pubsub":false,"message":{},"label":"Less Than Min Amount","elementErrorMap":{"amount":"Requested credit amount must be greater than %min%"},"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"lessThanMinAmount","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bSetErrors":true,"JSONPath":"lessThanMinAmount","lwcId":"lwc7"},{"type":"Set Errors","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"amount","data":"%max%","condition":">"}],"operator":"AND"}},"pubsub":false,"message":{},"label":"Greater Than Max Account","elementErrorMap":{"amount":"Requested credit amount exceeds limit."},"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"greaterThanMaxAmount","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"bSetErrors":true,"JSONPath":"greaterThanMaxAmount","lwcId":"lwc8"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[true,false],"show":null,"pubsub":false,"message":{},"label":"Set Bugafiber Id","elementValueMap":{"bugafiberId":"=IF(%submitOneTimeTransaction:overrideDefaultTicketId%,%submitOneTimeTransaction:ticketIdManual%,%submitOneTimeTransaction:ticketIdDefault%)"},"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"setBugafiberId","level":0,"indexInParent":9,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"setBugafiberId","lwcId":"lwc9"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"ottType","data":"Credit","condition":"="}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"Zuora Credit Memo Post","integrationProcedureKey":"CON_ZuoraCreditMemoPost","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"zuoraCreditMemoPost","level":0,"indexInParent":10,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"zuoraCreditMemoPost","lwcId":"lwc10"},{"type":"Set Values","propSetMap":{"lwcComponentOverride":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[true,false],"elementValueMap":{"oneTimeChargeRows":"<tr><td style=\\\"padding:0px 50px 0px 0px;font-size:14px; font-weight:300; font-style:normal;\\\">Credit</td><td style=\\\"padding:0px 50px 0px 0px;font-size:14px; font-weight:300; font-style:normal;\\\">%postZuoraCreditMemoResult:amount%</td></tr>","addDeviceRows":"<tr><td style=\\\"padding:0px 50px 0px 0px;font-size:14px; font-weight:300; font-style:normal;\\\">UNKNOWN </td><td style=\\\"padding:0px 50px 0px 0px;font-size:14px; font-weight:300; font-style:normal;\\\">UNKNOWN</td><td style=\\\"padding:0px 50px 0px 0px;font-size:14px; font-weight:300; font-style:normal;\\\">$0</td></tr>"},"label":"setGammaSignalValues","controlWidth":12,"aggElements":{}},"offSet":0,"name":"setGammaSignalValues","level":0,"indexInParent":11,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"setGammaSignalValues","lwcId":"lwc11"},{"type":"Integration Procedure Action","propSetMap":{"sendOnlyExtraPayload":true,"businessEvent":"","businessCategory":"","enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"svgIcon":"","svgSprite":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":{"group":{"rules":[{"field":"creditReason","condition":"=","data":"Individual OOS Incident"},{"data":"true","condition":"=","field":"postZuoraCreditMemoResult:success"}],"operator":"AND"}},"showPersistentComponent":[true,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","extraPayload":{"oneTimeChargeRows":"%oneTimeChargeRows% ","totalSumRows":"%postZuoraCreditMemoResult:amount%","addDeviceRows":"%addDeviceRows%","campaign":"OutageCreditOutage","serviceAccountId":"%serviceAccountId%"},"responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteTimeout":30000,"remoteOptions":{"chainable":false,"useFuture":false,"postTransformBundle":"","preTransformBundle":""},"useContinuation":false,"integrationProcedureKey":"CON_SendGammaEmailsForServiceAccount","label":"SendOutageCreditEmails","controlWidth":12,"aggElements":{}},"offSet":0,"name":"sendOutageCreditEmails","level":0,"indexInParent":12,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"sendOutageCreditEmails","lwcId":"lwc12"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"ottType","data":"Debit","condition":"="}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"Zuora Debit Memo Post","integrationProcedureKey":"CON_ZuoraDebitMemoPost","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"zuoraDebitMemoPost","level":0,"indexInParent":13,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"zuoraDebitMemoPost","lwcId":"lwc13"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"postZuoraCreditMemoResult:success","data":"false","condition":"="},{"field":"postZuoraDebitMemoResult:success","data":"false","condition":"="}],"operator":"OR"}},"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":"0","previousLabel":"Previous","nextWidth":"0","nextLabel":"Next","message":{},"label":"Zuora Credit/Debit Memo Failed","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"showZuoraError":""},"aggElements":{}},"offSet":0,"name":"showZuoraError","level":0,"indexInParent":14,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":14,"response":null,"propSetMap":{"textKey":"","text":"<p style=\"text-align: center;\"></p>\n<p style=\"text-align: center;\"><span style=\"color: #e03e2d;\">%postZuoraCreditMemoResult:reasons|1:message%</span></p>\n<p style=\"text-align: center;\"><span style=\"color: #e03e2d;\">%postZuoraDebitMemoResult:reasons|1:message%</span></p>","show":null,"sanitize":false,"label":"TextBlock3","dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"zuoraMemoFailedError","level":1,"JSONPath":"showZuoraError:zuoraMemoFailedError","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc140-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"showZuoraError","lwcId":"lwc14"},{"type":"DataRaptor Post Action","propSetMap":{"wpm":false,"validationRequired":"Submit","ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"postZuoraCreditMemoResult:success","data":"true","condition":"="}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postTransformBundle":"","postMessage":"Done","message":{},"label":"Create History Action","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"controlWidth":12,"businessEvent":"","businessCategory":"","bundle":"CON_CreateHistoryActionForZuoraCredit","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"createHistoryAction","level":0,"indexInParent":15,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"createHistoryAction","lwcId":"lwc15"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":{"group":{"rules":[{"field":"postZuoraCreditMemoResult:success","data":"true","condition":"="},{"field":"postZuoraDebitMemoResult:success","data":"true","condition":"="}],"operator":"OR"}},"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":"0","previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","message":{},"label":"OTT Added","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"<p style=\"text-align: center;\"><span style=\"color: #000000;\">OTT CREDITED</span></p>","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":"","cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"creditMemoSuccess":""},"aggElements":{}},"offSet":0,"name":"creditMemoSuccess","level":0,"indexInParent":16,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":16,"response":null,"propSetMap":{"textKey":"","text":"<p><span style=\"color: #2dc26b;\">%ottType% Memo Created Successfully</span></p>","show":null,"sanitize":false,"label":"TextBlock4","dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"zuoraMemoSuccessMessage","level":1,"JSONPath":"creditMemoSuccess:zuoraMemoSuccessMessage","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc160-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"creditMemoSuccess","lwcId":"lwc16"}],"bReusable":false,"bpVersion":6,"bpType":"CON","bpSubType":"AddOTT","bpLang":"English","bHasAttachment":false,"lwcVarMap":{"transactionTitle":null,"transactionAlternativeTitle":null}};