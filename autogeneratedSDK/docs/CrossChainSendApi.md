# VerbwireApiDocumentation.CrossChainSendApi

All URIs are relative to *https://api.verbwire.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nftSendCrossChainSendPost**](CrossChainSendApi.md#nftSendCrossChainSendPost) | **POST** /nft/send/crossChainSend | Send your NFT across Chains
[**nftSendEnableCrossChainSendPost**](CrossChainSendApi.md#nftSendEnableCrossChainSendPost) | **POST** /nft/send/enableCrossChainSend | Enable Cross-chain Sends
[**nftSendQuickSendPost**](CrossChainSendApi.md#nftSendQuickSendPost) | **POST** /nft/send/quickSend | Send Quick-minted NFT across Chains

<a name="nftSendCrossChainSendPost"></a>
# **nftSendCrossChainSendPost**
> InlineResponse20014 nftSendCrossChainSendPost(sourceChaindestChaintokenIdsourceWalletAddressrecipientWalletAddress)

Send your NFT across Chains

Sends an NFT (minted from your created custom contract) from one block chain to another. Sending NFTs accross chains is a unique feature of Omnichain NFTs

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.CrossChainSendApi();
let sourceChain = "sourceChain_example"; // String | 
let destChain = "destChain_example"; // String | 
let tokenId = "tokenId_example"; // String | 
let sourceWalletAddress = "sourceWalletAddress_example"; // String | 
let recipientWalletAddress = "recipientWalletAddress_example"; // String | 

apiInstance.nftSendCrossChainSendPost(sourceChaindestChaintokenIdsourceWalletAddressrecipientWalletAddress, (error, data, response) => {
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
 **sourceChain** | **String**|  | 
 **destChain** | **String**|  | 
 **tokenId** | **String**|  | 
 **sourceWalletAddress** | **String**|  | 
 **recipientWalletAddress** | **String**|  | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="nftSendEnableCrossChainSendPost"></a>
# **nftSendEnableCrossChainSendPost**
> InlineResponse20014 nftSendEnableCrossChainSendPost(sourceChaindestChainsourceContractAddressdestContractAddress)

Enable Cross-chain Sends

Turn on the ability to send your NFT (minted with your created custom contract) across chains

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.CrossChainSendApi();
let sourceChain = "sourceChain_example"; // String | 
let destChain = "destChain_example"; // String | 
let sourceContractAddress = "sourceContractAddress_example"; // String | 
let destContractAddress = "destContractAddress_example"; // String | 

apiInstance.nftSendEnableCrossChainSendPost(sourceChaindestChainsourceContractAddressdestContractAddress, (error, data, response) => {
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
 **sourceChain** | **String**|  | 
 **destChain** | **String**|  | 
 **sourceContractAddress** | **String**|  | 
 **destContractAddress** | **String**|  | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="nftSendQuickSendPost"></a>
# **nftSendQuickSendPost**
> InlineResponse20014 nftSendQuickSendPost(sourceChaindestChaintokenIdsourceWalletAddressrecipientWalletAddress)

Send Quick-minted NFT across Chains

Sends a quick-minted NFT from one block chain to another. Sending NFTs accross chains is a unique feature of Omnichain NFTs

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.CrossChainSendApi();
let sourceChain = "sourceChain_example"; // String | 
let destChain = "destChain_example"; // String | 
let tokenId = "tokenId_example"; // String | 
let sourceWalletAddress = "sourceWalletAddress_example"; // String | 
let recipientWalletAddress = "recipientWalletAddress_example"; // String | 

apiInstance.nftSendQuickSendPost(sourceChaindestChaintokenIdsourceWalletAddressrecipientWalletAddress, (error, data, response) => {
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
 **sourceChain** | **String**|  | 
 **destChain** | **String**|  | 
 **tokenId** | **String**|  | 
 **sourceWalletAddress** | **String**|  | 
 **recipientWalletAddress** | **String**|  | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

