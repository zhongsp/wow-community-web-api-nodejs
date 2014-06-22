/**
 * Get Achievement data by achievementID and region or locale
 */

var http = require('http');
var Q = require('q');

var battle = require('./battle-host');

var getAchievementDataByLocale = function(achievementID, locale) {
  var deferred = Q.defer(),
    battleHost = battle.getHostByLocale(locale),
    path = '/api/wow/achievement/' + achievementID,
    port = 80;

  if (battleHost) {
    http.get({ 'host': battleHost, 'path': path, 'port': port }, function(res) {
      res.setEncoding('utf-8');

      res.on('data', function(data) {
        deferred.resolve(data);
      }).on('error', function(error) {
        deferred.reject(new Error(error));
      });
    });
  }

  return deferred.promise;
};

exports.getAchievementDataByLocale = getAchievementDataByLocale;