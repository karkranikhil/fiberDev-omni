let definition =
      {"dataSource":{"contextVariables":[{"id":15,"name":"recordId","val":"0010n00001CQn9FAAT"}],"orderBy":{"isReverse":false,"name":""},"type":"IntegrationProcedures","value":{"inputMap":{"accountId":"{recordId}"},"ipMethod":"CON_CustomerInfo","resultVar":"[\"accountResponse\"]","vlocityAsync":false}},"enableLwc":true,"globalCSS":false,"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfCON_CustomerDetails_6_GFiber","Id":"0Rb8G0000000A8ySAE","MasterLabel":"cfCON_CustomerDetails_6_GFiber","NamespacePrefix":"c","ManageableState":"unmanaged"},"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"},{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Block-0-Text-0","key":"element_element_element_block_1_0_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-heading_medium%22%3E%3Cstrong%3E%7BaccountName%7D.%3C/strong%3E%3C/div%3E","record":"{record}"},"size":{"default":"7","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"7","isResponsive":false},"sizeClass":"slds-size_7-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"text"},{"class":"slds-col ","element":"action","elementLabel":"Block-1-Block-0-Action-2","key":"element_element_element_block_1_0_block_0_0_action_1_0","name":"Action","parentElementKey":"element_element_block_1_0_block_0_0","property":{"buttonVariant":"brand","card":"{card}","displayAsButton":false,"iconColor":"#0176d3","iconOnly":false,"iconSize":"small","reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"","flyoutLwc":"c-o-n-custom-notifications-english","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1634807724647","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"CON/CustomNotifications/English","type":"Flyout","vlocityIcon":"utility:notification"},"stateObj":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-horizontal_small ","container":{"class":""},"elementStyleProperties":{"iconColor":"#0176d3","iconSize":"small"},"inlineStyle":"","margin":[],"padding":[{"label":"horizontal:small","size":"small","type":"horizontal"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Active-Status-Text","key":"element_element_element_element_block_1_0_block_0_0_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_element_element_block_1_0_block_0_0_block_1_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"asset.status","id":"state-new-condition-3","operator":"==","type":"custom","value":"Active"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%20class=%22slds-text-align_center%22%3EActive%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_success slds-text-align_right slds-badge","container":{"class":""},"customClass":"slds-badge","elementStyleProperties":{},"inlineStyle":"display:block;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             display:block;","text":{"align":"right","color":""},"theme":"theme_success"},"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"Inactive-Status-Text","key":"element_element_element_element_block_1_0_block_0_0_block_1_0_outputField_1_0","name":"Text","parentElementKey":"element_element_element_block_1_0_block_0_0_block_1_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"asset.status","id":"state-new-condition-12","operator":"==","type":"custom","value":"Inactive"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%20class=%22slds-text-align_center%22%3EInactive%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_error slds-text-align_right slds-badge","container":{"class":""},"customClass":"slds-badge","elementStyleProperties":{},"inlineStyle":"display:block;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             display:block;","text":{"align":"right","color":""},"theme":"theme_error"},"type":"text","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-0-Block-1","key":"element_element_element_block_1_0_block_0_0_block_2_0","name":"Block","parentElementKey":"element_element_block_1_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-0","key":"element_element_block_1_0_block_0_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":12,"isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":12,"isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Text-2","key":"element_element_element_block_1_0_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2010pt;%22%3E%7BaccountType%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"7","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-top_xxx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"font-size: 12px;","margin":[{"label":"top:xxx-small","size":"xxx-small","type":"top"}],"padding":[],"size":{"default":"7","isResponsive":false},"sizeClass":"slds-size_7-of-12 ","style":"             font-size: 12px;","text":{"align":"","color":""}},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Text-3","key":"element_element_element_block_1_0_block_1_0_outputField_1_0","name":"Text","parentElementKey":"element_element_block_1_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2010pt;%22%3E%7BaccountNumber%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"5","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-p-top_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"font-size: 12px;","margin":[],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"             font-size: 12px;","text":{"align":"right","color":""}},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-1","key":"element_element_block_1_0_block_1_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":12,"isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-top_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:small","size":"small","type":"top"}],"padding":[],"size":{"default":12,"isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Pin-Authentication-Block-Text-0","key":"element_element_element_block_1_0_block_2_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"history.isAuthorized","id":"state-new-condition-32","operator":"==","type":"custom","value":"true"},{"field":"history.eventEndDate","id":"state-new-condition-39","logicalOperator":"&&","operator":"==","type":"custom","value":"Not available"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3EAuthenticated%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":["border_top","border_right","border_bottom","border_left"],"width":""},"class":"slds-theme_success slds-text-align_center slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-color:#cccccc;        ","text":{"align":"center","color":""},"theme":"theme_success"},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Pin-Authentication-Block-Text-0-clone-5","key":"element_element_element_block_1_0_block_2_0_outputField_1_0","name":"Text","parentElementKey":"element_element_block_1_0_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"history.eventEndDate","id":"state-new-condition-57","operator":"!=","type":"custom","value":"Not available"},{"field":"history.eventEndDate","id":"state-new-condition-10","logicalOperator":"&&","operator":"!=","type":"custom","value":"null"},{"field":"history.eventEndDate","id":"state-new-condition-20","logicalOperator":"&&","operator":"!=","type":"custom","value":"undefined"},{"field":"history.eventEndDate","id":"state-new-condition-53","logicalOperator":"&&","operator":"!=","type":"custom","value":""},{"field":"history.isAuthorized","id":"state-new-condition-64","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3ENot%20Authenticated%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#ba0517","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":["border_top","border_right","border_bottom","border_left"],"width":""},"class":"slds-theme_default slds-text-align_center slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#ba0517;            color:#ffffff; ","text":{"align":"center","color":"#ffffff"},"theme":"theme_default"},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Pin-Authentication-Block-Text-1-clone-0","key":"element_element_element_block_1_0_block_2_0_outputField_2_0","name":"Text","parentElementKey":"element_element_block_1_0_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"history.eventEndDate","id":"state-new-condition-57","operator":"!=","type":"custom","value":"Not available"},{"field":"history.eventEndDate","id":"state-new-condition-91","logicalOperator":"&&","operator":"!=","type":"custom","value":"null"},{"field":"history.eventEndDate","id":"state-new-condition-101","logicalOperator":"&&","operator":"!=","type":"custom","value":"undefined"},{"field":"history.eventEndDate","id":"state-new-condition-114","logicalOperator":"&&","operator":"!=","type":"custom","value":""},{"field":"history.isAuthorized","id":"state-new-condition-130","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3ENot%20Authenticated%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#ba0517","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":["border_top","border_right","border_bottom","border_left"],"width":""},"class":"slds-theme_default slds-text-align_center slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#ba0517;            color:#ffffff; ","text":{"align":"center","color":"#ffffff"},"theme":"theme_default"},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Pin-Authentication-Block-Text-2-clone-0","key":"element_element_element_block_1_0_block_2_0_outputField_3_0","name":"Text","parentElementKey":"element_element_block_1_0_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"history.eventEndDate","id":"state-new-condition-57","operator":"==","type":"custom","value":"Not available"},{"field":"history.id","id":"state-new-condition-155","logicalOperator":"&&","operator":"==","type":"custom","value":"No Id"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3ENot%20Authenticated%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#ba0517","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":["border_top","border_right","border_bottom","border_left"],"width":""},"class":"slds-theme_default slds-text-align_center slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#ba0517;            color:#ffffff; ","text":{"align":"center","color":"#ffffff"},"theme":"theme_default"},"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Pin-Authentication-Block-Text-3-clone-0","key":"element_element_element_block_1_0_block_2_0_outputField_4_0","name":"Text","parentElementKey":"element_element_block_1_0_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"history.eventEndDate","id":"state-new-condition-57","operator":"==","type":"custom","value":"Not available"},{"field":"history.isAuthorized","id":"state-new-condition-155","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3ENot%20Authenticated%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#ba0517","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":["border_top","border_right","border_bottom","border_left"],"width":""},"class":"slds-theme_default slds-text-align_center slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#ba0517;            color:#ffffff; ","text":{"align":"center","color":"#ffffff"},"theme":"theme_default"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Pin-Authentication-Block","key":"element_element_block_1_0_block_2_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-vertical_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:xx-small","size":"xx-small","type":"vertical"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block","userUpdatedElementLabel":true},{"class":"slds-col ","element":"customLwc","elementLabel":"Block-1-Custom LWC-6","key":"element_element_block_1_0_customLwc_3_0","name":"Custom LWC","parentElementKey":"element_block_1_0","property":{"customlwcname":"locationDropdown","locationList":"{records}","recordId":"{recordId}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"solid","type":"border_bottom","width":"0"},"class":"slds-border_bottom slds-p-right_small slds-p-left_small slds-p-bottom_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"right:small","size":"small","type":"right"},{"label":"left:small","size":"small","type":"left"},{"label":"bottom:small","size":"small","type":"bottom"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-color:#cccccc; border-width:0px;  border-style:solid;     ","text":{"align":"","color":""}},"type":"block","userUpdatedElementLabel":true},{"children":[{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-2-Block-0-Action-0","key":"element_element_element_block_2_0_block_0_0_action_0_0","name":"Action","parentElementKey":"element_element_block_2_0_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"contactName","id":"state-new-condition-105","operator":"!=","type":"custom","value":"undefined"},{"field":"contactName","id":"state-new-condition-114","logicalOperator":"&&","operator":"!=","type":"custom","value":"null"},{"field":"contactName","id":"state-new-condition-130","logicalOperator":"&&","operator":"!=","type":"custom","value":""}],"id":"state-condition-object","isParent":true},"iconColor":"#dddbda","record":"{record}","stateAction":{"Record":{"targetAction":"view","targetId":"{contactId}","targetName":"Contact"},"displayName":"{contactName} (Primary Contact)","id":"flex-action-1625176712989","openUrlIn":"New Tab/Window","targetType":"Record","type":"Custom","vlocityIcon":"utility:user"},"stateObj":"{record}"},"size":{"default":"6","isResponsive":true,"large":"7","medium":"6","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":[],"width":""},"class":" slds-p-top_small ","container":{"class":""},"elementStyleProperties":{"iconColor":"#dddbda"},"inlineStyle":"font-size: 12px;","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"6","isResponsive":true,"large":"7","medium":"6","small":"6"},"sizeClass":"slds-large-size_7-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_6-of-12 ","style":"     border-color:#cccccc;       color:#1589ee; font-size: 12px;","text":{"align":"","color":"#1589ee"}},"type":"element"},{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-2-Block-0-Block-1-Icon-0","key":"element_element_element_element_block_2_0_block_0_0_block_1_0_flexIcon_0_0","name":"Icon","parentElementKey":"element_element_element_block_2_0_block_0_0_block_1_0","property":{"extraclass":"slds-icon slds-icon-text-warning","iconName":"utility:priority","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"small","variant":"default"},"size":{"default":"2","isResponsive":true,"large":"1","medium":"2","small":"2"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":true,"large":"1","medium":"2","small":"2"},"sizeClass":"slds-large-size_1-of-12 slds-medium-size_2-of-12 slds-small-size_2-of-12 slds-size_2-of-12 ","style":"             ","text":{"align":"right","color":""}},"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Block-0-Block-1-Text-1","key":"element_element_element_element_block_2_0_block_0_0_block_1_0_outputField_1_0","name":"Text","parentElementKey":"element_element_element_block_2_0_block_0_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cstrong%3E%3Cspan%20style=%22font-size:%2010pt;%22%3EDisabled%3C/span%3E%3C/strong%3E%3C/div%3E","record":"{record}"},"size":{"default":"1","isResponsive":true,"large":"10","medium":"1","small":"1"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":true,"large":"10","medium":"1","small":"1"},"sizeClass":"slds-large-size_10-of-12 slds-medium-size_1-of-12 slds-small-size_1-of-12 slds-size_1-of-12 ","style":"            color:#BC211D; ","text":{"align":"","color":"#BC211D"}},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-0-Block-1","key":"element_element_element_block_2_0_block_0_0_block_1_0","name":"Block","parentElementKey":"element_element_block_2_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"disabled","id":"state-new-condition-9","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"6","isResponsive":true,"large":"5","medium":"6","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-p-top_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"font-size: 12px;","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"6","isResponsive":true,"large":"5","medium":"6","small":"6"},"sizeClass":"slds-large-size_5-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_6-of-12 ","style":"             font-size: 12px;","text":{"align":"right","color":""}},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-0","key":"element_element_block_2_0_block_0_0","name":"Block","parentElementKey":"element_block_2_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"border_top","width":"1"},"class":"slds-border_top slds-p-top_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     border-color:#cccccc; border-width:1px;       ","text":{"align":"","color":""}},"type":"block"},{"class":"slds-col ","element":"action","elementLabel":"Block-2-Action-4","key":"element_element_block_2_0_action_1_0","name":"Action","parentElementKey":"element_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"contactHomePhone","id":"state-new-condition-5","operator":"!=","type":"custom","value":"undefined"},{"field":"contactHomePhone","id":"state-new-condition-44","logicalOperator":"&&","operator":"!=","type":"custom","value":"null"},{"field":"contactHomePhone","id":"state-new-condition-57","logicalOperator":"&&","operator":"!=","type":"custom","value":""}],"id":"state-condition-object","isParent":true},"iconColor":"#dddbda","record":"{record}","stateAction":{"Record":{"targetAction":"view","targetId":"{contactId}","targetName":"contact"},"displayName":"{contactHomePhone} (Mobile)","id":"flex-action-1625231796662","openUrlIn":"Current Window","targetType":"Record","type":"Custom","vlocityIcon":"utility:call"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{"iconColor":"#dddbda"},"inlineStyle":"font-size: 12px;pointer-events: none;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"            color:#1589ee; font-size: 12px;pointer-events: none;","text":{"align":"","color":"#1589ee"}},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-2-Action-5","key":"element_element_block_2_0_action_2_0","name":"Action","parentElementKey":"element_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"contactMobilePhone","id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"},{"field":"contactMobilePhone","id":"state-new-condition-20","logicalOperator":"&&","operator":"!=","type":"custom","value":"null"},{"field":"contactMobilePhone","id":"state-new-condition-32","logicalOperator":"&&","operator":"!=","type":"custom","value":""}],"id":"state-condition-object","isParent":true},"iconColor":"#dddbda","record":"{record}","stateAction":{"Record":{"targetAction":"view","targetId":"{contactId}","targetName":"contact"},"displayName":"{contactMobilePhone} (Business)","id":"flex-action-1625231813929","openUrlIn":"Current Window","targetType":"Record","type":"Custom","vlocityIcon":"utility:call"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{"iconColor":"#dddbda"},"inlineStyle":"font-size: 12px;pointer-events: none;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"            color:#1589ee; font-size: 12px;pointer-events: none;","text":{"align":"","color":"#1589ee"}},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-2-Action-6","key":"element_element_block_2_0_action_3_0","name":"Action","parentElementKey":"element_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"contactEmail","id":"state-new-condition-70","operator":"!=","type":"custom","value":"undefined"},{"field":"contactEmail","id":"state-new-condition-79","logicalOperator":"&&","operator":"!=","type":"custom","value":"null"},{"field":"contactEmail","id":"state-new-condition-92","logicalOperator":"&&","operator":"!=","type":"custom","value":""}],"id":"state-condition-object","isParent":true},"iconColor":"#dddbda","isTrackingDisabled":true,"reRenderFlyout":true,"record":"{record}","stateAction":{"displayName":"{contactEmail}","flyoutLwc":"sendEmail","flyoutParams":{"recordId":"{recordId}"},"flyoutType":"customLwc","hasExtraParams":true,"id":"flex-action-1633515100085","openFlyoutIn":"Modal","openUrlIn":"New Tab/Window","type":"Flyout","vlocityIcon":"utility:email"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{"iconColor":"#dddbda"},"inlineStyle":"font-size: 12px;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n        color:#1589ee; font-size: 12px;","text":{"align":"","color":"#1589ee"}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"border_top","width":"0"},"class":"slds-border_top slds-p-horizontal_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"horizontal:small","size":"small","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-color:#cccccc; border-width:0px;       ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-4-Action-0","key":"element_element_block_3_0_action_0_0","name":"Action","parentElementKey":"element_block_3_0","property":{"card":"{card}","hideActionIcon":true,"record":"{record}","stateAction":{"Record Relationship":{"targetAction":"view","targetId":"{recordId}","targetName":"Contacts","targetRelationship":"Contacts"},"displayName":"View all contacts","id":"flex-action-1620216466008","openUrlIn":"New Tab/Window","targetType":"Record Relationship","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"","style":"","type":"border_top","width":"1"},"class":"slds-border_top slds-p-top_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"font-size: 12px;","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-color:#dddbda; border-width:1px;      color:#1589ee; font-size: 12px;","text":{"align":"","color":"#1589ee"}},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Account-Hierarchy-Action","key":"element_element_block_3_0_action_1_0","name":"Action","parentElementKey":"element_block_3_0","property":{"card":"{card}","hideActionIcon":false,"record":"{record}","stateAction":{"Record Relationship":{"targetAction":"view","targetId":"{recordId}","targetName":"Account","targetRelationship":"vlocity_cmt__Accounts__r"},"displayName":"View all locations","id":"flex-action-1624522722369","openUrlIn":"New Tab/Window","targetType":"Record Relationship","type":"Custom","vlocityIcon":""},"stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"font-size: 12px;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"            color:#1589ee; font-size: 12px;","text":{"align":"","color":"#1589ee"}},"type":"element","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"Block-3","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":[],"width":"0"},"class":" slds-p-right_small slds-p-left_small slds-p-bottom_xxx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"right:small","size":"small","type":"right"},{"label":"left:small","size":"small","type":"left"},{"label":"bottom:xxx-small","size":"xxx-small","type":"bottom"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-color:#cccccc; border-width:0px;       ","text":{"align":"","color":""}},"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[{"language":"English","subtype":"CustomNotifications","type":"CON"}],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"x-small","type":"bottom"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"CON_CustomerDetails","Id":"a5p8G00000000HPQAY","vlocity_cmt__GlobalKey__c":"CON_CustomerDetails/GFiber/6/1634807188876","vlocity_cmt__IsChildCard__c":false};
  export default definition