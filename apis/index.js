/**
 * Copyright 2015 Mayes, Kennedy & Company. All Rights Reserved.
 *
 * This file is heavily influenced by Copyrighted work from Google Inc.
 * See NOTICE file.
 */
'use strict';

var path = require('path');
var util = require('util');
/**
 * Return a Function that requires an API from the disk
 * @param  {String} filename Filename of API
 * @return {function}        function used to require the API from disk
 * @private
 */
function requireAPI(filename) {
    return function(options) {
      var type = typeof options;
      var version;
      if (type === 'string') {
        version = options;
        options = {};
      } else if (type === 'object') {
        version = options.version;
        delete options.version;
      } else {
        throw new Error('Argument error: Accepts only string or object');
      }
      try {
        var endpointPath = path.join(__dirname, filename, path.basename(
          version));
        var Endpoint = require(endpointPath);
        var ep = new Endpoint(options);
        ep.nationbuilder = this; // for nationbuilder.transporter
        return Object.freeze(ep); // create new & freeze
      } catch (e) {
        throw new Error(util.format('Unable to load endpoint %s("%s"): %s',
          filename, version, e.message));
      }
    };
  }
  /**
   * APIs to be exported
   * @type {Object}
   * @private
   */
var APIs = {
  'basicPages': requireAPI('basicPages'),
  'blogs': requireAPI('blogs'),
  'blogPosts': requireAPI('blogPosts'),
  'calendars': requireAPI('calendars'),
  'events': requireAPI('events'),
  'lists': requireAPI('lists'),
  'people': requireAPI('people'),
  'sites': requireAPI('sites')
};

/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = APIs;

/**
 * @callback callback
 * @param {Error} err Error object if an error occurred.
 * @param {object} data Response data object.
 */
