/**
 * Helpers
 */

var http = require('http');
var Q = require('q');

var config = require('./config');

exports.get = function(url) {
  var deferred = Q.defer(),
    data = '';

  if (url) {
    http.get(url, function(res) {
      res.setEncoding(config.encoding);

      res.on('data', function(chunk) {
        data += chunk;

      }).on('end', function() {
        deferred.resolve(data);

      }).on('error', function(error) {
        deferred.reject(new Error(error));
      });
    });
  } else {
    deferred.reject(new Error('Host or path parameter not found.'));
  }

  return deferred.promise;
};
