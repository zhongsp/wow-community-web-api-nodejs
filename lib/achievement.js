/**
 * Achievement API
 */

 var url = require('url');

var battle = require('./region-host');
var helper = require('./helper');
var config = require('./config');

// Query data about an individual achievement.
exports.getAchievementDataByLocale = function(locale, achievementID) {

  return helper.get(url.format({
    protocol: config.protocol,
    host: battle.getHostByLocale(locale),
    pathname: config.pathPrefix.ACHIEVEMENT + achievementID,
    port: config.port
  }));
};
