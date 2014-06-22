wow-community-web-api-nodejs
============================

WoW Community Web API written in Nodejs

## Get started

### Install dependencies:

```bash
$ npm install
```

Start the server:

```bash
$ npm start
```

### Access in browsers

Visit: `http://localhost:3000/`. All responses are in JSON format.


## APIs

### Achievement API

This provides data about an individual achievement.

```
Usage:

http://localhost:3000/achievements/{achievement_id}{?locale=xx_XX}

http://localhost:3000/achievements/2936?locale=zh_CN
```

Response sample(json):

```javascript
// GET /achievements/5828?locale=zh_CN HTTP/1.1
{
  "id": 2936,
  "title": "削弱重力炸弹（25人）",
  "points": 10,
  "description": "在团队中无一人死于重力炸弹的情况下击败XT-002拆解者（25人）。",
  "rewardItems": [],
  "icon": "inv_misc_bomb_02",
  "criteria": [],
  "accountWide": false,
  "factionId": 2
}
```
