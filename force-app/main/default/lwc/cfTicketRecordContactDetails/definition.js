let definition =
      {"dataSource":{"contextVariables":[{"id":1,"name":"recordId","val":"a7s0n0000005BWFAA2"}],"orderBy":{"isReverse":false,"name":""},"type":"IntegrationProcedures","value":{"inputMap":{"recordId":"{recordId}"},"ipMethod":"ticket_IssueTicket","resultVar":"","vlocityAsync":false}},"enableLwc":true,"isFlex":true,"lwc":{"DeveloperName":"cfTicketRecordContactDetails_3_GoogleFiber","Id":"0Rb0n000000CvegCAC","MasterLabel":"cfTicketRecordContactDetails_3_GoogleFiber","NamespacePrefix":"c"},"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Ticket_Block-2-Text-0-clone-0","key":"element_element_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"AccountTicket","id":"state-new-condition-3","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2014pt;%22%3ERelated%20Account%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"background: Gainsboro;","margin":[],"padding":[{"label":"around:small","size":"small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             background: Gainsboro;","text":{"align":"","color":""}},"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"dataTable","elementLabel":"Ticket_Block-2-Datatable-4","key":"element_element_block_0_0_dataTable_1_0","name":"Datatable","parentElementKey":"element_block_0_0","property":{"cellLevelEdit":true,"columns":[{"fieldName":"TicketAccountId","label":"          Customer Id","searchable":true,"sortable":true,"type":"text"},{"fieldName":"TicketAccountName","label":"          Customer Name","searchable":true,"sortable":true,"type":"text"},{"fieldName":"ContactEmail","label":"Contact","searchable":true,"sortable":true},{"fieldName":"PremiseAddress","label":"Address","searchable":true,"sortable":true}],"data-conditions":{"group":[{"field":"AccountTicket","id":"state-new-condition-15","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"groupOrder":"asc","issearchavailable":false,"issortavailable":true,"pagelimit":3,"records":"{records}","styles":{"cellBorderColor":"#1F0101","cellBorderType":["border_top","border_right","border_bottom","border_left"],"cellBorderWidth":"2","cellMargin":[],"cellPadding":[],"tableBorderType":["border_top","border_right","border_bottom","border_left"],"tableBorderWidth":"2"}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_small ","container":{"class":""},"elementStyleProperties":{"styles":{"cellBorderColor":"#1F0101","cellBorderType":["border_top","border_right","border_bottom","border_left"],"cellBorderWidth":"2","cellMargin":[],"cellPadding":[],"tableBorderType":["border_top","border_right","border_bottom","border_left"],"tableBorderWidth":"2"}},"inlineStyle":"","margin":[],"padding":[{"label":"around:small","size":"small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Ticket_Block-3","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-3-Text-0","key":"element_element_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_block_1_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"LeadTicket","id":"state-new-condition-27","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2014pt;%22%3ERelated%20Lead%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"background: Gainsboro;","margin":[],"padding":[{"label":"around:small","size":"small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             background: Gainsboro;","text":{"align":"","color":""}},"type":"text"},{"class":"slds-col ","element":"dataTable","elementLabel":"Block-3-Datatable-4","key":"element_element_block_1_0_dataTable_1_0","name":"Datatable","parentElementKey":"element_block_1_0","property":{"cellLevelEdit":true,"columns":[{"fieldName":"TicketLeadName","label":"Customer Name","searchable":false,"sortable":true,"type":"text"},{"fieldName":"TicketAddress","label":"Address","searchable":false,"sortable":true,"type":"text"},{"fieldName":"TicketLeadEmail","label":"Contact","searchable":false,"sortable":true,"type":"text"}],"data-conditions":{"group":[{"field":"LeadTicket","id":"state-new-condition-36","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"groupOrder":"asc","issearchavailable":false,"issortavailable":true,"pagelimit":3,"records":"{records}","styles":{"cellBorderColor":"#1F0101","cellBorderType":["border_top","border_right","border_bottom","border_left"],"cellBorderWidth":"2","cellMargin":[],"cellPadding":[],"tableBorderType":["border_top","border_right","border_bottom","border_left"],"tableBorderWidth":"2"}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_small ","container":{"class":""},"elementStyleProperties":{"styles":{"cellBorderColor":"#1F0101","cellBorderType":["border_top","border_right","border_bottom","border_left"],"cellBorderWidth":"2","cellMargin":[],"cellPadding":[],"tableBorderType":["border_top","border_right","border_bottom","border_left"],"tableBorderWidth":"2"}},"inlineStyle":"","margin":[],"padding":[{"label":"around:small","size":"small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-3-Text-0","key":"element_element_block_2_0_outputField_0_0","name":"Text","parentElementKey":"element_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"PremiseTicket","id":"state-new-condition-45","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2014pt;%22%3ERelated%20Premises%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"background: Gainsboro;","margin":[],"padding":[{"label":"around:small","size":"small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             background: Gainsboro;","text":{"align":"","color":""}},"type":"text"},{"class":"slds-col ","element":"dataTable","elementLabel":"Datatable-4","key":"element_element_block_2_0_dataTable_1_0","name":"Datatable","parentElementKey":"element_block_2_0","property":{"cellLevelEdit":true,"columns":[{"fieldName":"TicketPremisesId","label":"Premises Id","searchable":false,"sortable":true,"type":"text"},{"fieldName":"PremiseAddress","label":"Address","searchable":false,"sortable":true,"type":"text"},{"fieldName":"TicketPremisesStatus","label":"Status","searchable":false,"sortable":true,"type":"text"}],"data-conditions":{"group":[{"field":"PremiseTicket","id":"state-new-condition-54","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"groupOrder":"asc","issearchavailable":false,"issortavailable":true,"pagelimit":3,"records":"{records}","styles":{"cellBorderColor":"#1F0101","cellBorderType":["border_top","border_right","border_bottom","border_left"],"cellBorderWidth":"2","cellMargin":[],"cellPadding":[],"tableBorderType":["border_top","border_right","border_bottom","border_left"],"tableBorderWidth":"2"}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_small ","container":{"class":""},"elementStyleProperties":{"styles":{"cellBorderColor":"#1F0101","cellBorderType":["border_top","border_right","border_bottom","border_left"],"cellBorderWidth":"2","cellMargin":[],"cellPadding":[],"tableBorderType":["border_top","border_right","border_bottom","border_left"],"tableBorderWidth":"2"}},"inlineStyle":"","margin":[],"padding":[{"label":"around:small","size":"small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-3","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"x-small","type":"bottom"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"ticketRecordContactDetails","Id":"a5p8G00000000AUQAY","vlocity_cmt__GlobalKey__c":"ticketRecordContactDetails/GoogleFiber/3/1624520818858","vlocity_cmt__IsChildCard__c":false};
  export default definition