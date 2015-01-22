var createAPIRequest = require('../../lib/apirequest');
function People(options) {
  var self = this;
  this._options = options || {};
  this.list = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://{slug}.nationbuilder.com/api/v1/people',
        method: 'GET'
      },
      params: params,
      context: self
    };

    return createAPIRequest(parameters, callback);
  }
}
