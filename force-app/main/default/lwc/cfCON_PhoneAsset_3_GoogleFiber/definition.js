let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[{"actionData":{"card":"{card}","stateAction":{"eventName":"updatedatasource","fieldValues":[{"fieldName":"locationname","fieldValue":"{action.locationnamedata}"},{"fieldName":"locationid","fieldValue":"{action.locationiddata}"}],"id":"flex-action-1628765368039","message":"{\"type\":\"IntegrationProcedures\",\"value\":{\"resultVar\":\"[\\\"parentAsset\\\"]\",\"ipMethod\":\"CON_GetAssetDetails\",\"vlocityAsync\":false,\"inputMap\":{\"accountId\":\"{action.serviceAccountId}\",\"type\":\"Phone\"}},\"orderBy\":{\"name\":\"\",\"isReverse\":false},\"contextVariables\":[{\"name\":\"action.serviceAccountId\",\"val\":\"0010n00001EdjkaAAB\",\"id\":4}]}","type":"cardAction"}},"channelname":"serviceAccountChannel","displayLabel":"serviceAccountChannel:service_account_channel","element":"action","eventLabel":"pubsub","eventname":"service_account_channel","eventtype":"pubsub","key":"event-0","recordIndex":""}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCON_PhoneAsset_3_GoogleFiber","Id":"0Rb0n0000000edICAQ","ManageableState":"unmanaged","MasterLabel":"cfCON_PhoneAsset_3_GoogleFiber","NamespacePrefix":"c"},"states":[{"actions":[],"blankCardState":false,"childCards":["CON_PhoneChild"],"components":{"layer-0":{"children":[{"children":[{"children":[{"children":[{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-0-Block-0-Block-0-Block-1-Icon-0","key":"element_element_element_element_element_block_0_0_block_0_0_block_0_0_block_0_0_flexIcon_0_0","name":"Icon","parentElementKey":"element_element_element_element_block_0_0_block_0_0_block_0_0_block_0_0","property":{"color":"#1589ee","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"extraclass":"","iconName":"custom:custom22","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"large","variant":"default"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{"color":"#1589ee"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-0-Block-0-Block-1-Text-3","key":"element_element_element_element_element_block_0_0_block_0_0_block_0_0_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_element_element_element_block_0_0_block_0_0_block_0_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E%7BparentName%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"10","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-vertical_small slds-p-left_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:small","size":"small","type":"vertical"},{"label":"left:small","size":"small","type":"left"}],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-0-Block-0-Block-1","key":"element_element_element_element_block_0_0_block_0_0_block_0_0_block_0_0","name":"Block","parentElementKey":"element_element_element_block_0_0_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"8","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"8","isResponsive":false},"sizeClass":"slds-size_8-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"slds-col ","element":"flexMenu","elementLabel":"Block-0-Block-0-Block-0-Block-4-Menu-0","key":"element_element_element_element_element_block_0_0_block_0_0_block_0_0_block_1_0_flexMenu_0_0","name":"Menu","parentElementKey":"element_element_element_element_block_0_0_block_0_0_block_0_0_block_1_0","property":{"card":"{card}","iconColor":"#0176D3","iconName":"utility:down","iconPosition":"right","iconSize":"xx-small","label":"Options","menuItems":[{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Remove Service","id":"flex-action-1624437359022","openUrlIn":"Current Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":""},"stateObj":"{record}"},"iconName":"","iconPosition":"","label":"Remove Service","name":"menu-item-0-0"}],"overflow":true,"position":"right","record":"{record}","size":"xx-small","styles":{"label":{"color":"#0176D3","fontSize":""}},"type":"action","variant":"neutral"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-icon_container  slds-current-color","container":{"class":"slds-icon_container "},"customClass":"slds-current-color","elementStyleProperties":{"iconColor":"#0176D3","styles":{"label":{"color":"#0176D3","fontSize":""}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"right","color":""}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-0-Block-0-Block-4","key":"element_element_element_element_block_0_0_block_0_0_block_0_0_block_1_0","name":"Block","parentElementKey":"element_element_element_block_0_0_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_x-small slds-p-right_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"right:x-small","size":"x-small","type":"right"}],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Heading-Block","key":"element_element_element_block_0_0_block_0_0_block_0_0","name":"Block","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#fafaf9","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"5px","style":"","type":"","width":"0"},"class":"slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#fafaf9;     border-color:#cccccc; border-width:0px; border-radius:5px;      ","text":{"align":"","color":""}},"type":"block","userUpdatedElementLabel":true},{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Status-Text","key":"element_element_element_element_element_block_0_0_block_0_0_block_1_0_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_element_element_element_block_0_0_block_0_0_block_1_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3EStatus%3C/div%3E","record":"{record}"},"size":{"default":"7","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"7","isResponsive":false},"sizeClass":"slds-size_7-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"Status-Value-Text","key":"element_element_element_element_element_block_0_0_block_0_0_block_1_0_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_element_element_element_block_0_0_block_0_0_block_1_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22color:%20#2dc26b;%22%3E%3Cspan%20style=%22font-size:%2010pt;%22%3E%E2%97%8F%20%3Cspan%20style=%22color:%20#080707;%22%3E%7Bstatus%7D%3C/span%3E%3C/span%3E%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"5","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"             ","text":{"align":"right","color":""}},"type":"text","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"Status-Block","key":"element_element_element_element_block_0_0_block_0_0_block_1_0_block_0_0","name":"Block","parentElementKey":"element_element_element_block_0_0_block_0_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xxx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xxx-small","size":"xxx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block","userUpdatedElementLabel":true},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-0-Block-1-Block-1-FlexCard-1","key":"element_element_element_element_block_0_0_block_0_0_block_1_0_childCardPreview_1_0","name":"FlexCard","parentElementKey":"element_element_element_block_0_0_block_0_0_block_1_0","property":{"cardName":"CON_PhoneChild","cardNode":"{record.childAsset}","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"View-Record-Action","key":"element_element_element_element_element_block_0_0_block_0_0_block_1_0_block_2_0_action_0_0","name":"Action","parentElementKey":"element_element_element_element_block_0_0_block_0_0_block_1_0_block_2_0","property":{"card":"{card}","hideActionIcon":true,"record":"{record}","stateAction":{"Record":{"targetAction":"view","targetId":"{id}","targetName":"Asset"},"displayName":"View Record","id":"flex-action-1626244405721","openUrlIn":"New Tab/Window","targetType":"Record","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}","styles":{"label":{"color":"#0176d3"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#0176d3"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"View-Record-Action-Block","key":"element_element_element_element_block_0_0_block_0_0_block_1_0_block_2_0","name":"Block","parentElementKey":"element_element_element_block_0_0_block_0_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_x-small slds-p-horizontal_xxx-small slds-border_top","container":{"class":""},"customClass":"slds-border_top","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"horizontal:xxx-small","size":"xxx-small","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-1-Block-1","key":"element_element_element_block_0_0_block_0_0_block_1_0","name":"Block","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-1","key":"element_element_block_0_0_block_0_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#f3f2f2","radius":"5px","style":"solid","type":"","width":"1"},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"box-shadow: 0 8px 6px -6px lightgrey;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-size_12-of-12 ","style":"     border-color:#f3f2f2; border-width:1px; border-radius:5px; border-style:solid;     box-shadow: 0 8px 6px -6px lightgrey;","text":{"align":"","color":""}},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"height":"","inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-size_12-of-12 ","style":"     border-color:#cccccc;        ","text":{"align":"","color":""}},"type":"block"}]}},"conditions":{"group":[{"field":"status","id":"state-condition-3","operator":"==","type":"custom","value":"Active"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_default slds-card slds-grid slds-p-around_x-small slds-m-bottom_x-small ","container":{"class":"slds-card slds-grid"},"customClass":"","elementStyleProperties":{},"height":"","inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""},"theme":"theme_default"}},{"actions":[],"blankCardState":false,"childCards":["CON_PhoneChild"],"components":{"layer-0":{"children":[{"children":[{"children":[{"children":[{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-0-Block-0-Block-0-Block-1-Icon-0","key":"element_element_element_element_element_block_0_0_block_0_0_block_0_0_block_0_0_flexIcon_0_0","name":"Icon","parentElementKey":"element_element_element_element_block_0_0_block_0_0_block_0_0_block_0_0","property":{"color":"#1589ee","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"extraclass":"","iconName":"custom:custom22","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"large","variant":"default"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{"color":"#1589ee"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-0-Block-0-Block-1-Text-3","key":"element_element_element_element_element_block_0_0_block_0_0_block_0_0_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_element_element_element_block_0_0_block_0_0_block_0_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E%7BparentName%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"10","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-vertical_small slds-p-left_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"vertical:small","size":"small","type":"vertical"},{"label":"left:small","size":"small","type":"left"}],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-0-Block-0-Block-1","key":"element_element_element_element_block_0_0_block_0_0_block_0_0_block_0_0","name":"Block","parentElementKey":"element_element_element_block_0_0_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"8","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"8","isResponsive":false},"sizeClass":"slds-size_8-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"slds-col ","element":"flexMenu","elementLabel":"Block-0-Block-0-Block-0-Block-4-Menu-0","key":"element_element_element_element_element_block_0_0_block_0_0_block_0_0_block_1_0_flexMenu_0_0","name":"Menu","parentElementKey":"element_element_element_element_block_0_0_block_0_0_block_0_0_block_1_0","property":{"card":"{card}","iconColor":"#0176D3","iconName":"utility:down","iconPosition":"right","iconSize":"xx-small","label":"Options","menuItems":[{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Remove Service","id":"flex-action-1624437359022","openUrlIn":"Current Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":""},"stateObj":"{record}"},"iconName":"","iconPosition":"","label":"Remove Service","name":"menu-item-0-0"}],"overflow":true,"position":"right","record":"{record}","size":"xx-small","styles":{"label":{"color":"#0176D3","fontSize":""}},"type":"action","variant":"neutral"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right slds-icon_container  slds-current-color","container":{"class":"slds-icon_container "},"customClass":"slds-current-color","elementStyleProperties":{"iconColor":"#0176D3","styles":{"label":{"color":"#0176D3","fontSize":""}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"right","color":""}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-0-Block-0-Block-4","key":"element_element_element_element_block_0_0_block_0_0_block_0_0_block_1_0","name":"Block","parentElementKey":"element_element_element_block_0_0_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_x-small slds-p-right_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"right:x-small","size":"x-small","type":"right"}],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Heading-Block","key":"element_element_element_block_0_1_block_0_1_block_0_1","name":"Block","parentElementKey":"element_element_block_0_1_block_0_1","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"#fafaf9","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"5px","style":"","type":"","width":"0"},"class":"slds-p-around_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xx-small","size":"xx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#fafaf9;     border-color:#cccccc; border-width:0px; border-radius:5px;      ","text":{"align":"","color":""}},"type":"block","userUpdatedElementLabel":true},{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Status-Text","key":"element_element_element_element_element_block_0_1_block_0_1_block_1_1_block_0_1_outputField_0_1","name":"Text","parentElementKey":"element_element_element_element_block_0_1_block_0_1_block_1_1_block_0_1","property":{"card":"{card}","mergeField":"%3Cdiv%3EStatus%3C/div%3E","record":"{record}"},"size":{"default":"7","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"7","isResponsive":false},"sizeClass":"slds-size_7-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"Status-Value-Text","key":"element_element_element_element_element_block_0_1_block_0_1_block_1_1_block_0_1_outputField_1_1","name":"Text","parentElementKey":"element_element_element_element_block_0_1_block_0_1_block_1_1_block_0_1","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22color:%20#2dc26b;%22%3E%3Cspan%20style=%22font-size:%2010pt;%22%3E%3Cspan%20style=%22color:%20#f1c40f;%22%3E%E2%97%8F%20%3C/span%3E%3Cspan%20style=%22color:%20#080707;%22%3E%7Bstatus%7D%3C/span%3E%3C/span%3E%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"5","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"             ","text":{"align":"right","color":""}},"type":"text","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"Status-Block","key":"element_element_element_element_block_0_1_block_0_1_block_1_1_block_0_1","name":"Block","parentElementKey":"element_element_element_block_0_1_block_0_1_block_1_1","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xxx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xxx-small","size":"xxx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block","userUpdatedElementLabel":true},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-0-Block-1-Block-1-FlexCard-1","key":"element_element_element_element_block_0_1_block_0_1_block_1_1_childCardPreview_1_1","name":"FlexCard","parentElementKey":"element_element_element_block_0_1_block_0_1_block_1_1","property":{"cardName":"CON_PhoneChild","cardNode":"{record.childAsset}","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"View-Record-Action","key":"element_element_element_element_element_block_0_0_block_0_0_block_1_0_block_2_0_action_0_0","name":"Action","parentElementKey":"element_element_element_element_block_0_0_block_0_0_block_1_0_block_2_0","property":{"card":"{card}","hideActionIcon":true,"record":"{record}","stateAction":{"Record":{"targetAction":"view","targetId":"{id}","targetName":"Asset"},"displayName":"View Record","id":"flex-action-1626244405721","openUrlIn":"New Tab/Window","targetType":"Record","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}","styles":{"label":{"color":"#0176d3"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#0176d3"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12","text":{"align":"","color":""}},"type":"element","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"View-Record-Action-Block","key":"element_element_element_element_block_0_1_block_0_1_block_1_1_block_2_1","name":"Block","parentElementKey":"element_element_element_block_0_1_block_0_1_block_1_1","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_x-small slds-p-horizontal_xxx-small slds-border_top","container":{"class":""},"customClass":"slds-border_top","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"horizontal:xxx-small","size":"xxx-small","type":"horizontal"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-1-Block-1","key":"element_element_element_block_0_1_block_0_1_block_1_1","name":"Block","parentElementKey":"element_element_block_0_1_block_0_1","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-1","key":"element_element_block_0_1_block_0_1","name":"Block","parentElementKey":"element_block_0_1","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#f3f2f2","radius":"5px","style":"solid","type":"","width":"1"},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"box-shadow: 0 8px 6px -6px lightgrey;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-size_12-of-12 ","style":"     border-color:#f3f2f2; border-width:1px; border-radius:5px; border-style:solid;     box-shadow: 0 8px 6px -6px lightgrey;","text":{"align":"","color":""}},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"height":"","inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-size_12-of-12 ","style":"     border-color:#cccccc;        ","text":{"align":"","color":""}},"type":"block"}]}},"conditions":{"group":[{"field":"status","id":"state-condition-3","operator":"==","type":"custom","value":"Suspended"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Suspended","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-theme_default slds-card slds-grid slds-p-around_x-small slds-m-bottom_x-small ","container":{"class":"slds-card slds-grid"},"customClass":"","elementStyleProperties":{},"height":"","inlineStyle":"","margin":[{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""},"theme":"theme_default"}},{"actions":[],"blankCardState":true,"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","key":"element_element_block_0_1_outputField_0_1","name":"Text","parentElementKey":"element_block_0_1","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2010pt;%22%3ENo%20phone%20service.%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#dddbda","radius":"5px","style":"solid","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"box-shadow: lightgrey 0px 8px 6px -6px;","margin":[],"minHeight":"","padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-color:#dddbda; border-width:1px; border-radius:5px; border-style:solid;     box-shadow: lightgrey 0px 8px 6px -6px;","text":{"align":"","color":""}},"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"fields":[],"isSmartAction":false,"name":"Blank","omniscripts":[],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"none","type":"around"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"CON_PhoneAsset","tracking":{"businessCategory":""},"Id":"a5p8G00000000B2QAI","vlocity_cmt__GlobalKey__c":"CON_PhoneAsset/GoogleFiber/3/1630940367144","vlocity_cmt__IsChildCard__c":true};
  export default definition