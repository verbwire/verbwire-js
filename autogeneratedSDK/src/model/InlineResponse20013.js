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
import InlineResponse20013Attributes from './InlineResponse20013Attributes.js';

/**
* The InlineResponse20013 model module.
* @module model/InlineResponse20013
* @version 1.0.0
*/
export default class InlineResponse20013 {
    /**
    * Constructs a new <code>InlineResponse20013</code>.
    * @alias module:model/InlineResponse20013
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse20013} obj Optional instance to populate.
    * @return {module:model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20013();
                        
            
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = InlineResponse20013Attributes.constructFromObject(data['attributes']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/InlineResponse20013Attributes} attributes
    */
    'attributes' = undefined;




}
