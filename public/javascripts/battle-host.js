/**
 * Battle.net hosts list
 */

var host = {
  'cn': 'www.battlenet.com.cn',
  'tw': 'tw.battle.net',
  'us': 'us.battle.net',
  'eu': 'eu.battle.net',
  'kr': 'eu.battle.net'
};

var regionToHost = {
  'china' : host.cn,
  'taiwan': host.tw,
  'us'    : host.us,
  'europe': host.eu,
  'korea' : host.kr
};
var localeToHost = {
  'zh_cn': host.cn,
  'zh_tw': host.tw,
  'en_us': host.us,
  'es_mx': host.us,
  'pt_br': host.us,
  'en_gb': host.eu,
  'es_es': host.eu,
  'fr_fr': host.eu,
  'ru_ru': host.eu,
  'de_de': host.eu,
  'pt_pt': host.eu,
  'it_it': host.eu,
  'ko_kr': host.kr
};

exports.getHostByRegion = function(region) {
  region = region.toLowerCase();

  return regionToHost[region] ? regionToHost[region] : '';
};

exports.getHostByLocale = function(locale) {
  locale = locale.toLowerCase();

  return localeToHost[locale] ? localeToHost[locale] : '';
};
