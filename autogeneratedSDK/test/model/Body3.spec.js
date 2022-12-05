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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.VerbwireApiDocumentation);
  }
}(this, function(expect, VerbwireApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new VerbwireApiDocumentation.Body3();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Body3', function() {
    it('should create an instance of Body3', function() {
      // uncomment below and update the code to test Body3
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be.a(VerbwireApiDocumentation.Body3);
    });

    it('should have the property contractAddress (base name: "contractAddress")', function() {
      // uncomment below and update the code to test the property contractAddress
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property maxMintPerAddress (base name: "maxMintPerAddress")', function() {
      // uncomment below and update the code to test the property maxMintPerAddress
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property totalReserveQty (base name: "totalReserveQty")', function() {
      // uncomment below and update the code to test the property totalReserveQty
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property totalAllowlistQty (base name: "totalAllowlistQty")', function() {
      // uncomment below and update the code to test the property totalAllowlistQty
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property maxSupply (base name: "maxSupply")', function() {
      // uncomment below and update the code to test the property maxSupply
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property maxMintableBatchSize (base name: "maxMintableBatchSize")', function() {
      // uncomment below and update the code to test the property maxMintableBatchSize
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property royaltiesInBps (base name: "royaltiesInBps")', function() {
      // uncomment below and update the code to test the property royaltiesInBps
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property royaltiesAddress (base name: "royaltiesAddress")', function() {
      // uncomment below and update the code to test the property royaltiesAddress
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property ownerAddress (base name: "ownerAddress")', function() {
      // uncomment below and update the code to test the property ownerAddress
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property tokenURIPrereveal (base name: "tokenURIPrereveal")', function() {
      // uncomment below and update the code to test the property tokenURIPrereveal
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property baseTokenURI (base name: "baseTokenURI")', function() {
      // uncomment below and update the code to test the property baseTokenURI
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property allowListMintStartTime (base name: "allowListMintStartTime")', function() {
      // uncomment below and update the code to test the property allowListMintStartTime
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property publicSaleStartTime (base name: "publicSaleStartTime")', function() {
      // uncomment below and update the code to test the property publicSaleStartTime
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property allowlistMintPriceInWei (base name: "allowlistMintPriceInWei")', function() {
      // uncomment below and update the code to test the property allowlistMintPriceInWei
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property publicPriceInWei (base name: "publicPriceInWei")', function() {
      // uncomment below and update the code to test the property publicPriceInWei
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property metadataFrozen (base name: "metadataFrozen")', function() {
      // uncomment below and update the code to test the property metadataFrozen
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property recipientAddress (base name: "recipientAddress")', function() {
      // uncomment below and update the code to test the property recipientAddress
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

    it('should have the property chain (base name: "chain")', function() {
      // uncomment below and update the code to test the property chain
      //var instane = new VerbwireApiDocumentation.Body3();
      //expect(instance).to.be();
    });

  });

}));
