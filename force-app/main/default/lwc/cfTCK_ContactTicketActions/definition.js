let definition =
      {"dataSource":{"contextVariables":[{"id":2,"name":"recordId","val":"a760n000000qTVvAAM"}],"orderBy":{"isReverse":false,"name":""},"type":"DataRaptor","value":{"bundle":"TCK_ExtractHistoryEventDetails","inputMap":{"historyEventId":"{recordId}"},"resultVar":""}},"enableLwc":true,"isFlex":true,"lwc":{"DeveloperName":"cfTCK_ContactTicketActions_4_Google_Fiber","Id":"0Rb0n000000916ICAQ","ManageableState":"unmanaged","MasterLabel":"cfTCK_ContactTicketActions_4_Google_Fiber","NamespacePrefix":"c"},"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"displayContactTicketActions-Icon-0","key":"element_element_block_0_0_flexIcon_0_0","name":"Icon","parentElementKey":"element_block_0_0","property":{"extraclass":"slds-icon_container slds-icon-custom-custom9 ","iconName":"custom:custom9","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"small","variant":"inverse"},"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-right_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"right:x-small","size":"x-small","type":"right"}],"size":{"default":"1","isResponsive":true,"large":"1","medium":"1","small":"1"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_1-of-12 slds-small-size_1-of-12 slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"displayContactTicketActions-Text-1","key":"element_element_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2014pt;%22%3E%3Cstrong%3ETicket%20Actions%3C/strong%3E%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"11","isResponsive":false},"stateIndex":0,"styleObject":{"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 "},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"displayContactTicketActions","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"action","elementLabel":"updateTicket","key":"element_element_block_1_0_action_0_0","name":"Action","parentElementKey":"element_block_1_0","property":{"card":"{card}","hideActionIcon":false,"record":"{record}","stateAction":{"displayName":"Update Ticket","flyoutLwc":"t-c-k-update-contact-ticket-english","flyoutParams":{"historyEventId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1635437531156","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"TCK/UpdateContactTicket/English","type":"Flyout","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#0176d3","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #0176d3 1px solid;border-right: #0176d3 1px solid;border-bottom: #0176d3 1px solid;border-left: #0176d3 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"goToCSA","key":"element_element_block_1_0_action_1_0","name":"Action","parentElementKey":"element_block_1_0","property":{"card":"{card}","hideActionIcon":false,"record":"{record}","stateAction":{"Web Page":{"targetName":"https://fiber-customer-support-staging.corp.google.com/fiber/BugafiberTicket?ticket_id={bugafiberTicketId}"},"displayName":"Go To CSA","hasExtraParams":true,"id":"flex-action-1635160319543","openUrlIn":"New Tab/Window","targetType":"Web Page","type":"Custom","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#0176d3","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #0176d3 1px solid;border-right: #0176d3 1px solid;border-bottom: #0176d3 1px solid;border-left: #0176d3 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"closeTicket","key":"element_element_block_1_0_action_2_0","name":"Action","parentElementKey":"element_block_1_0","property":{"card":"{card}","reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Close Ticket","flyoutLwc":"c-o-n-close-interactions-english","flyoutParams":{"historyEventId":"{recordId}","isHistoryEvent":"true"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1635862568719","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"CON/CloseInteractions/English","type":"Flyout","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"#ba0517","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"background-color:#ba0517;     border-top: #cccccc 1px solid;border-right: #cccccc 1px solid;border-bottom: #cccccc 1px solid;border-left: #cccccc 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"logIssue","key":"element_element_block_1_0_action_3_0","name":"Action","parentElementKey":"element_block_1_0","property":{"buttonVariant":"neutral","card":"{card}","displayAsButton":false,"hideActionIcon":true,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"Log Issue","flyoutLwc":"c-o-n-log-issue-with-history-event-english","flyoutParams":{"historyEventId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1631531566369","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"CON/LogIssueWithHistoryEvent/English","type":"Flyout","vlocityIcon":"standard-default"},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#0176d3","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #0176d3 1px solid;border-right: #0176d3 1px solid;border-bottom: #0176d3 1px solid;border-left: #0176d3 1px solid; \n    border-radius:5px;    color:#000000; ","text":{"align":"","color":"#000000"}},"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"launchCustomerSearch","key":"element_element_block_1_0_action_4_0","name":"Action","parentElementKey":"element_block_1_0","property":{"card":"{card}","contextId":"\\{recordId}","displayAsButton":false,"hideActionIcon":true,"record":"{record}","stateAction":{"displayName":"Launch Customer Search","extraParams":{"historyEventId":"recordId"},"hasExtraParams":true,"id":"flex-action-1635760329592","isLwcOS":true,"layoutType":"lightning","omniType":{"Id":"a3N0n0000002AFmEAM","Name":"ADR/CustomerSearch/English","isLwcOs":true},"openUrlIn":"New Tab/Window","type":"OmniScript","vlocityIcon":"standard-default"},"stateObj":"{record}","styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"#0176d3","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_xx-small slds-m-bottom_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#ffffff","textAlign":"center"}}},"inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"background-color:#0176d3;     border-top: #cccccc 1px solid;border-right: #cccccc 1px solid;border-bottom: #cccccc 1px solid;border-left: #cccccc 1px solid; \n    border-radius:5px;     ","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"listOfActions","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block","userUpdatedElementLabel":true}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[{"language":"English","subtype":"UpdateContactTicket","type":"TCK"},{"language":"English","subtype":"CloseInteractions","type":"CON"},{"language":"English","subtype":"LogIssueWithHistoryEvent","type":"CON"},{"language":"English","subtype":"CustomerSearch","type":"ADR"}],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"x-small","type":"bottom"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"TCK_ContactTicketActions","Id":"a5p8G00000000HFQAY","vlocity_cmt__GlobalKey__c":"TCK_ContactTicketActions/Google_Fiber/4/1635436808434","vlocity_cmt__IsChildCard__c":false};
  export default definition