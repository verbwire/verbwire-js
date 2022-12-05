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
import CollectionDataFloorSale from './CollectionDataFloorSale.js';
import CollectionDataRank from './CollectionDataRank.js';
import CollectionDataRoyalties from './CollectionDataRoyalties.js';
import CollectionDataVolume from './CollectionDataVolume.js';

/**
* The CollectionData model module.
* @module model/CollectionData
* @version 1.0.0
*/
export default class CollectionData {
    /**
    * Constructs a new <code>CollectionData</code>.
    * @alias module:model/CollectionData
    * @class
    */

    constructor() {
        
        OneOfinlineResponse20011CollectionsResultsItems.call(this);
        
    }

    /**
    * Constructs a <code>CollectionData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CollectionData} obj Optional instance to populate.
    * @return {module:model/CollectionData} The populated <code>CollectionData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollectionData();
                        
            
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('discordUrl')) {
                obj['discordUrl'] = ApiClient.convertToType(data['discordUrl'], 'String');
            }
            if (data.hasOwnProperty('externalUrl')) {
                obj['externalUrl'] = ApiClient.convertToType(data['externalUrl'], 'String');
            }
            if (data.hasOwnProperty('floorSale')) {
                obj['floorSale'] = CollectionDataFloorSale.constructFromObject(data['floorSale']);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('onSaleCount')) {
                obj['onSaleCount'] = ApiClient.convertToType(data['onSaleCount'], 'Number');
            }
            if (data.hasOwnProperty('primaryContract')) {
                obj['primaryContract'] = ApiClient.convertToType(data['primaryContract'], 'String');
            }
            if (data.hasOwnProperty('rank')) {
                obj['rank'] = CollectionDataRank.constructFromObject(data['rank']);
            }
            if (data.hasOwnProperty('royalties')) {
                obj['royalties'] = CollectionDataRoyalties.constructFromObject(data['royalties']);
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('tokenCount')) {
                obj['tokenCount'] = ApiClient.convertToType(data['tokenCount'], 'Number');
            }
            if (data.hasOwnProperty('twitterUsername')) {
                obj['twitterUsername'] = ApiClient.convertToType(data['twitterUsername'], 'String');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = CollectionDataVolume.constructFromObject(data['volume']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} chain
    */
    'chain' = undefined;
    /**
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {String} discordUrl
    */
    'discordUrl' = undefined;
    /**
    * @member {String} externalUrl
    */
    'externalUrl' = undefined;
    /**
    * @member {module:model/CollectionDataFloorSale} floorSale
    */
    'floorSale' = undefined;
    /**
    * @member {String} image
    */
    'image' = undefined;
    /**
    * @member {Number} onSaleCount
    */
    'onSaleCount' = undefined;
    /**
    * @member {String} primaryContract
    */
    'primaryContract' = undefined;
    /**
    * @member {module:model/CollectionDataRank} rank
    */
    'rank' = undefined;
    /**
    * @member {module:model/CollectionDataRoyalties} royalties
    */
    'royalties' = undefined;
    /**
    * @member {String} slug
    */
    'slug' = undefined;
    /**
    * @member {Number} tokenCount
    */
    'tokenCount' = undefined;
    /**
    * @member {String} twitterUsername
    */
    'twitterUsername' = undefined;
    /**
    * @member {module:model/CollectionDataVolume} volume
    */
    'volume' = undefined;
    /**
    * @member {String} id
    */
    'id' = undefined;

    // Implement OneOfinlineResponse20011CollectionsResultsItems interface:
    


}