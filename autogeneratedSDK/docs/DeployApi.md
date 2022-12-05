# VerbwireApiDocumentation.DeployApi

All URIs are relative to *https://api.verbwire.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nftDeployDeployCollectionContractPost**](DeployApi.md#nftDeployDeployCollectionContractPost) | **POST** /nft/deploy/deployCollectionContract | Deploy a Collection Contract
[**nftDeployDeployCustomContractPost**](DeployApi.md#nftDeployDeployCustomContractPost) | **POST** /nft/deploy/deployCustomContract | Deploy a Custom Contract
[**nftUpdateInitCollectionContractPost**](DeployApi.md#nftUpdateInitCollectionContractPost) | **POST** /nft/update/initCollectionContract | Initialize your collection contract

<a name="nftDeployDeployCollectionContractPost"></a>
# **nftDeployDeployCollectionContractPost**
> InlineResponse20014 nftDeployDeployCollectionContractPost(contractNamecontractSymbolrecipientAddresschaincontractType)

Deploy a Collection Contract

Deploy a collection contract in seconds. You can deploy any of the provided three types of contracts (i) A standard ERC721 collection contract (ii) An ERC721A collection contract (iii) An Omnichain ERC721 contract. Note, an Omni chain contract gives you the the ability to send your NFTs across different blockchains

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DeployApi();
let contractName = "contractName_example"; // String | 
let contractSymbol = "contractSymbol_example"; // String | 
let recipientAddress = "recipientAddress_example"; // String | 
let chain = "chain_example"; // String | 
let contractType = "contractType_example"; // String | 

apiInstance.nftDeployDeployCollectionContractPost(contractNamecontractSymbolrecipientAddresschaincontractType, (error, data, response) => {
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
 **contractName** | **String**|  | 
 **contractSymbol** | **String**|  | 
 **recipientAddress** | **String**|  | 
 **chain** | **String**|  | 
 **contractType** | **String**|  | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="nftDeployDeployCustomContractPost"></a>
# **nftDeployDeployCustomContractPost**
> InlineResponse20014 nftDeployDeployCustomContractPost(contractNamecontractSymbolrecipientAddresschain)

Deploy a Custom Contract

Deploy a custom omnichain contract in seconds. A custom contract is different from a collection contract. Use a custom contract for providing NFT functionality in your applications.

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DeployApi();
let contractName = "contractName_example"; // String | 
let contractSymbol = "contractSymbol_example"; // String | 
let recipientAddress = "recipientAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftDeployDeployCustomContractPost(contractNamecontractSymbolrecipientAddresschain, (error, data, response) => {
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
 **contractName** | **String**|  | 
 **contractSymbol** | **String**|  | 
 **recipientAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="nftUpdateInitCollectionContractPost"></a>
# **nftUpdateInitCollectionContractPost**
> InlineResponse20014 nftUpdateInitCollectionContractPost(contractAddressmaxMintPerAddresstotalReserveQtytotalAllowlistQtymaxSupplymaxMintableBatchSizeroyaltiesInBpsroyaltiesAddressownerAddresstokenURIPrerevealbaseTokenURIallowListMintStartTimepublicSaleStartTimeallowlistMintPriceInWeipublicPriceInWeimetadataFrozenrecipientAddresschain)

Initialize your collection contract

Set the parameters of your deployed collection contract

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DeployApi();
let contractAddress = "contractAddress_example"; // String | 
let maxMintPerAddress = "maxMintPerAddress_example"; // String | 
let totalReserveQty = "totalReserveQty_example"; // String | 
let totalAllowlistQty = "totalAllowlistQty_example"; // String | 
let maxSupply = "maxSupply_example"; // String | 
let maxMintableBatchSize = "maxMintableBatchSize_example"; // String | 
let royaltiesInBps = "royaltiesInBps_example"; // String | 
let royaltiesAddress = "royaltiesAddress_example"; // String | 
let ownerAddress = "ownerAddress_example"; // String | 
let tokenURIPrereveal = "tokenURIPrereveal_example"; // String | 
let baseTokenURI = "baseTokenURI_example"; // String | 
let allowListMintStartTime = "allowListMintStartTime_example"; // String | 
let publicSaleStartTime = "publicSaleStartTime_example"; // String | 
let allowlistMintPriceInWei = "allowlistMintPriceInWei_example"; // String | 
let publicPriceInWei = "publicPriceInWei_example"; // String | 
let metadataFrozen = "metadataFrozen_example"; // String | 
let recipientAddress = "recipientAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftUpdateInitCollectionContractPost(contractAddressmaxMintPerAddresstotalReserveQtytotalAllowlistQtymaxSupplymaxMintableBatchSizeroyaltiesInBpsroyaltiesAddressownerAddresstokenURIPrerevealbaseTokenURIallowListMintStartTimepublicSaleStartTimeallowlistMintPriceInWeipublicPriceInWeimetadataFrozenrecipientAddresschain, (error, data, response) => {
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
 **contractAddress** | **String**|  | 
 **maxMintPerAddress** | **String**|  | 
 **totalReserveQty** | **String**|  | 
 **totalAllowlistQty** | **String**|  | 
 **maxSupply** | **String**|  | 
 **maxMintableBatchSize** | **String**|  | 
 **royaltiesInBps** | **String**|  | 
 **royaltiesAddress** | **String**|  | 
 **ownerAddress** | **String**|  | 
 **tokenURIPrereveal** | **String**|  | 
 **baseTokenURI** | **String**|  | 
 **allowListMintStartTime** | **String**|  | 
 **publicSaleStartTime** | **String**|  | 
 **allowlistMintPriceInWei** | **String**|  | 
 **publicPriceInWei** | **String**|  | 
 **metadataFrozen** | **String**|  | 
 **recipientAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

