var wowwebapi = require('../');

wowwebapi.auction.getAuctionDataFileByRegionRealm('', 'medivh').then(function (data) {
  console.log(data);
});

//wowwebapi.auction.getAuctionDataByRegionRealm('', 'medivh').then(function (data) {
//  console.log(data);
//});
