/**
* Copyright 2015 Mayes, Kennedy & Company. All Rights Reserved.
*
* This file is heavily influenced by Copyrighted work from Google Inc.
* See NOTICE file.
*/

'use strict';

/**
* A module for interacting with NationBuilder APIs
* @module nationbuilder
*/

/**
* Load the apis from apis index file
* This file holds all version information
* @private
*/
var apis = require('../apis');

/**
* NationBuilderApis constructor.
* @param {object} options Options to be passed in
* @constructor
*/
function NationBuilderApis(options) {
  this.options(options);
  this.addAPIs(apis);
  this.auth = {
    // Compute: require('./auth/computeclient.js'),
    // JWT: require('./auth/jwtclient.js'),
    // OAuth2: require('./auth/oauth2client.js')
  };
  this.NationBuilderApis = NationBuilderApis;
}

/**
* Set options
* @param  {Object} opts Options to set
*/
NationBuilderApis.prototype.options = function(opts) {
  this._options = opts || {};
};

/**
* Add APIs endpoints to nationbuilderapi object
* E.g. nationbuilderapi.drive and nationbuilderapi.datastore
*
* @param {Array} apis Apis to be added
* @private
*/
NationBuilderApis.prototype.addAPIs = function(apis) {
  for (var apiName in apis) {
    this[apiName] = apis[apiName].bind(this);
  }
};

var nationbuilder = new NationBuilderApis();

/**
* Exports nationbuilderapi.
*/
module.exports = nationbuilder;
