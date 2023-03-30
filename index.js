const json = require("./config/api-docs.json");
const axios = require("axios");
const FormData = require("form-data");
var fs = require("fs");

module.exports = (apiKey) => {
  var module = {};

  // update  generated modules and functions start
  module.data = {}; /** * Get is the wallet address a holder of a token? * @param {string} walletAddress * @param {string} contractAddress * @param {string} chain * @returns {Promise} */
  module.data.isWalletHolderOfToken = function({
                                                 walletAddress,
                                                 contractAddress,
                                                 chain
                                               }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/isWalletHolderOfToken`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/isWalletHolderOfToken`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/isWalletHolderOfToken' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get all NFTs owned by a wallet address * @param {string} walletAddress * @param {string} chain * @returns {Promise} */
  module.data.owned = function({
                                 walletAddress,
                                 chain
                               }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/owned`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/owned`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/owned' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get all NFTs created by a wallet address * @param {string} walletAddress * @param {string} chain * @returns {Promise} */
  module.data.created = function({
                                   walletAddress,
                                   chain
                                 }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/created`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/created`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/created' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get all transactions by a wallet address * @param {string} walletAddress * @param {string} chain * @returns {Promise} */
  module.data.transactions = function({
                                        walletAddress,
                                        chain
                                      }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/transactions`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/transactions`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/transactions' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get all NFTs Contract transactions by a wallet address * @param {string} contractAddress * @param {string} walletAddress * @param {string} chain * @returns {Promise} */
  module.data.transactionsByContract = function({
                                                  contractAddress,
                                                  walletAddress,
                                                  chain
                                                }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/transactionsByContract`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/transactionsByContract`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/transactionsByContract' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get details for an NFT * @param {string} contractAddress * @param {string} tokenId * @param {string} chain * @returns {Promise} */
  module.data.nftDetails = function({
                                      contractAddress,
                                      tokenId,
                                      chain
                                    }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/nftDetails`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/nftDetails`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/nftDetails' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get last floor price for slug * @param {string} slug * @param {string} chain * @returns {Promise} */
  module.data.lastFloorPriceForSlug = function({
                                                 slug,
                                                 chain
                                               }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/lastFloorPriceForSlug`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/lastFloorPriceForSlug`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/lastFloorPriceForSlug' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get last floor price for contract address * @param {string} contractAddress * @param {string} chain * @returns {Promise} */
  module.data.lastFloorPriceForContractAddress = function({
                                                            contractAddress,
                                                            chain
                                                          }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/lastFloorPriceForContractAddress`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/lastFloorPriceForContractAddress`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/lastFloorPriceForContractAddress' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get floor prices for slug * @param {string} slug * @param {string} chain * @param {number} limit * @param {number} offset * @param {string} sortDirection * @param {string} startDate * @param {string} endDate * @returns {Promise} */
  module.data.floorPricesForSlug = function({
                                              slug,
                                              chain,
                                              limit,
                                              offset,
                                              sortDirection,
                                              startDate,
                                              endDate
                                            }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/floorPricesForSlug`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/floorPricesForSlug`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/floorPricesForSlug' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get floor prices for contract address * @param {string} contractAddress * @param {string} chain * @param {number} limit * @param {number} offset * @param {string} sortDirection * @param {string} startDate * @param {string} endDate * @returns {Promise} */
  module.data.floorPricesForContractAddress = function({
                                                         contractAddress,
                                                         chain,
                                                         limit,
                                                         offset,
                                                         sortDirection,
                                                         startDate,
                                                         endDate
                                                       }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/floorPricesForContractAddress`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/floorPricesForContractAddress`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/floorPricesForContractAddress' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get historical stats for slug * @param {string} slug * @param {string} chain * @param {number} limit * @param {number} offset * @param {string} sortDirection * @param {string} startDate * @param {string} endDate * @returns {Promise} */
  module.data.historicalStatsForSlug = function({
                                                  slug,
                                                  chain,
                                                  limit,
                                                  offset,
                                                  sortDirection,
                                                  startDate,
                                                  endDate
                                                }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/historicalStatsForSlug`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/historicalStatsForSlug`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/historicalStatsForSlug' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get historical stats for contract address * @param {string} contractAddress * @param {string} chain * @param {number} limit * @param {number} offset * @param {string} sortDirection * @param {string} startDate * @param {string} endDate * @returns {Promise} */
  module.data.historicalStatsForContractAddress = function({
                                                             contractAddress,
                                                             chain,
                                                             limit,
                                                             offset,
                                                             sortDirection,
                                                             startDate,
                                                             endDate
                                                           }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/historicalStatsForContractAddress`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/historicalStatsForContractAddress`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/historicalStatsForContractAddress' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get sales events for slug * @param {string} slug * @param {string} chain * @param {number} limit * @param {number} offset * @param {string} sortDirection * @param {string} startDate * @param {string} endDate * @returns {Promise} */
  module.data.salesEventsForSlug = function({
                                              slug,
                                              chain,
                                              limit,
                                              offset,
                                              sortDirection,
                                              startDate,
                                              endDate
                                            }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/salesEventsForSlug`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/salesEventsForSlug`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/salesEventsForSlug' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get sales events for contract address * @param {string} contractAddress * @param {string} chain * @param {number} limit * @param {number} offset * @param {string} sortDirection * @param {string} startDate * @param {string} endDate * @returns {Promise} */
  module.data.salesEventsForContractAddress = function({
                                                         contractAddress,
                                                         chain,
                                                         limit,
                                                         offset,
                                                         sortDirection,
                                                         startDate,
                                                         endDate
                                                       }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/salesEventsForContractAddress`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/salesEventsForContractAddress`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/salesEventsForContractAddress' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get transfer events for slug * @param {string} slug * @param {string} chain * @param {number} limit * @param {number} page * @param {string} sortDirection * @param {string} startDate * @param {string} endDate * @returns {Promise} */
  module.data.transferEventsForSlug = function({
                                                 slug,
                                                 chain,
                                                 limit,
                                                 page,
                                                 sortDirection,
                                                 startDate,
                                                 endDate
                                               }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/transferEventsForSlug`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/transferEventsForSlug`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/transferEventsForSlug' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get transfer events for contract address * @param {string} contractAddress * @param {string} chain * @param {number} limit * @param {number} page * @param {string} sortDirection * @param {string} startDate * @param {string} endDate * @returns {Promise} */
  module.data.transferEventsForContractAddress = function({
                                                            contractAddress,
                                                            chain,
                                                            limit,
                                                            page,
                                                            sortDirection,
                                                            startDate,
                                                            endDate
                                                          }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/transferEventsForContractAddress`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/transferEventsForContractAddress`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/transferEventsForContractAddress' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get ownership data for slug * @param {string} slug * @param {string} chain * @param {number} limit * @param {number} page * @param {string} sortDirection * @returns {Promise} */
  module.data.ownershipForSlug = function({
                                            slug,
                                            chain,
                                            limit,
                                            page,
                                            sortDirection
                                          }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/ownershipForSlug`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/ownershipForSlug`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/ownershipForSlug' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get ownership data for contract address * @param {string} contractAddress * @param {string} chain * @param {number} limit * @param {number} page * @param {string} sortDirection * @returns {Promise} */
  module.data.ownershipForContractAddress = function({
                                                       contractAddress,
                                                       chain,
                                                       limit,
                                                       page,
                                                       sortDirection
                                                     }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/ownershipForContractAddress`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/ownershipForContractAddress`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/ownershipForContractAddress' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get all indexed collections * @param {string} chain * @param {number} limit * @param {number} page * @param {string} sortField * @param {string} sortInterval * @param {string} sortDirection * @returns {Promise} */
  module.data.collectionsall = function({
                                          chain,
                                          limit,
                                          page,
                                          sortField,
                                          sortInterval,
                                          sortDirection
                                        }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/collections/all`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/collections/all`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/collections/all' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Search all indexed collections * @param {string} searchString * @param {string} chain * @param {number} limit * @param {number} page * @param {string} sortField * @param {string} sortInterval * @param {string} sortDirection * @returns {Promise} */
  module.data.collectionssearch = function({
                                             searchString,
                                             chain,
                                             limit,
                                             page,
                                             sortField,
                                             sortInterval,
                                             sortDirection
                                           }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/collections/search`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/collections/search`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/collections/search' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get attributes for slug * @param {string} slug * @param {string} chain * @param {number} limit * @param {number} page * @param {string} sortField * @param {string} sortDirection * @returns {Promise} */
  module.data.attributesForSlug = function({
                                             slug,
                                             chain,
                                             limit,
                                             page,
                                             sortField,
                                             sortDirection
                                           }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/attributesForSlug`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/attributesForSlug`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/attributesForSlug' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get attributes for contract address * @param {string} contractAddress * @param {string} chain * @param {number} limit * @param {number} page * @param {string} sortField * @param {string} sortDirection * @returns {Promise} */
  module.data.attributesForContractAddress = function({
                                                        contractAddress,
                                                        chain,
                                                        limit,
                                                        page,
                                                        sortField,
                                                        sortDirection
                                                      }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/attributesForContractAddress`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/attributesForContractAddress`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/attributesForContractAddress' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get attributes (with tokens) for slug * @param {string} slug * @param {string} chain * @param {number} limit * @param {number} page * @param {string} sortField * @param {string} sortDirection * @returns {Promise} */
  module.data.attributesWithTokensForSlug = function({
                                                       slug,
                                                       chain,
                                                       limit,
                                                       page,
                                                       sortField,
                                                       sortDirection
                                                     }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/attributesWithTokensForSlug`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/attributesWithTokensForSlug`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/attributesWithTokensForSlug' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get attributes (with tokens) for contract address * @param {string} contractAddress * @param {string} chain * @param {number} limit * @param {number} page * @param {string} sortField * @param {string} sortDirection * @returns {Promise} */
  module.data.attributesWithTokensForContractAddress = function({
                                                                  contractAddress,
                                                                  chain,
                                                                  limit,
                                                                  page,
                                                                  sortField,
                                                                  sortDirection
                                                                }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/attributesWithTokensForContractAddress`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/attributesWithTokensForContractAddress`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/attributesWithTokensForContractAddress' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Search attributes in slug * @param {string} searchString * @param {string} slug * @param {string} chain * @param {number} limit * @param {number} page * @param {string} sortField * @param {string} sortDirection * @param {boolean} includeTokens * @returns {Promise} */
  module.data.searchAttributesInSlug = function({
                                                  searchString,
                                                  slug,
                                                  chain,
                                                  limit,
                                                  page,
                                                  sortField,
                                                  sortDirection,
                                                  includeTokens
                                                }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/searchAttributesInSlug`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/searchAttributesInSlug`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/searchAttributesInSlug' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Search attributes in contract address * @param {string} searchString * @param {string} contractAddress * @param {string} chain * @param {number} limit * @param {number} page * @param {string} sortField * @param {string} sortDirection * @param {boolean} includeTokens * @returns {Promise} */
  module.data.searchAttributesInContractAddress = function({
                                                             searchString,
                                                             contractAddress,
                                                             chain,
                                                             limit,
                                                             page,
                                                             sortField,
                                                             sortDirection,
                                                             includeTokens
                                                           }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/data/searchAttributesInContractAddress`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/data/searchAttributesInContractAddress`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/data/searchAttributesInContractAddress' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  };
  module.deploy = {}; /** * Deploy a Collection Contract * @param {string} contractName * @param {string} contractSymbol * @param {string} recipientAddress * @param {string} chain * @param {string} contractType * @returns {Promise} */
  module.deploy.deployCollectionContract = function({
                                                      contractName,
                                                      contractSymbol,
                                                      recipientAddress,
                                                      chain,
                                                      contractType
                                                    }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/deploy/deployCollectionContract`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/deploy/deployCollectionContract`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/deploy/deployCollectionContract',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Deploy a Simple Contract * @param {string} contractName * @param {string} contractSymbol * @param {string} recipientAddress * @param {string} chain * @param {string} contractType * @returns {Promise} */
  module.deploy.deploySimpleContract = function({
                                                  contractName,
                                                  contractSymbol,
                                                  recipientAddress,
                                                  chain,
                                                  contractType
                                                }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/deploy/deploySimpleContract`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/deploy/deploySimpleContract`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/deploy/deploySimpleContract',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Update Collection Contract * @param {string} contractAddress * @param {string} chain * @param {string} tokenURIPrereveal * @param {string} allowListMintStartTime * @param {string} publicSaleStartTime * @param {string} allowlistMintPriceInWei * @param {string} publicPriceInWei * @param {string} metadataFrozen * @param {string} baseTokenURI * @returns {Promise} */
  module.deploy.updateContract = function({
                                            contractAddress,
                                            chain,
                                            tokenURIPrereveal,
                                            allowListMintStartTime,
                                            publicSaleStartTime,
                                            allowlistMintPriceInWei,
                                            publicPriceInWei,
                                            metadataFrozen,
                                            baseTokenURI
                                          }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/deploy/updateContract`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/deploy/updateContract`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/deploy/updateContract',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Withdraw Funds * @param {string} contractAddress * @param {string} withdrawAddress * @param {string} chain * @returns {Promise} */
  module.deploy.updatewithdrawFunds = function({
                                                 contractAddress,
                                                 withdrawAddress,
                                                 chain
                                               }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/deploy/update/withdrawFunds`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/deploy/update/withdrawFunds`].post.requestBody.content["application/x-www-form-urlencoded"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/deploy/update/withdrawFunds',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  };
  module.update = {}; /** * Initialize your collection contract * @param {string} contractAddress * @param {string} maxMintPerAddress * @param {string} totalReserveQty * @param {string} totalAllowlistQty * @param {string} maxSupply * @param {string} maxMintableBatchSize * @param {string} royaltiesInBps * @param {string} royaltiesAddress * @param {string} ownerAddress * @param {string} tokenURIPrereveal * @param {string} baseTokenURI * @param {string} allowListMintStartTime * @param {string} publicSaleStartTime * @param {string} allowlistMintPriceInWei * @param {string} publicPriceInWei * @param {string} metadataFrozen * @param {string} chain * @returns {Promise} */
  module.update.initCollectionContract = function({
                                                    contractAddress,
                                                    maxMintPerAddress,
                                                    totalReserveQty,
                                                    totalAllowlistQty,
                                                    maxSupply,
                                                    maxMintableBatchSize,
                                                    royaltiesInBps,
                                                    royaltiesAddress,
                                                    ownerAddress,
                                                    tokenURIPrereveal,
                                                    baseTokenURI,
                                                    allowListMintStartTime,
                                                    publicSaleStartTime,
                                                    allowlistMintPriceInWei,
                                                    publicPriceInWei,
                                                    metadataFrozen,
                                                    chain
                                                  }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/update/initCollectionContract`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/update/initCollectionContract`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/update/initCollectionContract',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Transfer Token * @param {string} contractAddress * @param {string} fromAddress * @param {string} toAddress * @param {string} tokenId * @param {string} chain * @returns {Promise} */
  module.update.transferToken = function({
                                           contractAddress,
                                           fromAddress,
                                           toAddress,
                                           tokenId,
                                           chain
                                         }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/update/transferToken`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/update/transferToken`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/update/transferToken',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Update NFT Metadata * @param {string} contractAddress * @param {string} newTokenURI * @param {string} tokenId * @param {string} chain * @returns {Promise} */
  module.update.updateTokenMetadata = function({
                                                 contractAddress,
                                                 newTokenURI,
                                                 tokenId,
                                                 chain
                                               }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/update/updateTokenMetadata`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/update/updateTokenMetadata`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/update/updateTokenMetadata',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Freeze NFT Metadata * @param {string} contractAddress * @param {string} chain * @returns {Promise} */
  module.update.freezeMetadata = function({
                                            contractAddress,
                                            chain
                                          }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/update/freezeMetadata`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/update/freezeMetadata`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/update/freezeMetadata',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Set Mint Price * @param {string} contractAddress * @param {string} mintPriceInWei * @param {string} chain * @returns {Promise} */
  module.update.setMintPrice = function({
                                          contractAddress,
                                          mintPriceInWei,
                                          chain
                                        }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/update/setMintPrice`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/update/setMintPrice`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/update/setMintPrice',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Burn NFT * @param {string} contractAddress * @param {string} tokenId * @param {string} fromAddress * @param {string} quantity * @param {string} contractType * @param {string} chain * @returns {Promise} */
  module.update.burn = function({
                                  contractAddress,
                                  tokenId,
                                  fromAddress,
                                  quantity,
                                  contractType,
                                  chain
                                }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/update/burn`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/update/burn`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/update/burn',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Transfer Contract Operator * @param {string} contractAddress * @param {string} newOperatorAddress * @param {string} chain * @returns {Promise} */
  module.update.transferOperator = function({
                                              contractAddress,
                                              newOperatorAddress,
                                              chain
                                            }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/update/transferOperator`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/update/transferOperator`].post.requestBody.content["application/x-www-form-urlencoded"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/update/transferOperator',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Add addresses to Allowlist * @param {string} contractAddress * @param {string} addresses * @param {string} mintSlots * @param {string} chain * @returns {Promise} */
  module.update.addToAllowList = function({
                                            contractAddress,
                                            addresses,
                                            mintSlots,
                                            chain
                                          }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/update/addToAllowList`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/update/addToAllowList`].post.requestBody.content["application/x-www-form-urlencoded"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/update/addToAllowList',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  };
  module.mint = {}; /** * Quick mint Omnichain NFT from image * @param {string} filePath * @param {string} name * @param {string} description * @param {string} recipientAddress * @param {string} allowPlatformToOperateToken * @param {string} data * @param {string} chain * @returns {Promise} */
  module.mint.quickMintFromFile = function({
                                             filePath,
                                             name,
                                             description,
                                             recipientAddress,
                                             allowPlatformToOperateToken,
                                             data,
                                             chain
                                           }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/mint/quickMintFromFile`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/mint/quickMintFromFile`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/mint/quickMintFromFile',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Quick mint from Metadata URL * @param {string} metadataUrl * @param {string} recipientAddress * @param {string} allowPlatformToOperateToken * @param {string} chain * @returns {Promise} */
  module.mint.quickMintFromMetadataUrl = function({
                                                    metadataUrl,
                                                    recipientAddress,
                                                    allowPlatformToOperateToken,
                                                    chain
                                                  }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/mint/quickMintFromMetadataUrl`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/mint/quickMintFromMetadataUrl`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/mint/quickMintFromMetadataUrl',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Quick mint Omnichain NFT from Metadata * @param {string} imageUrl * @param {string} name * @param {string} description * @param {string} recipientAddress * @param {string} data * @param {string} chain * @returns {Promise} */
  module.mint.quickMintFromMetadata = function({
                                                 imageUrl,
                                                 name,
                                                 description,
                                                 recipientAddress,
                                                 data,
                                                 chain
                                               }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/mint/quickMintFromMetadata`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/mint/quickMintFromMetadata`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/mint/quickMintFromMetadata',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Mint NFT from image * @param {string} filePath * @param {string} name * @param {string} description * @param {string} contractAddress * @param {string} recipientAddress * @param {string} allowPlatformToOperateToken * @param {string} data * @param {string} quantity * @param {string} tokenId * @param {string} contractType * @param {string} chain * @returns {Promise} */
  module.mint.mintFromFile = function({
                                        filePath,
                                        name,
                                        description,
                                        contractAddress,
                                        recipientAddress,
                                        allowPlatformToOperateToken,
                                        data,
                                        quantity,
                                        tokenId,
                                        contractType,
                                        chain
                                      }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/mint/mintFromFile`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/mint/mintFromFile`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/mint/mintFromFile',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Mint NFT from Metadata URL * @param {string} metadataUrl * @param {string} contractAddress * @param {string} recipientAddress * @param {string} quantity * @param {string} tokenId * @param {string} contractType * @param {string} chain * @param {string} allowPlatformToOperateToken * @returns {Promise} */
  module.mint.mintFromMetadataUrl = function({
                                               metadataUrl,
                                               contractAddress,
                                               recipientAddress,
                                               quantity,
                                               tokenId,
                                               contractType,
                                               chain,
                                               allowPlatformToOperateToken
                                             }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/mint/mintFromMetadataUrl`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/mint/mintFromMetadataUrl`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/mint/mintFromMetadataUrl',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Mint NFT from metadata * @param {string} imageUrl * @param {string} name * @param {string} description * @param {string} contractAddress * @param {string} recipientAddress * @param {string} data * @param {string} quantity * @param {string} tokenId * @param {string} contractType * @param {string} chain * @returns {Promise} */
  module.mint.mintFromMetadata = function({
                                            imageUrl,
                                            name,
                                            description,
                                            contractAddress,
                                            recipientAddress,
                                            data,
                                            quantity,
                                            tokenId,
                                            contractType,
                                            chain
                                          }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/mint/mintFromMetadata`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/mint/mintFromMetadata`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/mint/mintFromMetadata',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Collection Mint to a Wallet Address * @param {string} mintQty * @param {string} contractAddress * @param {string} recipientAddress * @param {string} chain * @returns {Promise} */
  module.mint.collectionReserveMint = function({
                                                 mintQty,
                                                 contractAddress,
                                                 recipientAddress,
                                                 chain
                                               }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/mint/collectionReserveMint`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/mint/collectionReserveMint`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/mint/collectionReserveMint',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Create Token * @param {string} metadataUrl * @param {string} tokenInitialSupply * @param {string} contractAddress * @param {string} recipientAddress * @param {string} allowPlatformToOperateToken * @param {string} chain * @returns {Promise} */
  module.mint.createToken1155 = function({
                                           metadataUrl,
                                           tokenInitialSupply,
                                           contractAddress,
                                           recipientAddress,
                                           allowPlatformToOperateToken,
                                           chain
                                         }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/mint/createToken1155`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/mint/createToken1155`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/mint/createToken1155',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  };
  module.store = {}; /** * Upload a local file to IPFS * @param {string} filePath * @returns {Promise} */
  module.store.file = function({
                                 filePath
                               }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/store/file`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/store/file`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/store/file',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Upload a file via URL to IPFS * @param {string} fileUrl * @returns {Promise} */
  module.store.fileFromUrl = function({
                                        fileUrl
                                      }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/store/fileFromUrl`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/store/fileFromUrl`].post.requestBody.content["application/x-www-form-urlencoded"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/store/fileFromUrl',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Upload a URL to IPFS as NFT metadata * @param {string} fileUrl * @param {string} name * @param {string} description * @returns {Promise} */
  module.store.metadataFromImageUrl = function({
                                                 fileUrl,
                                                 name,
                                                 description
                                               }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/store/metadataFromImageUrl`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/store/metadataFromImageUrl`].post.requestBody.content["application/x-www-form-urlencoded"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/store/metadataFromImageUrl',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Upload local file as metadata to IPFS * @param {string} filePath * @param {string} name * @param {string} description * @param {string} data * @returns {Promise} */
  module.store.metadataFromImage = function({
                                              filePath,
                                              name,
                                              description,
                                              data
                                            }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/store/metadataFromImage`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/store/metadataFromImage`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/store/metadataFromImage',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Upload a directory to IPFS * @param {string} filePath * @returns {Promise} */
  module.store.uploadDirectory = function({
                                            filePath
                                          }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/store/uploadDirectory`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/store/uploadDirectory`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (let i = 0; i < req.filePath.length; i++) {
        data.append("filePath", fs.createReadStream(req.filePath[i]));
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/store/uploadDirectory',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  };
  module.send = {}; /** * Send Quick-minted NFT across Chains * @param {string} sourceChain * @param {string} destChain * @param {string} tokenId * @param {string} sourceWalletAddress * @param {string} recipientWalletAddress * @returns {Promise} */
  module.send.quickSend = function({
                                     sourceChain,
                                     destChain,
                                     tokenId,
                                     sourceWalletAddress,
                                     recipientWalletAddress
                                   }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/send/quickSend`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/send/quickSend`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/send/quickSend',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Enable Cross-chain Sends * @param {string} sourceChain * @param {string} destChain * @param {string} sourceContractAddress * @param {string} destContractAddress * @returns {Promise} */
  module.send.enableCrossChainSend = function({
                                                sourceChain,
                                                destChain,
                                                sourceContractAddress,
                                                destContractAddress
                                              }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/send/enableCrossChainSend`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/send/enableCrossChainSend`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/send/enableCrossChainSend',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Send your NFT across Chains * @param {string} sourceChain * @param {string} destChain * @param {string} tokenId * @param {string} sourceWalletAddress * @param {string} recipientWalletAddress * @param {string} sourceContractAddress * @returns {Promise} */
  module.send.crossChainSend = function({
                                          sourceChain,
                                          destChain,
                                          tokenId,
                                          sourceWalletAddress,
                                          recipientWalletAddress,
                                          sourceContractAddress
                                        }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/send/crossChainSend`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/send/crossChainSend`].post.requestBody.content["multipart/form-data"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/send/crossChainSend',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  };
  module.user = {}; /** * Retrieve deployed contracts * @returns {Promise} */
  module.user.deployedContracts = function({}) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/userOps/deployedContracts`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/userOps/deployedContracts`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/userOps/deployedContracts' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Retrieve your minted NFTs * @returns {Promise} */
  module.user.nftsMinted = function({}) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/userOps/nftsMinted`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/userOps/nftsMinted`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/userOps/nftsMinted' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Retrieve your uploaded IPFS files * @returns {Promise} */
  module.user.ipfsUploads = function({}) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/userOps/ipfsUploads`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/userOps/ipfsUploads`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/userOps/ipfsUploads' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Retrieve specific transaction details * @param {string} transactionId * @returns {Promise} */
  module.user.transactionDetails = function({
                                              transactionId
                                            }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/userOps/transactionDetails`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/userOps/transactionDetails`].post.requestBody.content["application/x-www-form-urlencoded"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/userOps/transactionDetails',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get Payee * @param {string} contractAddress * @param {string} index * @param {string} chain * @returns {Promise} */
  module.user.payeeAtIndex = function({
                                        contractAddress,
                                        index,
                                        chain
                                      }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/userOps/payeeAtIndex`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/userOps/payeeAtIndex`].post.requestBody.content["application/x-www-form-urlencoded"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/userOps/payeeAtIndex',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get Allowlist Shares * @param {string} contractAddress * @param {string} allowListAddress * @param {string} chain * @returns {Promise} */
  module.user.allowListSharesForAddress = function({
                                                     contractAddress,
                                                     allowListAddress,
                                                     chain
                                                   }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/userOps/allowListSharesForAddress`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/userOps/allowListSharesForAddress`].post.requestBody.content["application/x-www-form-urlencoded"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/userOps/allowListSharesForAddress',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get Payee Payment Details * @param {string} contractAddress * @param {string} payeeAddress * @param {string} chain * @returns {Promise} */
  module.user.contractPaymentDetails = function({
                                                  contractAddress,
                                                  payeeAddress,
                                                  chain
                                                }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/userOps/contractPaymentDetails`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/userOps/contractPaymentDetails`].post.requestBody.content["application/x-www-form-urlencoded"].schema.properties);
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        if (req[x] !== undefined) {
          data.append(x, req[x]);
        }
      }
      var config = {
        method: 'post',
        url: 'https://api.verbwire.com/v1/nft/userOps/contractPaymentDetails',
        headers: {
          'X-API-Key': apiKey,
          ...data.getHeaders()
        },
        data: data
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get contract balance * @param {string} contractAddress * @param {string} chain * @returns {Promise} */
  module.user.contractBalance = function({
                                           contractAddress,
                                           chain
                                         }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/userOps/contractBalance`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/userOps/contractBalance`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/userOps/contractBalance' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  }; /** * Get Contract Details * @param {string} contractAddress * @param {string} chain * @returns {Promise} */
  module.user.contractDetails = function({
                                           contractAddress,
                                           chain
                                         }) {
    return new Promise((resolve) => {
      let req = arguments[0];
      let methodType = JSON.stringify(json.paths[`/nft/userOps/contractDetails`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(json.paths[`/nft/userOps/contractDetails`].get.parameters);
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          if (req[myObj[k]["name"]] !== undefined) {
            reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
          }
        }
      }
      var config = {
        method: 'get',
        url: 'https://api.verbwire.com/v1/nft/userOps/contractDetails' + reqData,
        headers: {
          accept: 'application/json',
          'X-API-Key': apiKey,
        },
      };
      axios(config).then(function(response) {
        resolve(response.data);
      }).catch(function(error) {
        resolve(error);
      });
    });
  };
  // update  generated modules and functions end

  return module;
};
