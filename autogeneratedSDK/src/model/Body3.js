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
* The Body3 model module.
* @module model/Body3
* @version 1.0.0
*/
export default class Body3 {
    /**
    * Constructs a new <code>Body3</code>.
    * @alias module:model/Body3
    * @class
    * @param contractAddress {String} 
    * @param maxMintPerAddress {String} 
    * @param totalReserveQty {String} 
    * @param totalAllowlistQty {String} 
    * @param maxSupply {String} 
    * @param maxMintableBatchSize {String} 
    * @param royaltiesInBps {String} 
    * @param royaltiesAddress {String} 
    * @param ownerAddress {String} 
    * @param baseTokenURI {String} 
    * @param allowListMintStartTime {String} 
    * @param publicSaleStartTime {String} 
    * @param allowlistMintPriceInWei {String} 
    * @param publicPriceInWei {String} 
    * @param metadataFrozen {module:model/Body3.MetadataFrozenEnum} 
    * @param recipientAddress {String} 
    * @param chain {module:model/Body3.ChainEnum} 
    */

    constructor(contractAddress, maxMintPerAddress, totalReserveQty, totalAllowlistQty, maxSupply, maxMintableBatchSize, royaltiesInBps, royaltiesAddress, ownerAddress, baseTokenURI, allowListMintStartTime, publicSaleStartTime, allowlistMintPriceInWei, publicPriceInWei, metadataFrozen, recipientAddress, chain) {
        
        
        this['contractAddress'] = contractAddress;
        this['maxMintPerAddress'] = maxMintPerAddress;
        this['totalReserveQty'] = totalReserveQty;
        this['totalAllowlistQty'] = totalAllowlistQty;
        this['maxSupply'] = maxSupply;
        this['maxMintableBatchSize'] = maxMintableBatchSize;
        this['royaltiesInBps'] = royaltiesInBps;
        this['royaltiesAddress'] = royaltiesAddress;
        this['ownerAddress'] = ownerAddress;
        this['baseTokenURI'] = baseTokenURI;
        this['allowListMintStartTime'] = allowListMintStartTime;
        this['publicSaleStartTime'] = publicSaleStartTime;
        this['allowlistMintPriceInWei'] = allowlistMintPriceInWei;
        this['publicPriceInWei'] = publicPriceInWei;
        this['metadataFrozen'] = metadataFrozen;
        this['recipientAddress'] = recipientAddress;
        this['chain'] = chain;
        
    }

