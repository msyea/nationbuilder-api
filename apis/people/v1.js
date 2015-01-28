var Api = require('../../lib/api'),
  createAPIRequest = require('../../lib/apirequest');
var util = require('util');

function People(options) {
  People.super_.call(this);
  var self = this;
  this._options = options || {};
  /**
   * people.list
   * @param  {object}   params   Parameters for the request
   * @param  {callback} callback The callback that handles the response
   * @return {object}            Request object
   */
  this.list = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://{slug}.nationbuilder.com/api/v1/people',
        method: 'GET'
      },
      params: params,
      requiredParams: ['slug'],
      pathParams: ['slug'],
      context: self
    };

    return createAPIRequest(parameters, callback);
  };

  this.show = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://{slug}.nationbuilder.com/api/v1/people/{id}',
        method: 'GET'
      },
      params: params,
      requiredParams: ['slug', 'id'],
      pathParams: ['slug', 'id'],
      context: self
    };

    return createAPIRequest(parameters, callback);
  }
}

/**
 * Inherit from Api.
 */
util.inherits(People, Api);

/**
 * Exports People object
 * @type People
 */
module.exports = People;
