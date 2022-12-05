# VerbwireApiDocumentation.DataApi

All URIs are relative to *https://api.verbwire.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nftDataAttributesForContractAddressGet**](DataApi.md#nftDataAttributesForContractAddressGet) | **GET** /nft/data/attributesForContractAddress | Get attributes for contract address
[**nftDataAttributesForSlugGet**](DataApi.md#nftDataAttributesForSlugGet) | **GET** /nft/data/attributesForSlug | Get attributes for slug
[**nftDataAttributesWithTokensForContractAddressGet**](DataApi.md#nftDataAttributesWithTokensForContractAddressGet) | **GET** /nft/data/attributesWithTokensForContractAddress | Get attributes (with tokens) for contract address
[**nftDataAttributesWithTokensForSlugGet**](DataApi.md#nftDataAttributesWithTokensForSlugGet) | **GET** /nft/data/attributesWithTokensForSlug | Get attributes (with tokens) for slug
[**nftDataCollectionsAllGet**](DataApi.md#nftDataCollectionsAllGet) | **GET** /nft/data/collections/all | Get all indexed collections
[**nftDataCollectionsSearchGet**](DataApi.md#nftDataCollectionsSearchGet) | **GET** /nft/data/collections/search | Search all indexed collections
[**nftDataCreatedGet**](DataApi.md#nftDataCreatedGet) | **GET** /nft/data/created | Get all NFTs created by a wallet address
[**nftDataFloorPricesForContractAddressGet**](DataApi.md#nftDataFloorPricesForContractAddressGet) | **GET** /nft/data/floorPricesForContractAddress | Get floor prices for contract address
[**nftDataFloorPricesForSlugGet**](DataApi.md#nftDataFloorPricesForSlugGet) | **GET** /nft/data/floorPricesForSlug | Get floor prices for slug
[**nftDataHistoricalStatsForContractAddressGet**](DataApi.md#nftDataHistoricalStatsForContractAddressGet) | **GET** /nft/data/historicalStatsForContractAddress | Get historical stats for contract address
[**nftDataHistoricalStatsForSlugGet**](DataApi.md#nftDataHistoricalStatsForSlugGet) | **GET** /nft/data/historicalStatsForSlug | Get historical stats for slug
[**nftDataLastFloorPriceForContractAddressGet**](DataApi.md#nftDataLastFloorPriceForContractAddressGet) | **GET** /nft/data/lastFloorPriceForContractAddress | Get last floor price for contract address
[**nftDataLastFloorPriceForSlugGet**](DataApi.md#nftDataLastFloorPriceForSlugGet) | **GET** /nft/data/lastFloorPriceForSlug | Get last floor price for slug
[**nftDataNftDetailsGet**](DataApi.md#nftDataNftDetailsGet) | **GET** /nft/data/nftDetails | Get details for an NFT
[**nftDataOwnedGet**](DataApi.md#nftDataOwnedGet) | **GET** /nft/data/owned | Get all NFTs owned by a wallet address
[**nftDataOwnershipForContractAddressGet**](DataApi.md#nftDataOwnershipForContractAddressGet) | **GET** /nft/data/ownershipForContractAddress | Get ownership data for contract address
[**nftDataOwnershipForSlugGet**](DataApi.md#nftDataOwnershipForSlugGet) | **GET** /nft/data/ownershipForSlug | Get ownership data for slug
[**nftDataSalesEventsForContractAddressGet**](DataApi.md#nftDataSalesEventsForContractAddressGet) | **GET** /nft/data/salesEventsForContractAddress | Get sales events for contract address
[**nftDataSalesEventsForSlugGet**](DataApi.md#nftDataSalesEventsForSlugGet) | **GET** /nft/data/salesEventsForSlug | Get sales events for slug
[**nftDataSearchAttributesInContractAddressGet**](DataApi.md#nftDataSearchAttributesInContractAddressGet) | **GET** /nft/data/searchAttributesInContractAddress | Search attributes in contract address
[**nftDataSearchAttributesInSlugGet**](DataApi.md#nftDataSearchAttributesInSlugGet) | **GET** /nft/data/searchAttributesInSlug | Search attributes in slug
[**nftDataTransactionsByContractGet**](DataApi.md#nftDataTransactionsByContractGet) | **GET** /nft/data/transactionsByContract | Get all NFTs Contract transactions by a wallet address
[**nftDataTransactionsGet**](DataApi.md#nftDataTransactionsGet) | **GET** /nft/data/transactions | Get all transactions by a wallet address
[**nftDataTransferEventsForContractAddressGet**](DataApi.md#nftDataTransferEventsForContractAddressGet) | **GET** /nft/data/transferEventsForContractAddress | Get transfer events for contract address
[**nftDataTransferEventsForSlugGet**](DataApi.md#nftDataTransferEventsForSlugGet) | **GET** /nft/data/transferEventsForSlug | Get transfer events for slug

<a name="nftDataAttributesForContractAddressGet"></a>
# **nftDataAttributesForContractAddressGet**
> InlineResponse20012 nftDataAttributesForContractAddressGet(contractAddress, opts)

Get attributes for contract address

Returns all metadata attributes for an NFT contract address

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let contractAddress = "contractAddress_example"; // String | NFT contract address
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'page': 1, // Number | Used to return the next set of items
  'sortField': "key", // String | 
  'sortDirection': "DESC" // String | Timestamp sort direction for the return results
};
apiInstance.nftDataAttributesForContractAddressGet(contractAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**| NFT contract address | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **page** | **Number**| Used to return the next set of items | [optional] [default to 1]
 **sortField** | **String**|  | [optional] [default to key]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataAttributesForSlugGet"></a>
# **nftDataAttributesForSlugGet**
> InlineResponse20012 nftDataAttributesForSlugGet(slug, opts)

Get attributes for slug

Returns all metadata attributes for a particular NFT project slug

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let slug = "slug_example"; // String | NFT project slug
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'page': 1, // Number | Used to return the next set of items
  'sortField': "key", // String | 
  'sortDirection': "DESC" // String | Timestamp sort direction for the return results
};
apiInstance.nftDataAttributesForSlugGet(slug, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| NFT project slug | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **page** | **Number**| Used to return the next set of items | [optional] [default to 1]
 **sortField** | **String**|  | [optional] [default to key]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataAttributesWithTokensForContractAddressGet"></a>
# **nftDataAttributesWithTokensForContractAddressGet**
> InlineResponse20013 nftDataAttributesWithTokensForContractAddressGet(contractAddress, opts)

Get attributes (with tokens) for contract address

Returns all metadata attributes and corresponding token IDs for an NFT contract address

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let contractAddress = "contractAddress_example"; // String | NFT contract address
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'page': 1, // Number | Used to return the next set of items
  'sortField': "key", // String | 
  'sortDirection': "DESC" // String | Timestamp sort direction for the return results
};
apiInstance.nftDataAttributesWithTokensForContractAddressGet(contractAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**| NFT contract address | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **page** | **Number**| Used to return the next set of items | [optional] [default to 1]
 **sortField** | **String**|  | [optional] [default to key]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataAttributesWithTokensForSlugGet"></a>
# **nftDataAttributesWithTokensForSlugGet**
> InlineResponse20013 nftDataAttributesWithTokensForSlugGet(slug, opts)

Get attributes (with tokens) for slug

Returns all metadata attributes and corresponding token IDs for a particular NFT project slug

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let slug = "slug_example"; // String | NFT project slug
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'page': 1, // Number | Used to return the next set of items
  'sortField': "key", // String | 
  'sortDirection': "DESC" // String | Timestamp sort direction for the return results
};
apiInstance.nftDataAttributesWithTokensForSlugGet(slug, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| NFT project slug | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **page** | **Number**| Used to return the next set of items | [optional] [default to 1]
 **sortField** | **String**|  | [optional] [default to key]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataCollectionsAllGet"></a>
# **nftDataCollectionsAllGet**
> InlineResponse20011 nftDataCollectionsAllGet(opts)

Get all indexed collections

Returns all collections indexed by Verbwire

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'page': 1, // Number | Used to return the next set of items
  'sortField': "rank", // String | Field to sort by
  'sortInterval': "allTime", // String | Interval to sort by
  'sortDirection': "ASC" // String | Timestamp sort direction for the return results
};
apiInstance.nftDataCollectionsAllGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **page** | **Number**| Used to return the next set of items | [optional] [default to 1]
 **sortField** | **String**| Field to sort by | [optional] [default to rank]
 **sortInterval** | **String**| Interval to sort by | [optional] [default to allTime]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to ASC]

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataCollectionsSearchGet"></a>
# **nftDataCollectionsSearchGet**
> InlineResponse20011 nftDataCollectionsSearchGet(searchString, opts)

Search all indexed collections

Searches all collections indexed by Verbwire for a given string

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let searchString = "searchString_example"; // String | Search value
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'page': 1, // Number | Used to return the next set of items
  'sortField': "rank", // String | Field to sort by
  'sortInterval': "allTime", // String | Interval to sort by
  'sortDirection': "ASC" // String | Timestamp sort direction for the return results
};
apiInstance.nftDataCollectionsSearchGet(searchString, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchString** | **String**| Search value | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **page** | **Number**| Used to return the next set of items | [optional] [default to 1]
 **sortField** | **String**| Field to sort by | [optional] [default to rank]
 **sortInterval** | **String**| Interval to sort by | [optional] [default to allTime]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to ASC]

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataCreatedGet"></a>
# **nftDataCreatedGet**
> InlineResponse200 nftDataCreatedGet(walletAddress, opts)

Get all NFTs created by a wallet address

Returns a list of all NFTs created by a particular wallet address

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let walletAddress = "walletAddress_example"; // String | Wallet address to query
let opts = { 
  'chain': "ethereum" // String | Blockchain to search
};
apiInstance.nftDataCreatedGet(walletAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletAddress** | **String**| Wallet address to query | 
 **chain** | **String**| Blockchain to search | [optional] [default to ethereum]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataFloorPricesForContractAddressGet"></a>
# **nftDataFloorPricesForContractAddressGet**
> InlineResponse2005 nftDataFloorPricesForContractAddressGet(contractAddress, opts)

Get floor prices for contract address

Returns all floor price history for an NFT project

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let contractAddress = "contractAddress_example"; // String | NFT contract address
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'offset': 0, // Number | Used to return the next set of items
  'sortDirection': "DESC", // String | Timestamp sort direction for the return results
  'startDate': "startDate_example", // String | Starting timestamp for results
  'endDate': "endDate_example" // String | Ending timestamp for results
};
apiInstance.nftDataFloorPricesForContractAddressGet(contractAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**| NFT contract address | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **offset** | **Number**| Used to return the next set of items | [optional] [default to 0]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]
 **startDate** | **String**| Starting timestamp for results | [optional] 
 **endDate** | **String**| Ending timestamp for results | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataFloorPricesForSlugGet"></a>
# **nftDataFloorPricesForSlugGet**
> InlineResponse2005 nftDataFloorPricesForSlugGet(slug, opts)

Get floor prices for slug

Returns all floor price history for an NFT project slug

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let slug = "slug_example"; // String | NFT project slug
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'offset': 0, // Number | Used to return the next set of items
  'sortDirection': "DESC", // String | Timestamp sort direction for the return results
  'startDate': "startDate_example", // String | Starting timestamp for results
  'endDate': "endDate_example" // String | Ending timestamp for results
};
apiInstance.nftDataFloorPricesForSlugGet(slug, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| NFT project slug | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **offset** | **Number**| Used to return the next set of items | [optional] [default to 0]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]
 **startDate** | **String**| Starting timestamp for results | [optional] 
 **endDate** | **String**| Ending timestamp for results | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataHistoricalStatsForContractAddressGet"></a>
# **nftDataHistoricalStatsForContractAddressGet**
> InlineResponse2006 nftDataHistoricalStatsForContractAddressGet(contractAddress, opts)

Get historical stats for contract address

Returns historical statistics for an NFT project

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let contractAddress = "contractAddress_example"; // String | NFT contract address
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'offset': 0, // Number | Used to return the next set of items
  'sortDirection': "DESC", // String | Timestamp sort direction for the return results
  'startDate': "startDate_example", // String | Starting timestamp for results
  'endDate': "endDate_example" // String | Ending timestamp for results
};
apiInstance.nftDataHistoricalStatsForContractAddressGet(contractAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**| NFT contract address | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **offset** | **Number**| Used to return the next set of items | [optional] [default to 0]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]
 **startDate** | **String**| Starting timestamp for results | [optional] 
 **endDate** | **String**| Ending timestamp for results | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataHistoricalStatsForSlugGet"></a>
# **nftDataHistoricalStatsForSlugGet**
> InlineResponse2006 nftDataHistoricalStatsForSlugGet(slug, opts)

Get historical stats for slug

Returns historical statistics for an NFT project slug

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let slug = "slug_example"; // String | NFT project slug
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'offset': 0, // Number | Used to return the next set of items
  'sortDirection': "DESC", // String | Timestamp sort direction for the return results
  'startDate': "startDate_example", // String | Starting timestamp for results
  'endDate': "endDate_example" // String | Ending timestamp for results
};
apiInstance.nftDataHistoricalStatsForSlugGet(slug, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| NFT project slug | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **offset** | **Number**| Used to return the next set of items | [optional] [default to 0]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]
 **startDate** | **String**| Starting timestamp for results | [optional] 
 **endDate** | **String**| Ending timestamp for results | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataLastFloorPriceForContractAddressGet"></a>
# **nftDataLastFloorPriceForContractAddressGet**
> InlineResponse2004 nftDataLastFloorPriceForContractAddressGet(contractAddress, opts)

Get last floor price for contract address

Returns the most recent floor price for an NFT

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let contractAddress = "contractAddress_example"; // String | NFT contract address
let opts = { 
  'chain': "chain_example" // String | Blockchain to search
};
apiInstance.nftDataLastFloorPriceForContractAddressGet(contractAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**| NFT contract address | 
 **chain** | **String**| Blockchain to search | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataLastFloorPriceForSlugGet"></a>
# **nftDataLastFloorPriceForSlugGet**
> InlineResponse2004 nftDataLastFloorPriceForSlugGet(slug, opts)

Get last floor price for slug

Returns the most recent floor price for an NFT project slug

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let slug = "slug_example"; // String | NFT project slug
let opts = { 
  'chain': "chain_example" // String | Blockchain to search
};
apiInstance.nftDataLastFloorPriceForSlugGet(slug, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| NFT project slug | 
 **chain** | **String**| Blockchain to search | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataNftDetailsGet"></a>
# **nftDataNftDetailsGet**
> InlineResponse2003 nftDataNftDetailsGet(contractAddress, tokenId, opts)

Get details for an NFT

Returns all details for an NFT

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let contractAddress = "contractAddress_example"; // String | NFT contract address
let tokenId = "tokenId_example"; // String | NFT Token ID
let opts = { 
  'chain': "ethereum" // String | Blockchain to search
};
apiInstance.nftDataNftDetailsGet(contractAddress, tokenId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**| NFT contract address | 
 **tokenId** | **String**| NFT Token ID | 
 **chain** | **String**| Blockchain to search | [optional] [default to ethereum]

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataOwnedGet"></a>
# **nftDataOwnedGet**
> InlineResponse200 nftDataOwnedGet(walletAddress, opts)

Get all NFTs owned by a wallet address

Returns a list of all NFTs held within a particular wallet address

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let walletAddress = "walletAddress_example"; // String | Wallet address to query
let opts = { 
  'chain': "ethereum" // String | Blockchain to search
};
apiInstance.nftDataOwnedGet(walletAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletAddress** | **String**| Wallet address to query | 
 **chain** | **String**| Blockchain to search | [optional] [default to ethereum]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataOwnershipForContractAddressGet"></a>
# **nftDataOwnershipForContractAddressGet**
> InlineResponse20010 nftDataOwnershipForContractAddressGet(contractAddress, opts)

Get ownership data for contract address

Returns all wallets that owna particular NFT project slug

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let contractAddress = "contractAddress_example"; // String | NFT contract address
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'page': 1, // Number | Used to return the next set of items
  'sortDirection': "DESC" // String | Timestamp sort direction for the return results
};
apiInstance.nftDataOwnershipForContractAddressGet(contractAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**| NFT contract address | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **page** | **Number**| Used to return the next set of items | [optional] [default to 1]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataOwnershipForSlugGet"></a>
# **nftDataOwnershipForSlugGet**
> InlineResponse20010 nftDataOwnershipForSlugGet(slug, opts)

Get ownership data for slug

Returns all wallets that own a particular NFT project slug

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let slug = "slug_example"; // String | NFT project slug
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'page': 1, // Number | Used to return the next set of items
  'sortDirection': "DESC" // String | Timestamp sort direction for the return results
};
apiInstance.nftDataOwnershipForSlugGet(slug, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| NFT project slug | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **page** | **Number**| Used to return the next set of items | [optional] [default to 1]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataSalesEventsForContractAddressGet"></a>
# **nftDataSalesEventsForContractAddressGet**
> InlineResponse2007 nftDataSalesEventsForContractAddressGet(contractAddress, opts)

Get sales events for contract address

Returns all sales events for a particular NFT project slug

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let contractAddress = "contractAddress_example"; // String | NFT contract address
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'offset': 0, // Number | Used to return the next set of items
  'sortDirection': "DESC", // String | Timestamp sort direction for the return results
  'startDate': "startDate_example", // String | Starting timestamp for results
  'endDate': "endDate_example" // String | Ending timestamp for results
};
apiInstance.nftDataSalesEventsForContractAddressGet(contractAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**| NFT contract address | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **offset** | **Number**| Used to return the next set of items | [optional] [default to 0]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]
 **startDate** | **String**| Starting timestamp for results | [optional] 
 **endDate** | **String**| Ending timestamp for results | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataSalesEventsForSlugGet"></a>
# **nftDataSalesEventsForSlugGet**
> InlineResponse2007 nftDataSalesEventsForSlugGet(slug, opts)

Get sales events for slug

Returns all sales events for a particular NFT project slug

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let slug = "slug_example"; // String | NFT project slug
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'offset': 0, // Number | Used to return the next set of items
  'sortDirection': "DESC", // String | Timestamp sort direction for the return results
  'startDate': "startDate_example", // String | Starting timestamp for results
  'endDate': "endDate_example" // String | Ending timestamp for results
};
apiInstance.nftDataSalesEventsForSlugGet(slug, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| NFT project slug | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **offset** | **Number**| Used to return the next set of items | [optional] [default to 0]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]
 **startDate** | **String**| Starting timestamp for results | [optional] 
 **endDate** | **String**| Ending timestamp for results | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataSearchAttributesInContractAddressGet"></a>
# **nftDataSearchAttributesInContractAddressGet**
> InlineResponse20012 nftDataSearchAttributesInContractAddressGet(searchString, contractAddress, opts)

Search attributes in contract address

Returns all metadata attributes for an NFT contract address

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let searchString = "searchString_example"; // String | Expression to search in NFT attributes
let contractAddress = "contractAddress_example"; // String | NFT contract address
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'page': 1, // Number | Used to return the next set of items
  'sortField': "key", // String | 
  'sortDirection': "DESC", // String | Timestamp sort direction for the return results
  'includeTokens': false // Boolean | Include the corresponding token IDs in search results
};
apiInstance.nftDataSearchAttributesInContractAddressGet(searchString, contractAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchString** | **String**| Expression to search in NFT attributes | 
 **contractAddress** | **String**| NFT contract address | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **page** | **Number**| Used to return the next set of items | [optional] [default to 1]
 **sortField** | **String**|  | [optional] [default to key]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]
 **includeTokens** | **Boolean**| Include the corresponding token IDs in search results | [optional] [default to false]

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataSearchAttributesInSlugGet"></a>
# **nftDataSearchAttributesInSlugGet**
> InlineResponse20012 nftDataSearchAttributesInSlugGet(searchString, slug, opts)

Search attributes in slug

Returns all metadata attributes for a particular NFT project slug

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let searchString = "searchString_example"; // String | Expression to search in NFT attributes
let slug = "slug_example"; // String | NFT project slug
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'page': 1, // Number | Used to return the next set of items
  'sortField': "key", // String | 
  'sortDirection': "DESC", // String | Timestamp sort direction for the return results
  'includeTokens': false // Boolean | Include the corresponding token IDs in search results
};
apiInstance.nftDataSearchAttributesInSlugGet(searchString, slug, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchString** | **String**| Expression to search in NFT attributes | 
 **slug** | **String**| NFT project slug | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **page** | **Number**| Used to return the next set of items | [optional] [default to 1]
 **sortField** | **String**|  | [optional] [default to key]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]
 **includeTokens** | **Boolean**| Include the corresponding token IDs in search results | [optional] [default to false]

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataTransactionsByContractGet"></a>
# **nftDataTransactionsByContractGet**
> InlineResponse2002 nftDataTransactionsByContractGet(contractAddress, walletAddress, opts)

Get all NFTs Contract transactions by a wallet address

Produce a list of all NFTs transactions for a specific NFT contract within a particular wallet address

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let contractAddress = "contractAddress_example"; // String | NFT contract address
let walletAddress = "walletAddress_example"; // String | Wallet address to query
let opts = { 
  'chain': "ethereum" // String | Blockchain to search
};
apiInstance.nftDataTransactionsByContractGet(contractAddress, walletAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**| NFT contract address | 
 **walletAddress** | **String**| Wallet address to query | 
 **chain** | **String**| Blockchain to search | [optional] [default to ethereum]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataTransactionsGet"></a>
# **nftDataTransactionsGet**
> InlineResponse2001 nftDataTransactionsGet(walletAddress, opts)

Get all transactions by a wallet address

Returns a list of all transactions by a particular wallet address

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let walletAddress = "walletAddress_example"; // String | Wallet address to query
let opts = { 
  'chain': "ethereum" // String | Blockchain to search
};
apiInstance.nftDataTransactionsGet(walletAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletAddress** | **String**| Wallet address to query | 
 **chain** | **String**| Blockchain to search | [optional] [default to ethereum]

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataTransferEventsForContractAddressGet"></a>
# **nftDataTransferEventsForContractAddressGet**
> InlineResponse2009 nftDataTransferEventsForContractAddressGet(contractAddress, opts)

Get transfer events for contract address

Returns all transfer events for a particular NFT project slug

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let contractAddress = "contractAddress_example"; // String | NFT contract address
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'page': 1, // Number | Used to return the next set of items
  'sortDirection': "DESC", // String | Timestamp sort direction for the return results
  'startDate': "startDate_example", // String | Starting timestamp for results
  'endDate': "endDate_example" // String | Ending timestamp for results
};
apiInstance.nftDataTransferEventsForContractAddressGet(contractAddress, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**| NFT contract address | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **page** | **Number**| Used to return the next set of items | [optional] [default to 1]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]
 **startDate** | **String**| Starting timestamp for results | [optional] 
 **endDate** | **String**| Ending timestamp for results | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftDataTransferEventsForSlugGet"></a>
# **nftDataTransferEventsForSlugGet**
> InlineResponse2008 nftDataTransferEventsForSlugGet(slug, opts)

Get transfer events for slug

Returns all transfer events for a particular NFT project slug

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let slug = "slug_example"; // String | NFT project slug
let opts = { 
  'chain': "chain_example", // String | Blockchain to search
  'limit': 25, // Number | Number of results to return
  'page': 1, // Number | Used to return the next set of items
  'sortDirection': "DESC", // String | Timestamp sort direction for the return results
  'startDate': "startDate_example", // String | Starting timestamp for results
  'endDate': "endDate_example" // String | Ending timestamp for results
};
apiInstance.nftDataTransferEventsForSlugGet(slug, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| NFT project slug | 
 **chain** | **String**| Blockchain to search | [optional] 
 **limit** | **Number**| Number of results to return | [optional] [default to 25]
 **page** | **Number**| Used to return the next set of items | [optional] [default to 1]
 **sortDirection** | **String**| Timestamp sort direction for the return results | [optional] [default to DESC]
 **startDate** | **String**| Starting timestamp for results | [optional] 
 **endDate** | **String**| Ending timestamp for results | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

