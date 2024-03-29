/**
 * @group BandWidth_Status_Polling__e
 * @description Handler to support trigger events for 
 * BandWidth_Status_Polling__e event.
 */
public with sharing class BandwidthStatusPollingTriggerHandler {

  public class EventTriggerException extends Exception {
  }

  // Initialize Class Constants.
  public static final String CLASS_NAME = 'BandwidthStatusPollingTriggerHandler';
  public static final String EXTRACT_API_DETAILS_METHOD_NAME = 'extractApiDetails';
  public static final String SET_CALLOUT_DETAILS_METHOD_NAME = 'setCalloutDetails';
  public static final String STATUS_POLLING = 'StatusPolling';

  // Keys for error messages.
  public static final String ERROR_MESSAGE_EVENT_TYPE_NOT_MATCHED = 'Event type {0} did not match.';
  public static final String ERROR_MESSAGE_API_DETAILS_NOT_CONFIGURED = 'Api details are not configured.';

  // Integration procedure names.
  public static final String IP_NAME_E911_COMPLETE = 'XOM_E911CompletePubSub';
  public static final String IP_NAME_PORTIN_COMPLETE = 'XOM_PortInCompletePubSub';

  // Dataraptor name.
  public static final String DR_TRANSFORM_E911_RESPONSE = 'XOM_TransformE911PubSubResponse';
  public static final String DR_TRANSFORM_PORTIN_RESPONSE = 'XOM_TransformPortinPubSubResponse';

  // Callout details keys.
  public static final String CALLOUT_ENDPOINT_KEY = 'endpoint';
  public static final String CALLBACK_IP_NAME_KEY = 'callbackIpName';
  public static final String CALLOUT_MAX_RETRY_KEY = 'maxRetry';
  public static final String CALLOUT_TRANSFORM_RESPONSE_KEY = 'calloutTransformResponse';
  public static final String CALLOUT_BANDWIDTH_NAMED_CREDENTIAL = 'callout:BandwidthAPI';
  
  /**
   * @description This method takes care of the after insert functionality.
   * @param statusPollingEvents New list of BandWidth_Status_Polling__e records from trigger
   * @return null
   */
  public static void afterInsertHandler(
      List<BandWidth_Status_Polling__e> statusPollingEvents) {
    if(!statusPollingEvents.isEmpty()) {
      Bandwidth_Status_Polling__e statusEvent
          = statusPollingEvents[0];
      // Sets the callout details based on the Event_Type__c.
      Map<String, Object> calloutDetails = setCalloutDetails(statusEvent);
      if(calloutDetails != null && !calloutDetails.isEmpty()) {
        System.enqueueJob(new BandwidthStatusPollingCallout(statusEvent,
            calloutDetails, 1));
      }
      /**
      * To handle only one event for each trigger invocation. If not
      * used then all platform events generated by scheduler will be
      * sent to one trigger instance which may exceed the governor limits.
      */
      EventBus.TriggerContext.currentContext()
          .setResumeCheckpoint(statusEvent.ReplayId);
    }
  }

  /**
   * @description This method creates the details needed for the callout
   * and processing the callout response.
   * @param statusEvent 
   * @return Map<String, Object>
   */
  public static Map<String, Object> setCalloutDetails(
      BandWidth_Status_Polling__e statusEvent) {
    Map<String, Object> result = new Map<String, Object>();
    String eventType = statusEvent.Event_Type__c;
    String endpoint = null;
    String pushEventIpName = null;
    String drTansformResponseName = null;
    try{
      switch on eventType {
        when 'E911' {
          pushEventIpName = IP_NAME_E911_COMPLETE;
          drTansformResponseName = DR_TRANSFORM_E911_RESPONSE;
        }
        when 'PortIn' {
          pushEventIpName = IP_NAME_PORTIN_COMPLETE;
          drTansformResponseName = DR_TRANSFORM_PORTIN_RESPONSE;
        }
        when else {
          String errorMessage = String.format(
            ERROR_MESSAGE_EVENT_TYPE_NOT_MATCHED,
            new List<String>{statusEvent.Event_Type__c}
          );
          LoggingUtility.insertExceptionLog(CLASS_NAME,
              SET_CALLOUT_DETAILS_METHOD_NAME, errorMessage);
          return result;
        }
      }
      Api_Info__mdt apiInfo = extractApiDetails(eventType
          + STATUS_POLLING);
      endpoint = CALLOUT_BANDWIDTH_NAMED_CREDENTIAL +
          String.format(apiInfo.Endpoint__c, new List<String>{
          apiInfo.Base_Api__r.AccessKey__c,
          statusEvent.Bandwidth_Order_Id__c});
      result.put(CALLOUT_ENDPOINT_KEY, endpoint);
      result.put(CALLBACK_IP_NAME_KEY, pushEventIpName);
      result.put(CALLOUT_TRANSFORM_RESPONSE_KEY, drTansformResponseName);
      result.put(CALLOUT_MAX_RETRY_KEY, apiInfo.Max_Retries__c);
      return result;
    } catch(Exception e) {
      LoggingUtility.insertExceptionLog(CLASS_NAME,
          SET_CALLOUT_DETAILS_METHOD_NAME, e.getMessage());
      return null;
    }
  }

  /**
   * @description This method extracts the api details from Api_Info_mdt metadata.
   * @param apiName Name of the api to extract.
   * @return Api_Info_mdt Details of the api.
   */
  public static Api_Info__mdt extractApiDetails(String apiName) {
    Api_Info__mdt apiInfo = [
        SELECT
          Endpoint__c,
          Max_Retries__c,
          Method__c,
          Base_Api__r.Content_Type__c,
          Base_Api__r.Base_URL__c,
          Base_Api__r.AccessKey__c
        FROM
        Api_Info__mdt
        WHERE
          DeveloperName = :apiName
        LIMIT 1
    ];
    if(apiInfo == null) {
      LoggingUtility.insertExceptionLog(CLASS_NAME,EXTRACT_API_DETAILS_METHOD_NAME,
          ERROR_MESSAGE_API_DETAILS_NOT_CONFIGURED);
      EventTriggerException eventException = new EventTriggerException();
      eventException.setMessage(ERROR_MESSAGE_API_DETAILS_NOT_CONFIGURED);
      throw eventException;
    }
    return apiInfo;
  }

}