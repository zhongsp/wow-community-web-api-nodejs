/**
 * Router: '/achievements/2144?locale=zh_CN'
 */

var express = require('express');
var router = express.Router();

var achievement = require('../public/javascripts/achievement');

router.get('/:achievementID', function(req, res) {
  var locale = req.query.locale || 'zh_CN';

  achievement.getAchievementDataByLocale(req.params.achievementID, locale)
    .then(function(json) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(json);
    });
});

module.exports = router;
