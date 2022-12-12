const json = require("./config/api-docs.json");
const axios = require("axios");
const FormData = require("form-data");
var fs = require("fs");

module.exports = (apiKey) => {
  var module = {};

  // update  generated modules and functions start
  module.data = {};
  module.data.owned = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/data/owned`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/owned`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url: "https://api.verbwire.com/v1/nft/data/owned" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.created = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/data/created`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/created`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url: "https://api.verbwire.com/v1/nft/data/created" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.transactions = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/data/transactions`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/transactions`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url: "https://api.verbwire.com/v1/nft/data/transactions" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.transactionsByContract = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/transactionsByContract`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/transactionsByContract`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/transactionsByContract" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.nftDetails = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/data/nftDetails`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/nftDetails`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url: "https://api.verbwire.com/v1/nft/data/nftDetails" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.lastFloorPriceForSlug = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/lastFloorPriceForSlug`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/lastFloorPriceForSlug`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/lastFloorPriceForSlug" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.lastFloorPriceForContractAddress = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/lastFloorPriceForContractAddress`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/lastFloorPriceForContractAddress`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/lastFloorPriceForContractAddress" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.floorPricesForSlug = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/floorPricesForSlug`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/floorPricesForSlug`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/floorPricesForSlug" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.floorPricesForContractAddress = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/floorPricesForContractAddress`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/floorPricesForContractAddress`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/floorPricesForContractAddress" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.historicalStatsForSlug = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/historicalStatsForSlug`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/historicalStatsForSlug`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/historicalStatsForSlug" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.historicalStatsForContractAddress = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/historicalStatsForContractAddress`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/historicalStatsForContractAddress`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/historicalStatsForContractAddress" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.salesEventsForSlug = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/salesEventsForSlug`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/salesEventsForSlug`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/salesEventsForSlug" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.salesEventsForContractAddress = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/salesEventsForContractAddress`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/salesEventsForContractAddress`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/salesEventsForContractAddress" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.transferEventsForSlug = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/transferEventsForSlug`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/transferEventsForSlug`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/transferEventsForSlug" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.transferEventsForContractAddress = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/transferEventsForContractAddress`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/transferEventsForContractAddress`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/transferEventsForContractAddress" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.ownershipForSlug = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/data/ownershipForSlug`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/ownershipForSlug`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url: "https://api.verbwire.com/v1/nft/data/ownershipForSlug" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.ownershipForContractAddress = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/ownershipForContractAddress`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/ownershipForContractAddress`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/ownershipForContractAddress" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.collectionsall = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/data/collections/all`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/collections/all`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url: "https://api.verbwire.com/v1/nft/data/collections/all" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.collectionssearch = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/collections/search`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/collections/search`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/collections/search" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.attributesForSlug = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/attributesForSlug`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/attributesForSlug`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url: "https://api.verbwire.com/v1/nft/data/attributesForSlug" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.attributesForContractAddress = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/attributesForContractAddress`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/attributesForContractAddress`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/attributesForContractAddress" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.attributesWithTokensForSlug = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/attributesWithTokensForSlug`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/attributesWithTokensForSlug`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/attributesWithTokensForSlug" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.attributesWithTokensForContractAddress = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/attributesWithTokensForContractAddress`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/attributesWithTokensForContractAddress`].get
          .parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/attributesWithTokensForContractAddress" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.searchAttributesInSlug = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/searchAttributesInSlug`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/searchAttributesInSlug`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/searchAttributesInSlug" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.data.searchAttributesInContractAddress = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/data/searchAttributesInContractAddress`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/data/searchAttributesInContractAddress`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/data/searchAttributesInContractAddress" +
          reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.deploy = {};
  module.deploy.deployCollectionContract = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/deploy/deployCollectionContract`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/deploy/deployCollectionContract`].post.requestBody
          .content["multipart/form-data"].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/deploy/deployCollectionContract",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.deploy.deployCustomContract = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/deploy/deployCustomContract`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/deploy/deployCustomContract`].post.requestBody.content[
          "multipart/form-data"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/deploy/deployCustomContract",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.deploy.burn = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/deploy/burn`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/deploy/burn`].post.requestBody.content[
          "multipart/form-data"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/deploy/burn",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.deploy.updateContract = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/deploy/updateContract`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/deploy/updateContract`].post.requestBody.content[
          "multipart/form-data"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/deploy/updateContract",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.deploy.updatewithdrawFunds = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/deploy/update/withdrawFunds`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/deploy/update/withdrawFunds`].post.requestBody.content[
          "application/x-www-form-urlencoded"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/deploy/update/withdrawFunds",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.update = {};
  module.update.initCollectionContract = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/update/initCollectionContract`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/update/initCollectionContract`].post.requestBody
          .content["multipart/form-data"].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/update/initCollectionContract",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.update.transferOperator = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/update/transferOperator`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/update/transferOperator`].post.requestBody.content[
          "application/x-www-form-urlencoded"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/update/transferOperator",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.update.addToAllowList = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/update/addToAllowList`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/update/addToAllowList`].post.requestBody.content[
          "application/x-www-form-urlencoded"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/update/addToAllowList",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.mint = {};
  module.mint.quickMintFromFile = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/mint/quickMintFromFile`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/mint/quickMintFromFile`].post.requestBody.content[
          "multipart/form-data"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/mint/quickMintFromFile",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.mint.quickMintFromMetadataUrl = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/mint/quickMintFromMetadataUrl`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/mint/quickMintFromMetadataUrl`].post.requestBody
          .content["multipart/form-data"].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/mint/quickMintFromMetadataUrl",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.mint.collectionReserveMint = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/mint/collectionReserveMint`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/mint/collectionReserveMint`].post.requestBody.content[
          "multipart/form-data"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/mint/collectionReserveMint",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.mint.customContractMintFromMetadataUrl = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/mint/customContractMintFromMetadataUrl`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/mint/customContractMintFromMetadataUrl`].post
          .requestBody.content["multipart/form-data"].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/mint/customContractMintFromMetadataUrl",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.mint.customContractMintFromFile = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/mint/customContractMintFromFile`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/mint/customContractMintFromFile`].post.requestBody
          .content["multipart/form-data"].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/mint/customContractMintFromFile",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.store = {};
  module.store.file = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/store/file`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/store/file`].post.requestBody.content[
          "multipart/form-data"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/store/file",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.store.fileFromUrl = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/store/fileFromUrl`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/store/fileFromUrl`].post.requestBody.content[
          "application/x-www-form-urlencoded"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/store/fileFromUrl",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.store.metadataFromImageUrl = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/store/metadataFromImageUrl`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/store/metadataFromImageUrl`].post.requestBody.content[
          "application/x-www-form-urlencoded"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/store/metadataFromImageUrl",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.store.metadataFromImage = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/store/metadataFromImage`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/store/metadataFromImage`].post.requestBody.content[
          "multipart/form-data"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/store/metadataFromImage",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.store.uploadDirectory = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/store/uploadDirectory`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/store/uploadDirectory`].post.requestBody.content[
          "multipart/form-data"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (let i = 0; i < req.filePath.length; i++) {
        data.append("filePath", fs.createReadStream(req.filePath[i]));
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/store/uploadDirectory",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.send = {};
  module.send.quickSend = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/send/quickSend`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/send/quickSend`].post.requestBody.content[
          "multipart/form-data"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/send/quickSend",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.send.enableCrossChainSend = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/send/enableCrossChainSend`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/send/enableCrossChainSend`].post.requestBody.content[
          "multipart/form-data"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/send/enableCrossChainSend",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.send.crossChainSend = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/send/crossChainSend`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/send/crossChainSend`].post.requestBody.content[
          "multipart/form-data"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/send/crossChainSend",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.user = {};
  module.user.deployedContracts = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/userOps/deployedContracts`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/userOps/deployedContracts`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url:
          "https://api.verbwire.com/v1/nft/userOps/deployedContracts" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.user.nftsMinted = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/userOps/nftsMinted`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/userOps/nftsMinted`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url: "https://api.verbwire.com/v1/nft/userOps/nftsMinted" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.user.ipfsUploads = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/userOps/ipfsUploads`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/userOps/ipfsUploads`].get.parameters
      );
      let reqData = "?";
      if (reqBody !== undefined) {
        const myObj = JSON.parse(reqBody);
        for (let k = 0; k < myObj.length; k++) {
          reqData += myObj[k]["name"] + "=" + req[myObj[k]["name"]] + "&";
        }
      }
      var config = {
        method: "get",
        url: "https://api.verbwire.com/v1/nft/userOps/ipfsUploads" + reqData,
        headers: { accept: "application/json", "X-API-Key": apiKey },
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.user.transactionDetails = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/userOps/transactionDetails`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/userOps/transactionDetails`].post.requestBody.content[
          "application/x-www-form-urlencoded"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/userOps/transactionDetails",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.user.userCollectionContractDetails = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/userOps/userCollectionContractDetails`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/userOps/userCollectionContractDetails`].post
          .requestBody.content["application/x-www-form-urlencoded"].schema
          .properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/userOps/userCollectionContractDetails",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.user.payeeAtIndex = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(json.paths[`/nft/userOps/payeeAtIndex`]);
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/userOps/payeeAtIndex`].post.requestBody.content[
          "application/x-www-form-urlencoded"
        ].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/userOps/payeeAtIndex",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.user.allowListSharesForAddress = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/userOps/allowListSharesForAddress`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/userOps/allowListSharesForAddress`].post.requestBody
          .content["application/x-www-form-urlencoded"].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/userOps/allowListSharesForAddress",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  module.user.contractPaymentDetails = function (req) {
    return new Promise((resolve) => {
      let methodType = JSON.stringify(
        json.paths[`/nft/userOps/contractPaymentDetails`]
      );
      const methodTypeparse = JSON.parse(methodType);
      let reqBody = JSON.stringify(
        json.paths[`/nft/userOps/contractPaymentDetails`].post.requestBody
          .content["application/x-www-form-urlencoded"].schema.properties
      );
      const myObj = JSON.parse(reqBody);
      var data = new FormData();
      for (const x in myObj) {
        data.append(x, req[x]);
      }
      var config = {
        method: "post",
        url: "https://api.verbwire.com/v1/nft/userOps/contractPaymentDetails",
        headers: { "X-API-Key": apiKey, ...data.getHeaders() },
        data: data,
      };
      axios(config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error);
        });
    });
  };
  // update  generated modules and functions end

  return module;
};
