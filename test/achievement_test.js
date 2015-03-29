var wowwebapi = require('../');

wowwebapi.achievement.getAchievementDataByLocale('zh_CN', '2936').then(function (data) {
  console.log('\n\n' + data + '\n\n');
});
