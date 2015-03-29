/**
 * Auction API
 *
 * Auction APIs currently provide rolling batches of data about current auctions.
 * Fetching auction dumps is a two step process that involves checking a per-realm
 * index file to determine if a recent dump has been generated and then fetching 
 * the most recently generated dump file if necessary.
 *
 * URL = Host + "/api/wow/auction/data/" + realm
 */

var http = require('http');
var url = require('url');
var Q = require('q');

var battle = require('./region-host');
var config = require('./config');
var helper = require('./helper');

// Provides a per-realm list of recently generated auction house data dumps.
exports.getAuctionDataFileByRegionRealm = function(region, realm) {

  return helper.get(url.format({
    protocol: config.protocol,
    host: battle.getHostByRegion(region),
    pathname: config.pathPrefix.AUCTION + realm,
    port: config.port
  }));
};

exports.getAuctionDataByRegionRealm = function(region, realm) {
  return getAuctionDataFileByRegionRealm(region, realm).then(function (data) {
    var autionFile = JSON.parse(data),
      deferred = Q.defer(),
      data = '';

    http.get(autionFile.files[0].url, function (res) {
      res.setEncoding(config.encoding);

      res.on('data', function (chunk) {
        data += chunk;

      }).on('end', function () {
        deferred.resolve(data);

      }).on('error', function (error) {
        deferred.reject(new Error(error));
      });
    });

    return deferred.promise;
  });
};
