wow-community-web-api-nodejs
============================

WoW Community Web API written in Nodejs

## APIs

### Achievement API

#### achievement#getAchievementDataByLocale

This provides data about an individual achievement. Example:

```js
/**
 * @name achievement#getAchievementDataByLocale
 * @param achievementID {Number} Achievement id.
 * @param locale {String} See `./lib/region-host`.
 * @returns promise {Promise} Resolved by achievement data.
 */

wowwebapi.achievement.getAchievementDataByLocale('2936', 'zh_CN').then(function(data) {
  //{
  //  "id": 2936,
  //  "title": "削弱重力炸弹（25人）",
  //  "points": 10,
  //  "description": "在团队中无一人死于重力炸弹的情况下击败XT-002拆解者（25人）。",
  //  "rewardItems": [],
  //  "icon": "inv_misc_bomb_02",
  //  "criteria": [],
  //  "accountWide": false,
  //  "factionId": 2
  //}
  console.log(JSON.parse(data));
});
```

### Auction API

#### auction#getAuctionDataFileByRegionRealm

This API resource provides a per-realm list of recently generated auction house data dumps. Example:

```js
/**
 * @name auction#getAuctionDataFileByRegionRealm
 * @param region {String} Region name. See `battle`.
 * @param realm {String} Realm name. See realm status api.
 * @returns promise {Promise} Resolved by auction data.
 */

wowwebapi.auction.getAuctionDataFileByRegionRealm('', 'medivh').then(function(data) {
  // {
  //   "files": [{
  //     "url": "http://us.battle.net/auction-data/ab1239c3bc437d48321a64e6b5e5ab7f/auctions.json",
  //     "lastModified": 1427011046000
  //   }]
  // }
  console.log(JSON.parse(data));
});
```

#### auction#getAuctionDataByRegionRealm

This API has the same params with `auction#getAuctionDataFileByRegionRealm`. It will continue to 
fetch the json file contents. Example:

```js
/**
 * @name auction#getAuctionDataFileByRegionRealm
 * @param region {String} Region name. See `battle`.
 * @param realm {String} Realm name. See realm status api.
 * @returns promise {Promise} Resolved by auction data.
 */

wowwebapi.auction.getAuctionDataByRegionRealm('', 'medivh').then(function(data) {
  // The data size is large
  console.log(JSON.parse(data));
});
```
