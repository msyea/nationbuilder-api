var createAPIRequest = require('../../lib/apirequest');
function People(options) {
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
  }
}

/**
* Exports People object
* @type People
*/
module.exports = People;
