var Api = require('../../lib/api'),
	createAPIRequest = require('../../lib/apirequest');
var util = require('util');

function Sites(options) {
	Sites.super_.call(this);
	var self = this;
	this._options = options || {};
	/**
	 * sites.list
	 * @param  {object}   params   Parameters for the request
	 * @param  {callback} callback The callback that handles the response
	 * @return {object}            Request object
	 */
	this.list = function(params, callback) {
		var parameters = {
			options: {
				url: 'https://{slug}.nationbuilder.com/api/v1/sites',
				method: 'GET'
			},
			params: params,
			requiredParams: ['slug'],
			pathParams: ['slug'],
			context: self
		};

		return createAPIRequest(parameters, callback);
	};
}

/**
 * Inherit from Api.
 */
util.inherits(Sites, Api);

/**
 * Exports People object
 * @type People
 */
module.exports = Sites;
