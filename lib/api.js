var createAPIRequest = require('./apirequest');

function Api() {

}

Api.prototype.next = function(response, callback) {
  var self = this;
  if (!response.next) {
    return callback(new Error('There is no next parameter'));
  }
  var parameters = {
    options: {
      url: 'https://{slug}.nationbuilder.com' + response.next,
      method: 'GET'
    },
    params: {},
    requiredParams: ['slug'],
    pathParams: ['slug'],
    context: self
  };

  return createAPIRequest(parameters, callback);
};

Api.prototype.prev = function(response, callback) {
  var self = this;
  if (!response.prev) {
    return callback(new Error('There is no prev parameter'));
  }
  var parameters = {
    options: {
      url: 'https://{slug}.nationbuilder.com' + response.prev,
      method: 'GET'
    },
    params: {},
    requiredParams: ['slug'],
    pathParams: ['slug'],
    context: self
  };

  return createAPIRequest(parameters, callback);
};

module.exports = Api;
