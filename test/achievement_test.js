var wowwebapi = require('../');

wowwebapi.achievement.getAchievementDataByLocale('2936', 'zh_CN').then(function (data) {
  console.log(data);
});
