/**
 * Battle.net hosts list
 */

var regionToHost = {
  'china' : 'www.battlenet.com.cn',
  'taiwan': 'tw.battle.net',
  'us'    : 'us.battle.net',
  'europe': 'eu.battle.net',
  'korea' : 'kr.battle.net'
};
var localeToHost = {
  'zh_cn': 'www.battlenet.com.cn',
  'zh_tw': 'tw.battle.net',
  'en_us': 'us.battle.net',
  'es_mx': 'us.battle.net',
  'pt_br': 'us.battle.net',
  'en_gb': 'eu.battle.net',
  'es_es': 'eu.battle.net',
  'fr_fr': 'eu.battle.net',
  'ru_ru': 'eu.battle.net',
  'de_de': 'eu.battle.net',
  'pt_pt': 'eu.battle.net',
  'it_it': 'eu.battle.net',
  'ko_kr': 'eu.battle.net'
};

exports.getHostByRegion = function(region) {
  return regionToHost[region] ? regionToHost[region] : '';
};

exports.getHostByLocale = function(locale) {
  return localeToHost[locale] ? localeToHost[locale] : '';
};
