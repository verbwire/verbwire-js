/**
 * Verbwire API documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient.js';

/**
* The TransferEvent model module.
* @module model/TransferEvent
* @version 1.0.0
*/
export default class TransferEvent {
    /**
    * Constructs a new <code>TransferEvent</code>.
    * @alias module:model/TransferEvent
    * @class
    */

    constructor() {
        
        OneOfinlineResponse2008TransfersResultsItems.call(this);OneOfinlineResponse2009TransfersResultsItems.call(this);
        
    }

    /**
    * Constructs a <code>TransferEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TransferEvent} obj Optional instance to populate.
    * @return {module:model/TransferEvent} The populated <code>TransferEvent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransferEvent();
                        
            
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('block')) {
                obj['block'] = ApiClient.convertToType(data['block'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
            if (data.hasOwnProperty('contractId')) {
                obj['contractId'] = ApiClient.convertToType(data['contractId'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('txHash')) {
                obj['txHash'] = ApiClient.convertToType(data['txHash'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} amount
    */
    'amount' = undefined;
    /**
    * @member {String} block
    */
    'block' = undefined;
    /**
    * @member {String} chain
    */
    'chain' = undefined;
    /**
    * @member {String} contractId
    */
    'contractId' = undefined;
    /**
    * @member {String} slug
    */
    'slug' = undefined;
    /**
    * @member {String} from
    */
    'from' = undefined;
    /**
    * @member {String} to
    */
    'to' = undefined;
    /**
    * @member {String} tokenId
    */
    'tokenId' = undefined;
    /**
    * @member {String} txHash
    */
    'txHash' = undefined;
    /**
    * @member {String} id
    */
    'id' = undefined;
    /**
    * @member {String} timestamp
    */
    'timestamp' = undefined;

    // Implement OneOfinlineResponse2008TransfersResultsItems interface:
        // Implement OneOfinlineResponse2009TransfersResultsItems interface:
    


}