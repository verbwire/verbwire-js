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
* The Body10 model module.
* @module model/Body10
* @version 1.0.0
*/
export default class Body10 {
    /**
    * Constructs a new <code>Body10</code>.
    * @alias module:model/Body10
    * @class
    * @param filePath {File} 
    * @param name {String} 
    * @param description {String} 
    * @param recipientAddress {String} 
    * @param contractAddress {String} 
    * @param chain {module:model/Body10.ChainEnum} 
    */

    constructor(filePath, name, description, recipientAddress, contractAddress, chain) {
        
        
        this['filePath'] = filePath;
        this['name'] = name;
        this['description'] = description;
        this['recipientAddress'] = recipientAddress;
        this['contractAddress'] = contractAddress;
        this['chain'] = chain;
        
    }

    /**
    * Constructs a <code>Body10</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body10} obj Optional instance to populate.
    * @return {module:model/Body10} The populated <code>Body10</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body10();
                        
            
            if (data.hasOwnProperty('filePath')) {
                obj['filePath'] = ApiClient.convertToType(data['filePath'], File);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('recipientAddress')) {
                obj['recipientAddress'] = ApiClient.convertToType(data['recipientAddress'], 'String');
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
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
    /**
    * @member {String} recipientAddress
    */
    'recipientAddress' = undefined;
    /**
    * @member {String} contractAddress
    */
    'contractAddress' = undefined;
    /**
    * @member {module:model/Body10.ChainEnum} chain
    */
    'chain' = undefined;



    /**
    * Allowed values for the <code>chain</code> property.
    * @enum {String}
    * @readonly
    */
    static ChainEnum = {
        /**
         * value: "goerli"
         * @const
         */
        "goerli": "goerli",
        /**
         * value: "bsc-testnet"
         * @const
         */
        "bsc-testnet": "bsc-testnet",
        /**
         * value: "fuji"
         * @const
         */
        "fuji": "fuji",
        /**
         * value: "mumbai"
         * @const
         */
        "mumbai": "mumbai",
        /**
         * value: "arbitrum-goerli"
         * @const
         */
        "arbitrum-goerli": "arbitrum-goerli",
        /**
         * value: "optimism-goerli"
         * @const
         */
        "optimism-goerli": "optimism-goerli",
        /**
         * value: "fantom-testnet"
         * @const
         */
        "fantom-testnet": "fantom-testnet",
        /**
         * value: "ethereum"
         * @const
         */
        "ethereum": "ethereum",
        /**
         * value: "avalanche"
         * @const
         */
        "avalanche": "avalanche",
        /**
         * value: "polygon"
         * @const
         */
        "polygon": "polygon",
        /**
         * value: "arbitrum"
         * @const
         */
        "arbitrum": "arbitrum",
        /**
         * value: "optimism"
         * @const
         */
        "optimism": "optimism",
        /**
         * value: "fantom"
         * @const
         */
        "fantom": "fantom"    };

}
