var express = require('express');
var router = express.Router();

var achievement = require('../public/javascripts/achievement');

router.get('/:achievementID', function(req, res) {
  achievement.getAchievementDataByRegion(req.params.achievementID, 
      'china', res);
});

module.exports = router;
