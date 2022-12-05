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
* The Error model module.
* @module model/Error
* @version 1.0.0
*/
export default class Error {
    /**
    * Constructs a new <code>Error</code>.
    * @alias module:model/Error
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Error} obj Optional instance to populate.
    * @return {module:model/Error} The populated <code>Error</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error();
                        
            
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} code
    */
    'code' = undefined;
    /**
    * @member {String} message
    */
    'message' = undefined;




}
