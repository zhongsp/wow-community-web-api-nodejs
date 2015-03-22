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
var Q = require('q');

var battle = require('./region-host');
var config = require('./config');

/**
 * This API resource provides a per-realm list of recently generated auction house data dumps.
 * There are no required query string parameters when accessing this resource.
 *
 * @param region {String} Region name. See `battle`.
 * @param realm {String} Realm name. See realm status api.
 */

var baseUrl = '/api/wow/auction/data/';

var getAuctionDataFileByRegionRealm = function(region, realm) {
  var deferred = Q.defer(),
    host = battle.getHostByRegion(region),
    path = baseUrl + realm,
    data = '';

  if (host) {
    http.get({ 'host': host, 'path': path, 'port': config.port }, function (res) {
      res.setEncoding(config.encoding);

      res.on('data', function (chunk) {
        data += chunk;

      }).on('end', function () {
        deferred.resolve(data);

      }).on('error', function (error) {
        deferred.reject(new Error(error));
      });
    });
  }

  return deferred.promise;
};

var getAuctionDataByRegionRealm = function(region, realm) {
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

exports.getAuctionDataFileByRegionRealm = getAuctionDataFileByRegionRealm;

exports.getAuctionDataByRegionRealm = getAuctionDataByRegionRealm;
