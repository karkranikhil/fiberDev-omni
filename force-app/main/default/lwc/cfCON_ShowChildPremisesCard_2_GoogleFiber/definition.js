let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"definedActions":{"actions":[]},"name":"Active","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"around","size":"x-small"}],"margin":[{"type":"around","size":"none"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12","class":"slds-card slds-p-around_x-small slds-m-bottom_x-small"},"components":{"layer-0":{"children":[{"name":"Datatable","element":"dataTable","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"issearchavailable":false,"issortavailable":true,"cellLevelEdit":true,"pagelimit":3,"groupOrder":"asc","columns":[{"fieldName":"premisesName","label":"Premises","searchable":false,"sortable":"false","type":"text"},{"fieldName":"address","label":"Address","searchable":false,"sortable":"false","type":"text"},{"fieldName":"serviceAccountName","label":"Service Account","searchable":false,"sortable":"false","type":"text"}],"records":"{records}"},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12"},"elementLabel":"Datatable-2"}]}},"childCards":[],"actions":[],"omniscripts":[],"documents":[]}],"dataSource":{"type":"DataRaptor","value":{"resultVar":"[0]['childPremises']","bundle":"CON_FetchChildPremiseDetails","inputMap":{"premisesId":"{premisesId}"}},"orderBy":{"name":"","isReverse":false},"contextVariables":[{"name":"premisesId","val":"a4I8G000000Gq8QUAS","id":1}]},"title":"CON_ShowChildPremisesCard","enableLwc":true,"isFlex":true,"theme":"slds","lwc":{"DeveloperName":"cfCON_ShowChildPremisesCard_2_GoogleFiber","Id":"0Rb8G0000000ETRSA2","MasterLabel":"cfCON_ShowChildPremisesCard_2_GoogleFiber","NamespacePrefix":"c","ManageableState":"unmanaged"},"isRepeatable":false,"xmlObject":{"masterLabel":"CON_ShowChildPremisesCard","apiVersion":48,"runtimeNamespace":"vlocity_cmt","targetConfigs":"","targets":{"target":["lightning__AppPage","lightning__HomePage","lightning__RecordPage"]},"isExplicitImport":false},"osSupport":true,"Id":"a5p8G00000000NUQAY","vlocity_cmt__GlobalKey__c":"CON_ShowChildPremisesCard/GoogleFiber/2/1640002483794","vlocity_cmt__IsChildCard__c":false};
  export default definition