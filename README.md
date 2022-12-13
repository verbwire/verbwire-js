# Verbwire Javascript Library

[![npm version](https://badge.fury.io/js/verbwire.svg)](https://badge.fury.io/js/verbwire) [![Downloads](https://img.shields.io/npm/dm/verbwire.svg)](https://www.npmjs.com/package/verbwire) [![Try on RunKit](https://badge.runkitcdn.com/verbwire.svg)](https://runkit.com/npm/verbwire)

The official javascript client library for the [Verbwire API][1].

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Install](#install)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)

## Install

```console
$ npm install verbwire
```

## Getting Started

There are a number of resources available to learn more about the Verbwire API. We recommend starting with the [Quickstart Guide][5] on our documentation page. 

Each API call is mapped to a function on the javascript library 1-to-1. i.e. calling and endpoint at https://api.verbwire.com/v1/nft/data/owned can be called as follows with the library:

```js
const verbwire = require('verbwire')('YOUR_API_KEY');

verbwire.data.owned({
        walletAddress: "0x.....",
    }).then(function(response) {
        console.log(response);
    });
```

[The full API documentation is here][6]

There are a number of sample projects in our [Github Repo][7]. Feel free to use these as a starting point for your projects.

There are also a number of [community projects][8] available on our website for reference. We continue to add more and more every day. If you've built a project using Verbwire and would like to be featured, please [reach out to us][10].

Finally there are a number of sample API [recipes][11] that can be used for quick reference.

## Usage

The package needs to be configured with your account's secret key, which is
available in the [Verbwire Dashboard][3]. Require it with the key's
value:

```js
const verbwire = require('verbwire')('YOUR_API_KEY');

const response = await verbwire.mint.quickMintFromFile({
     chain: 'ethereum',
     filePath: 'myPicture.jpg',
     recipientAddress: 'YOUR_WALLET_ADDRESS',
});

console.log(response);
```

Every method returns a chainable promise which can be used like this:

```js
const verbwire = require('verbwire')('YOUR_API_KEY');

verbwire.data.lastFloorPriceForSlug({ 
        slug: "boredapeyachtclub"
    }).then(function(response) {
        console.log(response);
    });
```

## License

[MIT][9]

[1]: https://verbwire.com
[2]: https://docs.verbwire.com/
[3]: https://www.verbwire.com/dashboard/apikeys
[5]: https://docs.verbwire.com/docs/verbwire-quickstart-guide 
[6]: https://docs.verbwire.com/reference/getting-started-with-your-api 
[7]: https://github.com/verbwire 
[8]: https://www.verbwire.com/community 
[9]: https://github.com/verbwire/verbwire-js/blob/master/LICENSE
[10]: mailto:support@verbwire.com
[11]: https://docs.verbwire.com/recipes
