/**
 * Achievement API
 */

var battle = require('./region-host');
var helper = require('./helper');
var config = require('./config');

// Query data about an individual achievement.
exports.getAchievementDataByLocale = function(achievementID, locale) {
  var host = battle.getHostByLocale(locale),
    path = config.pathPrefix.ACHIEVEMENT + achievementID;

  return helper.get(host, path);
};
