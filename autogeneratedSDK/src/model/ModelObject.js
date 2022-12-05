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
//import ModelObject from './ModelObject.js';

/**
* The InlineResponse20010Transfers model module.
* @module model/InlineResponse20010Transfers
* @version 1.0.0
*/
export default class ModelObject {
    /**
    * Constructs a new <code>InlineResponse20010Transfers</code>.
    * @alias module:model/InlineResponse20010Transfers
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse20010Transfers</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse20010Transfers} obj Optional instance to populate.
    * @return {module:model/InlineResponse20010Transfers} The populated <code>InlineResponse20010Transfers</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelObject();
                        
            
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [OneOfinlineResponse20010TransfersResultsItems]);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('totalResults')) {
                obj['totalResults'] = ApiClient.convertToType(data['totalResults'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/ModelObject>} results
    */
    'results' = undefined;
    /**
    * @member {Number} page
    */
    'page' = undefined;
    /**
    * @member {Number} limit
    */
    'limit' = undefined;
    /**
    * @member {Number} totalPages
    */
    'totalPages' = undefined;
    /**
    * @member {Number} totalResults
    */
    'totalResults' = undefined;




}
