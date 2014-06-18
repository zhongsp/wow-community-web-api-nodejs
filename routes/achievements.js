var express = require('express');
var router = express.Router();

var achievement = require('../public/javascripts/achievement');

/* GET home page. */
router.get('/:achievementID', function(req, res) {
  achievement.getAchievementDataByRegion(req.params.achievementID, 'china', res);
  // res.send('respond with a resource');
});

module.exports = router;
