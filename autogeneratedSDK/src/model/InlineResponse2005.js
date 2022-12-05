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
import ModelObject from './ModelObject.js';

/**
* The InlineResponse2005 model module.
* @module model/InlineResponse2005
* @version 1.0.0
*/
export default class InlineResponse2005 {
    /**
    * Constructs a new <code>InlineResponse2005</code>.
    * @alias module:model/InlineResponse2005
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2005} obj Optional instance to populate.
    * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005();
                        
            
            if (data.hasOwnProperty('floorPrices')) {
                obj['floorPrices'] = ApiClient.convertToType(data['floorPrices'], [OneOfinlineResponse2005FloorPricesItems]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/ModelObject>} floorPrices
    */
    'floorPrices' = undefined;




}
