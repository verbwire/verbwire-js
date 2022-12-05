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
* The Body14 model module.
* @module model/Body14
* @version 1.0.0
*/
export default class Body14 {
    /**
    * Constructs a new <code>Body14</code>.
    * @alias module:model/Body14
    * @class
    * @param filePath {File} 
    * @param name {String} 
    * @param description {String} 
    */

    constructor(filePath, name, description) {
        
        
        this['filePath'] = filePath;
        this['name'] = name;
        this['description'] = description;
        
    }

    /**
    * Constructs a <code>Body14</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body14} obj Optional instance to populate.
    * @return {module:model/Body14} The populated <code>Body14</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body14();
                        
            
            if (data.hasOwnProperty('filePath')) {
                obj['filePath'] = ApiClient.convertToType(data['filePath'], File);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {File} filePath
    */
    'filePath' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} description
    */
    'description' = undefined;




}
