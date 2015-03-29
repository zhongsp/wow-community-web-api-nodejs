/**
 * BattlePet API
 */

var url = require('url');

var battle = require('./region-host');
var helper = require('./helper');
var config = require('./config');

// This provides data about a individual battle pet ability ID.
exports.getBattlePetAbilities = function(locale, abilityID) {

  return helper.get(url.format({
    protocol: config.protocol,
    host: battle.getHostByLocale(locale),
    pathname: config.pathPrefix.BATTLE_PET_ABILITIES + abilityID,
    port: config.port
  }));
};

// This provides the data about an individual pet species.
exports.getBattlePetSpecies = function(locale, speciesID) {

  return helper.get(url.format({
    protocol: config.protocol,
    host: battle.getHostByLocale(locale),
    pathname: config.pathPrefix.BATTLE_PET_SPECIES + speciesID,
    port: config.port
  }));
};

// This provides data about a individual battle pet ability ID.
exports.getBattlePetStats = function(locale, speciesID, query) {

  return helper.get(url.format({
    protocol: config.protocol,
    host: battle.getHostByLocale(locale),
    pathname: config.pathPrefix.BATTLE_PET_STATS + speciesID,
    port: config.port,
    query: query
  }));
};
