/**
 * Get Achievement data by achievementID and region or locale
 */

var http = require('http');

var battle = require('./battle-host');

var getAchievementDataByRegion = function(achievementID, region, _res) {
  var battleHost = battle.getHostByRegion(region),
    path = '/api/wow/achievement/' + achievementID;
    port = 80;

  if (battleHost) {
    http.get({ 'host': battleHost, 'path': path, 'port': 80 }, function(res) {
      res.setEncoding('utf-8');

      res.on('data', function(chunk) {
        console.log(chunk);
        _res.writeHead(200, {'Content-Type': 'application/json'});
        _res.end(chunk);
      });
    });
  }
};

exports.getAchievementDataByRegion = getAchievementDataByRegion;