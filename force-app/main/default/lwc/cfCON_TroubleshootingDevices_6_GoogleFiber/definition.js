let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[{"id":"state-condition-48","field":"serialNumber","operator":"!=","value":"N/A","type":"custom"},{"id":"state-new-condition-127","field":"lastAcsCheckInTime","operator":"!=","value":"N/A","type":"custom","logicalOperator":"||"}]},"definedActions":{"actions":[]},"name":"Active","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"around","size":"x-small"}],"margin":[{"type":"bottom","size":"x-small"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12","class":"slds-card slds-p-around_x-small slds-m-bottom_x-small"},"components":{"layer-0":{"children":[{"name":"FlexCard","element":"childCardPreview","size":{"isResponsive":true,"default":"12","large":"12","medium":"3","small":"12"},"stateIndex":0,"class":"slds-col ","property":{"cardName":"CON_TroubleshootingDeviceInformation","recordId":"{recordId}","cardNode":"{records}","selectedState":"Active","isChildCardTrackingEnabled":false},"type":"element","styleObject":{"sizeClass":"slds-large-size_12-of-12  slds-medium-size_3-of-12  slds-small-size_12-of-12  slds-size_12-of-12 ","size":{"isResponsive":true,"default":"12","large":"12","medium":"3","small":"12"},"padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"container":{"class":""},"border":{"type":[],"width":"","color":"#cccccc","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","class":" ","style":"      \n         "},"elementLabel":"FlexCard-0"}]}},"childCards":["CON_TroubleshootingDeviceInformation"],"actions":[],"omniscripts":[],"documents":[]},{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"definedActions":{"actions":[]},"name":"notAvailable","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"around","size":"x-small"}],"margin":[{"type":"bottom","size":"x-small"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12","class":"slds-card slds-p-around_x-small slds-m-bottom_x-small"},"components":{"layer-0":{"children":[{"name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":1,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-align_center%22%3ENo%20devices%20available%20to%20troubleshoot%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12"},"elementLabel":"Text-0"}]}},"childCards":[],"actions":[],"omniscripts":[],"documents":[],"blankCardState":true}],"dataSource":{"type":null,"value":{},"orderBy":{},"contextVariables":[{"name":"recordId","val":"0018G000008yrwW","id":1}]},"title":"CON_TroubleshootingDevices","enableLwc":true,"isFlex":true,"theme":"slds","lwc":{"DeveloperName":"cfCON_TroubleshootingDevices_5_GoogleFiber","Id":"0Rb8G0000000FGYSA2","MasterLabel":"cfCON_TroubleshootingDevices_5_GoogleFiber","NamespacePrefix":"c","ManageableState":"unmanaged"},"osSupport":true,"isRepeatable":false,"xmlObject":{"apiVersion":48,"isExplicitImport":false,"isExposed":true,"masterLabel":"CON_TroubleshootingDevices","runtimeNamespace":"vlocity_cmt","targets":{"target":["lightning__RecordPage","lightning__AppPage","lightning__HomePage"]},"targetConfigs":"PHRhcmdldENvbmZpZyB0YXJnZXRzPSJsaWdodG5pbmdfX0FwcFBhZ2UiPgogICAgICAgICAgICAgICAgICAgICAgPHByb3BlcnR5IG5hbWU9ImRlYnVnIiB0eXBlPSJCb29sZWFuIi8+CiAgICAgICAgICAgICAgICAgICAgICA8cHJvcGVydHkgbmFtZT0icmVjb3JkSWQiIHR5cGU9IlN0cmluZyIvPgogICAgICAgICAgICAgICAgICA8L3RhcmdldENvbmZpZz4KICAgICAgICAgICAgICAgICAgPHRhcmdldENvbmZpZyB0YXJnZXRzPSJsaWdodG5pbmdfX1JlY29yZFBhZ2UiPgogICAgICAgICAgICAgICAgICAgICAgPHByb3BlcnR5IG5hbWU9ImRlYnVnIiB0eXBlPSJCb29sZWFuIi8+CiAgICAgICAgICAgICAgICAgIDwvdGFyZ2V0Q29uZmlnPg=="},"events":[{"eventname":"service_account_channel","channelname":"serviceAccountChannel","element":"action","eventtype":"pubsub","recordIndex":"0","actionData":{"card":"{card}","stateAction":{"id":"flex-action-1641294415716","type":"cardAction","eventName":"updatedatasource","message":"{\"type\":\"IntegrationProcedures\",\"value\":{\"resultVar\":\"[\\\"deviceDetails\\\"]\",\"ipMethod\":\"CON_GetDeviceDetailsForTroubleshooting\",\"vlocityAsync\":false,\"inputMap\":{\"serviceAccountId\":\"{action.serviceAccountId}\"}},\"orderBy\":{\"name\":\"\",\"isReverse\":false},\"contextVariables\":[{\"name\":\"action.serviceAccountId\",\"val\":\"0018G000008yrwW\",\"id\":2}]}"}},"key":"event-0","displayLabel":"serviceAccountChannel:service_account_channel","eventLabel":"pubsub"}],"Id":"a5p8G00000000TMQAY","vlocity_cmt__GlobalKey__c":"CON_TroubleshootingDevices/GoogleFiber/6/1641296300317","vlocity_cmt__IsChildCard__c":false};
  export default definition