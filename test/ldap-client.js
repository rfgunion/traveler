/*global describe, it, before, beforeEach, after, afterEach */

var ad = require('../config/ad.json');
var ldapClient = require('../lib/ldap-client');
var assert = require('assert');
var should = require('should');

describe('ldap-client', function () {
  describe('#search()', function () {
    it('should get a valid user', function (done) {
      var searchFilter = ad.searchFilter.replace('_id', 'liud');
      var opts = {
        filter: searchFilter,
        attributes: ad.objAttributes,
        scope: 'sub'
      };
      ldapClient.search(ad.searchBase, opts, false, function (err, result) {
        if (err) {
          console.log(err);
        }
        result.length.should.be.exactly(1);
        console.log(result[0]);
        done();
      });
    });
  });


  describe('#search()', function () {
    this.timeout(10000);
    it('should get all groups', function (done) {
      var searchFilter = ad.groupSearchFilter.replace('_id', 'LAB.FRIB.*');
      var opts = {
        filter: searchFilter,
        attributes: ad.groupAttributes,
        scope: 'sub'
      };
      ldapClient.search(ad.groupSearchBase, opts, false, function (err, result) {
        if (err) {
          console.log(err);
        }
        console.log(result.length);
        console.log(result);
        done();
      });
    });
  });
});
