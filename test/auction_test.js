var wowwebapi = require('../');

wowwebapi.auction.getAuctionDataFileByRegionRealm('', 'medivh').then(function (data) {
  console.log('\n\n' + data + '\n\n');
});

wowwebapi.auction.getAuctionDataByRegionRealm('', 'medivh').then(function (data) {
 console.log('\n\n' + data + '\n\n');
});
