let definition =
      {"dataSource":{"contextVariables":[{"id":42,"name":"recordId","val":"x040n0000004ZXbAAM"}],"orderBy":{"isReverse":false,"name":""},"type":"DataRaptor","value":{"bundle":"TCK_ExtractOperationTicketDetails","inputMap":{"ticketId":"{recordId}"},"resultVar":""}},"enableLwc":true,"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfTCK_OperationTicketActions_7_GoogleFiber","Id":"0Rb0n0000000ilpCAA","ManageableState":"unmanaged","MasterLabel":"cfTCK_OperationTicketActions_7_GoogleFiber","NamespacePrefix":"c"},"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-0-Icon-0","key":"element_element_block_0_0_flexIcon_0_0","name":"Icon","parentElementKey":"element_block_0_0","property":{"extraclass":"slds-icon-standard-custom-notification","iconName":"standard:custom_notification","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"small","variant":"inverse"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Text-1","key":"element_element_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cstrong%3E%3Cspan%20style=%22font-size:%2012pt;%22%3ETicket%20Actions%3C/span%3E%3C/strong%3E%3C/div%3E","record":"{record}"},"size":{"default":"11","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"},{"class":"slds-col ","element":"action","elementLabel":"goToCSA","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"displayAsButton":false,"reRenderFlyout":true,"record":"{record}","stateAction":{"Web Page":{"targetName":"https://fiber-customer-support-staging.corp.google.com/fiber/BugafiberTicket?ticket_id={bugafiberId}"},"displayName":"Go To CSA","hasExtraParams":true,"id":"flex-action-1634887913538","openUrlIn":"New Tab/Window","targetType":"Web Page","type":"Custom","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #dddbda 1px solid;border-right: #dddbda 1px solid;border-bottom: #dddbda 1px solid;border-left: #dddbda 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"Action-3","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"displayAsButton":false,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Reschedule","flyoutLwc":"t-c-k-reschedule-appointment-english","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1634055715340","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"TCK/RescheduleAppointment/English","type":"Flyout","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #dddbda 1px solid;border-right: #dddbda 1px solid;border-bottom: #dddbda 1px solid;border-left: #dddbda 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-5","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"displayAsButton":false,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Close Work","flyoutLwc":"t-c-k-close-work-english","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629383748831","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"TCK/CloseWork/English","type":"Flyout","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #dddbda 1px solid;border-right: #dddbda 1px solid;border-bottom: #dddbda 1px solid;border-left: #dddbda 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-5-clone-0","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"displayAsButton":false,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Escalate Ticket","flyoutLwc":"t-c-k-escalate-service-english","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629978414721","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"TCK/EscalateService/English","type":"Flyout","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #dddbda 1px solid;border-right: #dddbda 1px solid;border-bottom: #dddbda 1px solid;border-left: #dddbda 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-5-clone-0","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"displayAsButton":false,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Cancel Ticket","flyoutLwc":"t-c-k-cancel-ticket-english","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1628606605990","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"TCK/CancelTicket/English","type":"Flyout","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-card slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":"slds-card"},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #dddbda 1px solid;border-right: #dddbda 1px solid;border-bottom: #dddbda 1px solid;border-left: #dddbda 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[{"language":"English","subtype":"RescheduleAppointment","type":"TCK"},{"language":"English","subtype":"CloseWork","type":"TCK"},{"language":"English","subtype":"EscalateService","type":"TCK"},{"language":"English","subtype":"CancelTicket","type":"TCK"}],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"x-small","type":"bottom"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"TCK_OperationTicketActions","xmlObject":{"apiVersion":48,"isExplicitImport":false,"masterLabel":"TCK_OperationTicketActions","runtimeNamespace":"vlocity_cmt","targetConfigs":"PHRhcmdldENvbmZpZyB0YXJnZXRzPSJsaWdodG5pbmdfX0FwcFBhZ2UiPg0KICAgICAgPHByb3BlcnR5IG5hbWU9ImRlYnVnIiB0eXBlPSJCb29sZWFuIi8+DQogICAgICA8cHJvcGVydHkgbmFtZT0icmVjb3JkSWQiIHR5cGU9IlN0cmluZyIvPg0KICAgIDwvdGFyZ2V0Q29uZmlnPg0KICAgIDx0YXJnZXRDb25maWcgdGFyZ2V0cz0ibGlnaHRuaW5nX19SZWNvcmRQYWdlIj4NCiAgICAgIDxwcm9wZXJ0eSBuYW1lPSJkZWJ1ZyIgdHlwZT0iQm9vbGVhbiIvPg0KICAgIDwvdGFyZ2V0Q29uZmlnPg0KICAgIDx0YXJnZXRDb25maWcgeG1sbnM9IiIgdGFyZ2V0cz0ibGlnaHRuaW5nQ29tbXVuaXR5X19EZWZhdWx0Ij4NCiAgICAgIDxwcm9wZXJ0eSBuYW1lPSJyZWNvcmRJZCIgdHlwZT0iU3RyaW5nIi8+DQogICAgPC90YXJnZXRDb25maWc+","targets":{"target":["lightning__RecordPage","lightning__AppPage","lightning__HomePage","lightningCommunity__Page","lightningCommunity__Default"]}},"Id":"a5p8G00000000H9QAI","vlocity_cmt__GlobalKey__c":"TCK_OperationTicketActions/GoogleFiber/7/1634656190501","vlocity_cmt__IsChildCard__c":false};
  export default definition