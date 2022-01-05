let definition =
      {"dataSource":{"type":"IntegrationProcedures","value":{"ipMethod":"CON_GetDeviceTaskDetails","vlocityAsync":false,"inputMap":{"ticketId":"{recordId}"},"resultVar":""},"orderBy":{"name":"","isReverse":false},"contextVariables":[{"id":1,"name":"recordId","val":"x008G0000004CPXQA2"}]},"enableLwc":true,"events":[{"actionData":{"card":"{card}","stateAction":{"eventName":"reload","id":"flex-action-1632369365959","message":"{\"type\":\"IntegrationProcedures\",\"value\":{\"ipMethod\":\"CON_GetDeviceTaskDetails\",\"vlocityAsync\":false,\"inputMap\":{\"ticketId\":\"{recordId}\"},\"resultVar\":\"\"},\"orderBy\":{\"name\":\"\",\"isReverse\":false},\"contextVariables\":[{\"name\":\"recordId\",\"val\":\"x040n0000004XR8AAM\",\"id\":1}]}","type":"cardAction"}},"channelname":"CON_DeviceTask","displayLabel":"CON_DeviceTask:data","element":"action","eventLabel":"pubsub","eventname":"data","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfCON_DeviceTask_12_GoogleFiber","Id":"0Rb8G0000000EfDSAU","MasterLabel":"cfCON_DeviceTask_12_GoogleFiber","NamespacePrefix":"c","ManageableState":"unmanaged"},"osSupport":true,"states":[{"actions":[],"childCards":["CON_ONTDetailsFromServicePoint","CON_NonONTDetailsFromOrderItemOrAsset"],"components":{"layer-0":{"children":[{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"DeviceTaskHeaderBlock","key":"element_element_element_block_0_0_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2014pt;%22%3E%3Cstrong%3EDevice%20Tasks%3C/strong%3E%3C/span%3E%3C/div%3E%0A%3Cdiv%3E%3Cspan%20style=%22background-color:%20initial;%20font-size:%200.8125rem;%22%3EYou%20must%20connect%20device%20prior%20to%20pressing%20install%20or%20replace.%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":[],"width":""},"class":" ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"DeviceTaskBlock-Block-1-Text-1","key":"element_element_element_block_0_0_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2012pt;%22%3ECustomer%20Since:%20%3Cstrong%3E%7BcustomerSinceDate%7D%3C/strong%3E%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"right","color":""}},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"DeviceTaskBlock-Block-1","key":"element_element_block_0_0_block_0_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#f3f2f2","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"5px 5px 0 0","style":"solid","type":["border_top","border_right","border_left"],"width":""},"class":"slds-border_top slds-border_right slds-border_left slds-p-vertical_small slds-p-horizontal_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:small","size":"small","type":"vertical"},{"label":"horizontal:medium","size":"medium","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#f3f2f2;     border-top: #cccccc 1px solid;border-right: #cccccc 1px solid;border-left: #cccccc 1px solid; \n    border-radius:5px 5px 0 0;     ","text":{"align":"","color":""}},"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"DeviceTaskBlockForONT","key":"element_element_block_0_0_childCardPreview_1_0","name":"FlexCard","parentElementKey":"element_block_0_0","property":{"cardName":"CON_ONTDetailsFromServicePoint","cardNode":"{record.servicePoint}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"ontNotAvailableInOrdereItem"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"solid","type":["border_top","border_right","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #cccccc 1px solid;border-right: #cccccc 1px solid;border-left: #cccccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"childCardPreview","elementLabel":"DeviceTaskBlockForONT","key":"element_element_block_0_0_childCardPreview_2_0","name":"FlexCard","parentElementKey":"element_block_0_0","property":{"cardName":"CON_NonONTDetailsFromOrderItemOrAsset","cardNode":"{record.deviceDetails}","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"0 0 5px 5px","style":"","type":["border_bottom","border_right","border_left"],"width":"1"},"class":"slds-border_bottom slds-border_right slds-border_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-bottom: #cccccc 1px solid;border-right: #cccccc 1px solid;border-left: #cccccc 1px solid; \n    border-radius:0 0 5px 5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"DeviceTaskBlock","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xxx-small ","container":{"class":""},"customClass":"","elementStyleProperties":{},"height":"","inlineStyle":"","margin":[],"maxHeight":"","minHeight":"","padding":[{"label":"around:xxx-small","size":"xxx-small","type":"around"}],"selectedStyles":"","size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""},"theme":""},"type":"block","userUpdatedElementLabel":true}]}},"conditions":{"group":[{"field":"nonServicePointONTDevice","id":"state-condition-5","operator":"==","type":"custom","value":"N/A"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"withoutNonServiceONT","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["CON_ONTDetailsFromServicePoint","CON_ONTDevicesFromOrderItemOrAsset","CON_NonONTDetailsFromOrderItemOrAsset"],"components":{"layer-0":{"children":[{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"DeviceTaskHeaderBlock","key":"element_element_element_block_0_1_block_0_1_outputField_0_1","name":"Text","parentElementKey":"element_element_block_0_1_block_0_1","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2014pt;%22%3E%3Cstrong%3EDevice%20Tasks%3C/strong%3E%3C/span%3E%3C/div%3E%0A%3Cdiv%3E%3Cspan%20style=%22background-color:%20initial;%20font-size:%200.8125rem;%22%3EYou%20must%20connect%20device%20prior%20to%20pressing%20install%20or%20replace.%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"6","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":[],"width":""},"class":" ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"DeviceTaskBlock-Block-1-Text-1","key":"element_element_element_block_0_1_block_0_1_outputField_1_1","name":"Text","parentElementKey":"element_element_block_0_1_block_0_1","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2012pt;%22%3ECustomer%20Since:%20%3Cstrong%3E%7BcustomerSinceDate%7D%3C/strong%3E%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"6","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"right","color":""}},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"DeviceTaskBlock-Block-0-clone-0","key":"element_element_block_0_1_block_0_1","name":"Block","parentElementKey":"element_block_0_1","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"#f3f2f2","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"5px 5px 0 0","style":"solid","type":["border_top","border_right","border_left"],"width":""},"class":"slds-border_top slds-border_right slds-border_left slds-p-vertical_small slds-p-horizontal_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:small","size":"small","type":"vertical"},{"label":"horizontal:medium","size":"medium","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#f3f2f2;     border-top: #cccccc 1px solid;border-right: #cccccc 1px solid;border-left: #cccccc 1px solid; \n    border-radius:5px 5px 0 0;     ","text":{"align":"","color":""}},"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"DeviceTaskBlockForONT","key":"element_element_block_0_1_childCardPreview_1_1","name":"FlexCard","parentElementKey":"element_block_0_1","property":{"cardName":"CON_ONTDetailsFromServicePoint","cardNode":"{record.servicePoint}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"ontNotAvailableInOrdereItem"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"solid","type":["border_top","border_right","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #cccccc 1px solid;border-right: #cccccc 1px solid;border-left: #cccccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"childCardPreview","elementLabel":"DeviceTaskBlock-FlexCard-2","key":"element_element_block_0_1_childCardPreview_2_1","name":"FlexCard","parentElementKey":"element_block_0_1","property":{"cardName":"CON_ONTDevicesFromOrderItemOrAsset","cardNode":"{record.nonServicePointONTDevice}","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"ontNotAvailableInOrdereItem"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":["border_right","border_left"],"width":"1"},"class":"slds-border_right slds-border_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-right: #cccccc 1px solid;border-left: #cccccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"DeviceTaskBlockForONT","key":"element_element_block_0_1_childCardPreview_3_1","name":"FlexCard","parentElementKey":"element_block_0_1","property":{"cardName":"CON_NonONTDetailsFromOrderItemOrAsset","cardNode":"{record.deviceDetails}","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"0 0 5px 5px","style":"","type":["border_bottom","border_right","border_left"],"width":"1"},"class":"slds-border_bottom slds-border_right slds-border_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-bottom: #cccccc 1px solid;border-right: #cccccc 1px solid;border-left: #cccccc 1px solid; \n    border-radius:0 0 5px 5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"DeviceTaskBlock","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xxx-small ","container":{"class":""},"customClass":"","elementStyleProperties":{},"height":"","inlineStyle":"","margin":[],"maxHeight":"","minHeight":"","padding":[{"label":"around:xxx-small","size":"xxx-small","type":"around"}],"selectedStyles":"","size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""},"theme":""},"type":"block","userUpdatedElementLabel":true}]}},"conditions":{"group":[{"field":"nonServicePointONTDevice","id":"state-condition-3","operator":"!=","type":"custom","value":"N/A"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"withNonServiceONT","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"CON_DeviceTask","xmlObject":{"apiVersion":48,"description":"Container for Device details for Device Task.","isExplicitImport":false,"isExposed":true,"masterLabel":"CON_DeviceTask","runtimeNamespace":"vlocity_cmt","targetConfigs":"PHRhcmdldENvbmZpZyB0YXJnZXRzPSJsaWdodG5pbmdfX0FwcFBhZ2UiPg0KICAgICAgPHByb3BlcnR5IG5hbWU9ImRlYnVnIiB0eXBlPSJCb29sZWFuIi8+DQogICAgICA8cHJvcGVydHkgbmFtZT0icmVjb3JkSWQiIHR5cGU9IlN0cmluZyIvPg0KICAgIDwvdGFyZ2V0Q29uZmlnPg0KICAgIDx0YXJnZXRDb25maWcgdGFyZ2V0cz0ibGlnaHRuaW5nX19SZWNvcmRQYWdlIj4NCiAgICAgIDxwcm9wZXJ0eSBuYW1lPSJkZWJ1ZyIgdHlwZT0iQm9vbGVhbiIvPg0KICAgIDwvdGFyZ2V0Q29uZmlnPg==","targets":{"target":["lightning__RecordPage","lightning__AppPage","lightning__HomePage"]}},"Id":"a5p8G00000000S9QAI","vlocity_cmt__GlobalKey__c":"CON_DeviceTask/GoogleFiber/12/1640360474123","vlocity_cmt__IsChildCard__c":false};
  export default definition