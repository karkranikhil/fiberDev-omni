let definition =
      {"dataSource":{"contextVariables":[{"id":19,"name":"recordId","val":"00Q0n000008FfcQEAS"}],"orderBy":{"isReverse":false,"name":""},"type":"DataRaptor","value":{"bundle":"LDM_ExtractLeadDetails","inputMap":{"Id":"{recordId}","accountId":"%accountId%"},"resultVar":""}},"enableLwc":true,"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfLDM_LeadActions_4_GoogleFiber","Id":"0Rb0n0000000cMjCAI","ManageableState":"unmanaged","MasterLabel":"cfLDM_LeadActions_4_GoogleFiber","NamespacePrefix":"c"},"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"displayIcon","key":"element_element_block_0_0_flexIcon_0_0","name":"Icon","parentElementKey":"element_block_0_0","property":{"extraclass":"slds-icon-standard-custom-notification","iconName":"standard:custom_notification","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"small","variant":"inverse"},"size":{"default":"0","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-right_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"right:xx-small","size":"xx-small","type":"right"}],"size":{"default":"0","isResponsive":false},"sizeClass":"slds-size_0-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"leadActions","key":"element_element_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cstrong%3E%3Cspan%20style=%22font-size:%2012pt;%22%3ELead%20Actions%3C/span%3E%3C/strong%3E%3C/div%3E","record":"{record}"},"size":{"default":"10","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-left_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:xx-small","size":"xx-small","type":"left"}],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"displayLeadActions","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"newTenant","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"displayAsButton":false,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"New Tenant","flyoutLwc":"l-d-m-tenant-lead-english","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1625220981880","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LDM/TenantLead/English","type":"Flyout","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #dddbda 1px solid;border-right: #dddbda 1px solid;border-bottom: #dddbda 1px solid;border-left: #dddbda 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"goToAccount","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"enableGoToAccount","id":"state-new-condition-11","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayAsButton":false,"hideActionIcon":false,"reRenderFlyout":true,"record":"{record}","stateAction":{"Record":{"targetAction":"view","targetId":"{accountId}","targetName":"Account"},"displayName":"Go To Account","hasExtraParams":true,"id":"flex-action-1627886437308","openUrlIn":"Current Window","targetType":"Record","type":"Custom","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #dddbda 1px solid;border-right: #dddbda 1px solid;border-bottom: #dddbda 1px solid;border-left: #dddbda 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"goToAccountDisabled","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"enableGoToAccount","id":"state-new-condition-2","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayAsButton":false,"iconOnly":false,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Go To Account","eventName":"notAvailable","hasExtraParams":true,"id":"flex-action-1627989060864","message":"notAvailable","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#c9c7c5","image":"","position":"","repeat":"","size":""},"border":{"color":"#c9c7c5","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"inlineStyle":"pointer-events: none;","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#c9c7c5;     border-top: #c9c7c5 1px solid;border-right: #c9c7c5 1px solid;border-bottom: #c9c7c5 1px solid;border-left: #c9c7c5 1px solid; \n    border-radius:5px;     pointer-events: none;","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"closeContactTicket","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"enableCloseContactInteraction","id":"state-new-condition-4","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayAsButton":false,"hideActionIcon":false,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Close Contact Ticket","flyoutLwc":"c-o-n-close-contact-ticket-with-lead-english","flyoutParams":{"ContextId":"{recordId}","eventId":"{id}","historyId":"{id}","leadId":"{recordId}","ticketIds":"{bugafiberTicketId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629441993823","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"CON/CloseContactTicketWithLead/English","type":"Flyout","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#ba0517","image":"","position":"","repeat":"","size":""},"border":{"color":"#ba0517","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#ba0517;     border-top: #ba0517 1px solid;border-right: #ba0517 1px solid;border-bottom: #ba0517 1px solid;border-left: #ba0517 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"createContactTicket","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"enableCloseContactInteraction","id":"state-new-condition-43","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayAsButton":false,"hideActionIcon":true,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Create Contact Ticket","flyoutLwc":"c-o-n-create-contact-ticket-with-lead-english","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629369183309","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"CON/CreateContactTicketWithLead/English","type":"Flyout","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #dddbda 1px solid;border-right: #dddbda 1px solid;border-bottom: #dddbda 1px solid;border-left: #dddbda 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"proofOfResidence","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"enableProofOfResidence","id":"state-new-condition-4","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"displayAsButton":false,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Proof of Residence","flyoutLwc":"l-d-m-proof-of-residence-english","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1626268194738","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LDM/ProofOfResidence/English","type":"Flyout","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #dddbda 1px solid;border-right: #dddbda 1px solid;border-bottom: #dddbda 1px solid;border-left: #dddbda 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"proofOfResidenceDisabled","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"enableProofOfResidence","id":"state-new-condition-45","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayAsButton":false,"iconOnly":false,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Proof of Residence","eventName":"notAvailable","hasExtraParams":true,"id":"flex-action-1627029372889","message":"notAvailable","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#c9c7c5","image":"","position":"","repeat":"","size":""},"border":{"color":"#c9c7c5","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"inlineStyle":"pointer-events: none;","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#c9c7c5;     border-top: #c9c7c5 1px solid;border-right: #c9c7c5 1px solid;border-bottom: #c9c7c5 1px solid;border-left: #c9c7c5 1px solid; \n    border-radius:5px;     pointer-events: none;","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"logIssue","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"displayAsButton":false,"hideActionIcon":true,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Log Issue","flyoutLwc":"c-o-n-log-issue-with-lead-english","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629879261972","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"CON/LogIssueWithLead/English","type":"Flyout","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #dddbda 1px solid;border-right: #dddbda 1px solid;border-bottom: #dddbda 1px solid;border-left: #dddbda 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"submitAddressReview","name":"Action","property":{"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"displayAsButton":false,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Submit an Address Review","flyoutLwc":"l-d-m-address-review-english","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1625746322201","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LDM/AddressReview/English","type":"Flyout","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","fontSize":"","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #dddbda 1px solid;border-right: #dddbda 1px solid;border-bottom: #dddbda 1px solid;border-left: #dddbda 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[{"language":"English","subtype":"TenantLead","type":"LDM"},{"language":"English","subtype":"CloseContactTicketWithLead","type":"CON"},{"language":"English","subtype":"CreateContactTicketWithLead","type":"CON"},{"language":"English","subtype":"ProofOfResidence","type":"LDM"},{"language":"English","subtype":"LogIssueWithLead","type":"CON"},{"language":"English","subtype":"AddressReview","type":"LDM"}],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"x-small","type":"bottom"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"LDM_LeadActions","xmlObject":{"apiVersion":48,"isExplicitImport":false,"masterLabel":"LDM_LeadActions","runtimeNamespace":"vlocity_cmt","targetConfigs":"PHRhcmdldENvbmZpZyB0YXJnZXRzPSJsaWdodG5pbmdfX0FwcFBhZ2UiPg0KICAgICAgPHByb3BlcnR5IG5hbWU9ImRlYnVnIiB0eXBlPSJCb29sZWFuIi8+DQogICAgICA8cHJvcGVydHkgbmFtZT0icmVjb3JkSWQiIHR5cGU9IlN0cmluZyIvPg0KICAgIDwvdGFyZ2V0Q29uZmlnPg0KICAgIDx0YXJnZXRDb25maWcgdGFyZ2V0cz0ibGlnaHRuaW5nX19SZWNvcmRQYWdlIj4NCiAgICAgIDxwcm9wZXJ0eSBuYW1lPSJkZWJ1ZyIgdHlwZT0iQm9vbGVhbiIvPg0KICAgIDwvdGFyZ2V0Q29uZmlnPg0KICAgIDx0YXJnZXRDb25maWcgeG1sbnM9IiIgdGFyZ2V0cz0ibGlnaHRuaW5nQ29tbXVuaXR5X19EZWZhdWx0Ij4NCiAgICAgIDxwcm9wZXJ0eSBuYW1lPSJyZWNvcmRJZCIgdHlwZT0iU3RyaW5nIi8+DQogICAgPC90YXJnZXRDb25maWc+","targets":{"target":["lightning__RecordPage","lightning__AppPage","lightning__HomePage","lightningCommunity__Page","lightningCommunity__Default"]}},"Id":"a5p8G00000000CUQAY","vlocity_cmt__GlobalKey__c":"LDM_LeadActions/GoogleFiber/4/1629296423400","vlocity_cmt__IsChildCard__c":false};
  export default definition