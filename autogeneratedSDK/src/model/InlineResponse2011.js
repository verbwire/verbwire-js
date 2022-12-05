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
* The InlineResponse2011 model module.
* @module model/InlineResponse2011
* @version 1.0.0
*/
export default class InlineResponse2011 {
    /**
    * Constructs a new <code>InlineResponse2011</code>.
    * @alias module:model/InlineResponse2011
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse2011</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2011} obj Optional instance to populate.
    * @return {module:model/InlineResponse2011} The populated <code>InlineResponse2011</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2011();
                        
            
            if (data.hasOwnProperty('ipfs_url')) {
                obj['ipfs_url'] = ApiClient.convertToType(data['ipfs_url'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} ipfs_url
    */
    'ipfs_url' = undefined;




}