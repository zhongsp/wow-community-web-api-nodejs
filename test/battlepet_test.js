var wowwebapi = require('../');
var url = require('url')

wowwebapi.battlepet.getBattlePetAbilities('zh_CN', '640').then(function (data) {
  console.log('\n\n' + data + '\n\n');
});

wowwebapi.battlepet.getBattlePetSpecies('zh_CN', '258').then(function (data) {
  console.log('\n\n' + data + '\n\n');
});

wowwebapi.battlepet.getBattlePetStats('zh_CN', '258', {
  level: 25,
  breedId: 5,
  qualityId: 4
}).then(function (data) {
  console.log('\n\n' + data + '\n\n');
});
