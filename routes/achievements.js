/**
 * Router: 'http://localhost:3000/achievements'
 */

var express = require('express');
var router = express.Router();

var achievement = require('../public/javascripts/achievement');

router.get('/:achievementID', function(req, res) {
  var locale = req.query.locale || 'zh_CN';

  achievement.getAchievementDataByLocale(req.params.achievementID, locale)
    .then(function(achievementJson) {
      res.set('Content-Type', 'application/json');
      res.send(achievementJson);
    }, function(error) {
      console.log(error);
    });
});

module.exports = router;