    /**
    * Constructs a <code>Body3</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body3} obj Optional instance to populate.
    * @return {module:model/Body3} The populated <code>Body3</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body3();
                        
            
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
            if (data.hasOwnProperty('maxMintPerAddress')) {
                obj['maxMintPerAddress'] = ApiClient.convertToType(data['maxMintPerAddress'], 'String');
            }
            if (data.hasOwnProperty('totalReserveQty')) {
                obj['totalReserveQty'] = ApiClient.convertToType(data['totalReserveQty'], 'String');
            }
            if (data.hasOwnProperty('totalAllowlistQty')) {
                obj['totalAllowlistQty'] = ApiClient.convertToType(data['totalAllowlistQty'], 'String');
            }
            if (data.hasOwnProperty('maxSupply')) {
                obj['maxSupply'] = ApiClient.convertToType(data['maxSupply'], 'String');
            }
            if (data.hasOwnProperty('maxMintableBatchSize')) {
                obj['maxMintableBatchSize'] = ApiClient.convertToType(data['maxMintableBatchSize'], 'String');
            }
            if (data.hasOwnProperty('royaltiesInBps')) {
                obj['royaltiesInBps'] = ApiClient.convertToType(data['royaltiesInBps'], 'String');
            }
            if (data.hasOwnProperty('royaltiesAddress')) {
                obj['royaltiesAddress'] = ApiClient.convertToType(data['royaltiesAddress'], 'String');
            }
            if (data.hasOwnProperty('ownerAddress')) {
                obj['ownerAddress'] = ApiClient.convertToType(data['ownerAddress'], 'String');
            }
            if (data.hasOwnProperty('tokenURIPrereveal')) {
                obj['tokenURIPrereveal'] = ApiClient.convertToType(data['tokenURIPrereveal'], 'String');
            }
            if (data.hasOwnProperty('baseTokenURI')) {
                obj['baseTokenURI'] = ApiClient.convertToType(data['baseTokenURI'], 'String');
            }
            if (data.hasOwnProperty('allowListMintStartTime')) {
                obj['allowListMintStartTime'] = ApiClient.convertToType(data['allowListMintStartTime'], 'String');
            }
            if (data.hasOwnProperty('publicSaleStartTime')) {
                obj['publicSaleStartTime'] = ApiClient.convertToType(data['publicSaleStartTime'], 'String');
            }
            if (data.hasOwnProperty('allowlistMintPriceInWei')) {
                obj['allowlistMintPriceInWei'] = ApiClient.convertToType(data['allowlistMintPriceInWei'], 'String');
            }
            if (data.hasOwnProperty('publicPriceInWei')) {
                obj['publicPriceInWei'] = ApiClient.convertToType(data['publicPriceInWei'], 'String');
            }
            if (data.hasOwnProperty('metadataFrozen')) {
                obj['metadataFrozen'] = ApiClient.convertToType(data['metadataFrozen'], 'String');
            }
            if (data.hasOwnProperty('recipientAddress')) {
                obj['recipientAddress'] = ApiClient.convertToType(data['recipientAddress'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} contractAddress
    */
    'contractAddress' = undefined;
    /**
    * @member {String} maxMintPerAddress
    */
    'maxMintPerAddress' = undefined;
    /**
    * @member {String} totalReserveQty
    */
    'totalReserveQty' = undefined;
    /**
    * @member {String} totalAllowlistQty
    */
    'totalAllowlistQty' = undefined;
    /**
    * @member {String} maxSupply
    */
    'maxSupply' = undefined;
    /**
    * @member {String} maxMintableBatchSize
    */
    'maxMintableBatchSize' = undefined;
    /**
    * @member {String} royaltiesInBps
    */
    'royaltiesInBps' = undefined;
    /**
    * @member {String} royaltiesAddress
    */
    'royaltiesAddress' = undefined;
    /**
    * @member {String} ownerAddress
    */
    'ownerAddress' = undefined;
    /**
    * @member {String} tokenURIPrereveal
    */
    'tokenURIPrereveal' = undefined;
    /**
    * @member {String} baseTokenURI
    */
    'baseTokenURI' = undefined;
    /**
    * @member {String} allowListMintStartTime
    */
    'allowListMintStartTime' = undefined;
    /**
    * @member {String} publicSaleStartTime
    */
    'publicSaleStartTime' = undefined;
    /**
    * @member {String} allowlistMintPriceInWei
    */
    'allowlistMintPriceInWei' = undefined;
    /**
    * @member {String} publicPriceInWei
    */
    'publicPriceInWei' = undefined;
    /**
    * @member {module:model/Body3.MetadataFrozenEnum} metadataFrozen
    */
    'metadataFrozen' = undefined;
    /**
    * @member {String} recipientAddress
    */
    'recipientAddress' = undefined;
    /**
    * @member {module:model/Body3.ChainEnum} chain
    */
    'chain' = undefined;



    /**
    * Allowed values for the <code>metadataFrozen</code> property.
    * @enum {String}
    * @readonly
    */
    static MetadataFrozenEnum = {
        /**
         * value: "false"
         * @const
         */
        "false": "false",
        /**
         * value: "true"
         * @const
         */
        "true": "true"    };
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
         * value: "bsc"
         * @const
         */
        "bsc": "bsc",
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
