import { FlexCardMixin } from "vlocity_cmt/flexCardMixin";
    import {interpolateWithRegex, interpolateKeyValue, fetchCustomLabels } from "vlocity_cmt/flexCardUtility";
    
          import { LightningElement, api, track } from "lwc";
          

          import pubsub from "vlocity_cmt/pubsub";
          import { OmniscriptBaseMixin } from "vlocity_cmt/omniscriptBaseMixin";
          import data from "./definition";
          export default class cfCON_TroubleshootingDeviceInformation_5_GoogleFiber extends FlexCardMixin(OmniscriptBaseMixin(LightningElement)){
              @api debug;
              @api recordId;
              @track omniSupportKey = 'cfCON_TroubleshootingDeviceInformation_5_GoogleFiber';
              @track record;

              _regexPattern = /\{([a-zA-Z.0-9_]*)\}/g; //for {} fields by default
              
              connectedCallback() {
                super.connectedCallback();
                this.registerPubSub();
                
                this.setDefinition(data);
                
                
              }
              disconnectedCallback(){
                super.disconnectedCallback();
                this.omniSaveState(this.records,this.omniSupportKey,true);
              }

              executeAction(event) {
                let dataset = event.currentTarget.dataset;
                if (dataset && dataset.onchange === 'setValue' ) {
                  this.setValueOnToggle(event);
                }
                if(dataset && typeof dataset.actionIndex !== 'undefined') {
                  let actionIndex = dataset.actionIndex;
                  this.elementIndex = event.currentTarget && event.currentTarget.closest(".cf-vlocity-state") ? event.currentTarget.closest(".cf-vlocity-state").dataset.rindex : null;
                  if (this.records) {
                    this.record = this.records[this.elementIndex];
                  }
                  this.action = {};
                  this.action[actionIndex] = true;
                  this.template.querySelector('.execute-action').executeAction(event, this.card);
                }
                event.stopPropagation();
              }

              registerPubSub() {
                
              }

              handleEventAction(actionObj, index, event) {
                this.action = {};
                let fromActionObj = actionObj.eventtype === "event" ? event.detail : event;
                actionObj = interpolateWithRegex(
                  actionObj,
                  {action : fromActionObj},
                  this._regexPattern
                );
                if(actionObj.actionData) {
                  actionObj.actionData = interpolateKeyValue(actionObj.actionData, {action : fromActionObj});
                }
                if(fromActionObj) {
                  this.action = fromActionObj;
                }
                this.action["listener"+index] = fromActionObj || true;
                let eve = {
                  currentTarget : {
                    action : actionObj
                  }
                }
                this.elementIndex = 0;
                if(typeof actionObj.recordIndex !== "undefined") {
                  this.elementIndex = parseInt(actionObj.recordIndex, 10);
                }
                if(actionObj.eventtype === "event") {
                  let stateElement =
                      event.target && event.target.closest(".cf-vlocity-state")
                        ? event.target.closest(".cf-vlocity-state")
                        : null;
                  if(stateElement && stateElement.dataset.rindex) {
                    this.elementIndex = parseInt(stateElement.dataset.rindex,10);
                  }
                  eve.currentTarget.action.recordIndex = this.elementIndex;
                  event.stopPropagation();
                }
                if(this.records && this.records.length > 0) {
                  eve.currentTarget.record = this.records[this.elementIndex];
                }
                let ele = this.template.querySelector(".action-trigger");

                ele.executeAction(eve, this.card);
              }

          }