# VerbwireApiDocumentation.BurnApi

All URIs are relative to *https://api.verbwire.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nftDeployBurnPost**](BurnApi.md#nftDeployBurnPost) | **POST** /nft/deploy/burn | Burn NFT

<a name="nftDeployBurnPost"></a>
# **nftDeployBurnPost**
> InlineResponse20014 nftDeployBurnPost(contractAddresstokenIdchain)

Burn NFT

Burn an NFT. You can burn only NFTs created from your own collection contract.

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.BurnApi();
let contractAddress = "contractAddress_example"; // String | 
let tokenId = "tokenId_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftDeployBurnPost(contractAddresstokenIdchain, (error, data, response) => {
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
 **tokenId** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

