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
* The Body17 model module.
* @module model/Body17
* @version 1.0.0
*/
export default class Body17 {
    /**
    * Constructs a new <code>Body17</code>.
    * @alias module:model/Body17
    * @class
    * @param sourceChain {module:model/Body17.SourceChainEnum} 
    * @param destChain {module:model/Body17.DestChainEnum} 
    * @param sourceContractAddress {String} 
    * @param destContractAddress {String} 
    */

    constructor(sourceChain, destChain, sourceContractAddress, destContractAddress) {
        
        
        this['sourceChain'] = sourceChain;
        this['destChain'] = destChain;
        this['sourceContractAddress'] = sourceContractAddress;
        this['destContractAddress'] = destContractAddress;
        
    }

    /**
    * Constructs a <code>Body17</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body17} obj Optional instance to populate.
    * @return {module:model/Body17} The populated <code>Body17</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body17();
                        
            
            if (data.hasOwnProperty('sourceChain')) {
                obj['sourceChain'] = ApiClient.convertToType(data['sourceChain'], 'String');
            }
            if (data.hasOwnProperty('destChain')) {
                obj['destChain'] = ApiClient.convertToType(data['destChain'], 'String');
            }
            if (data.hasOwnProperty('sourceContractAddress')) {
                obj['sourceContractAddress'] = ApiClient.convertToType(data['sourceContractAddress'], 'String');
            }
            if (data.hasOwnProperty('destContractAddress')) {
                obj['destContractAddress'] = ApiClient.convertToType(data['destContractAddress'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Body17.SourceChainEnum} sourceChain
    */
    'sourceChain' = undefined;
    /**
    * @member {module:model/Body17.DestChainEnum} destChain
    */
    'destChain' = undefined;
    /**
    * @member {String} sourceContractAddress
    */
    'sourceContractAddress' = undefined;
    /**
    * @member {String} destContractAddress
    */
    'destContractAddress' = undefined;



    /**
    * Allowed values for the <code>sourceChain</code> property.
    * @enum {String}
    * @readonly
    */
    static SourceChainEnum = {
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
    /**
    * Allowed values for the <code>destChain</code> property.
    * @enum {String}
    * @readonly
    */
    static DestChainEnum = {
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