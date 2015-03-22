/**
 * Achievement API
 */

var http = require('http');
var Q = require('q');

var battle = require('./region-host');
var config = require('./config');

/**
 * Query data about an individual achievement.
 *
 * @param achievementID {Number}
 * @param locale {String}  See `battle`
 */

var baseUrl = '/api/wow/achievement/';

var getAchievementDataByLocale = function(achievementID, locale) {
  var deferred = Q.defer(),
    host = battle.getHostByLocale(locale),
    path = baseUrl + achievementID,
    data = '';

  if (host) {
    http.get({ 'host': host, 'path': path, 'port': config.port }, function(res) {
      res.setEncoding(config.encoding);

      res.on('data', function(chunk) {
        data += chunk;

      }).on('end', function() {
        deferred.resolve(data);

      }).on('error', function(error) {
        deferred.reject(new Error(error));
      });
    });
  }

  return deferred.promise;
};

exports.getAchievementDataByLocale = getAchievementDataByLocale;
