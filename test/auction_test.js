var wowwebapi = require('../');

wowwebapi.auction.getAuctionDataByRegionRealm('', 'medivh').then(function (data) {
  console.log(data);
});
