# VerbwireApiDocumentation.StoreApi

All URIs are relative to *https://api.verbwire.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nftStoreFileFromUrlPost**](StoreApi.md#nftStoreFileFromUrlPost) | **POST** /nft/store/fileFromUrl | Upload a file via URL to IPFS
[**nftStoreFilePost**](StoreApi.md#nftStoreFilePost) | **POST** /nft/store/file | Upload a local file to IPFS
[**nftStoreMetadataFromImagePost**](StoreApi.md#nftStoreMetadataFromImagePost) | **POST** /nft/store/metadataFromImage | Upload local file as metadata to IPFS
[**nftStoreMetadataFromImageUrlPost**](StoreApi.md#nftStoreMetadataFromImageUrlPost) | **POST** /nft/store/metadataFromImageUrl | Upload a URL to IPFS as NFT metadata
[**nftStoreUploadDirectoryPost**](StoreApi.md#nftStoreUploadDirectoryPost) | **POST** /nft/store/uploadDirectory | Upload a directory to IPFS

<a name="nftStoreFileFromUrlPost"></a>
# **nftStoreFileFromUrlPost**
> InlineResponse2011 nftStoreFileFromUrlPost(fileUrl)

Upload a file via URL to IPFS

Uploads a file to IPFS from a provided url. A quick and seamless way to store a file in IPFS. This does not create a metadata json file that can be used as an NFT metadata.

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.StoreApi();
let fileUrl = "fileUrl_example"; // String | 

apiInstance.nftStoreFileFromUrlPost(fileUrl, (error, data, response) => {
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
 **fileUrl** | **String**|  | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="nftStoreFilePost"></a>
# **nftStoreFilePost**
> InlineResponse201 nftStoreFilePost(filePath)

Upload a local file to IPFS

Uploads a local file directly to IPFS. A quick and seamless way to store a file in IPFS. This does not create a metadata json file that can be used as an NFT metadata.

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.StoreApi();
let filePath = "filePath_example"; // File | 

apiInstance.nftStoreFilePost(filePath, (error, data, response) => {
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
 **filePath** | **File**|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="nftStoreMetadataFromImagePost"></a>
# **nftStoreMetadataFromImagePost**
> InlineResponse2013 nftStoreMetadataFromImagePost(filePathnamedescription)

Upload local file as metadata to IPFS

Creates a metadata json file from the provided local file, and uploads the metadata file directly to IPFS, all in one operation.

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.StoreApi();
let filePath = "filePath_example"; // File | 
let name = "name_example"; // String | 
let description = "description_example"; // String | 

apiInstance.nftStoreMetadataFromImagePost(filePathnamedescription, (error, data, response) => {
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
 **filePath** | **File**|  | 
 **name** | **String**|  | 
 **description** | **String**|  | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="nftStoreMetadataFromImageUrlPost"></a>
# **nftStoreMetadataFromImageUrlPost**
> InlineResponse2012 nftStoreMetadataFromImageUrlPost(fileUrlnamedescription)

Upload a URL to IPFS as NFT metadata

Creates a metadata json file from the provided URL and uploads the metadata file direcly to IPFS, all in one operation.

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.StoreApi();
let fileUrl = "fileUrl_example"; // String | 
let name = "name_example"; // String | 
let description = "description_example"; // String | 

apiInstance.nftStoreMetadataFromImageUrlPost(fileUrlnamedescription, (error, data, response) => {
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
 **fileUrl** | **String**|  | 
 **name** | **String**|  | 
 **description** | **String**|  | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="nftStoreUploadDirectoryPost"></a>
# **nftStoreUploadDirectoryPost**
> InlineResponse2014 nftStoreUploadDirectoryPost(filePath)

Upload a directory to IPFS

Uploads a directory of metadata json files to IPFS. Useful for creating nft collections. The files in your directory should be numbered, example &amp;#58; 1.json, 2.json, 3.json. You will need to upload all the files together at once. The uploaded files to IPFS will all be in the same IPFS directory. Once uploaded to IPFS the file extensions (.json) will be removed. Example &amp;#58; file \&quot;1.json\&quot; will show up as \&quot;1\&quot; in the IPFS directory

### Example
```javascript
import VerbwireApiDocumentation from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.StoreApi();
let filePath = "filePath_example"; // File | 

apiInstance.nftStoreUploadDirectoryPost(filePath, (error, data, response) => {
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
 **filePath** | **File**|  | 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

