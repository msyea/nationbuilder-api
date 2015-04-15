var Api = require('../../lib/api'),
  createAPIRequest = require('../../lib/apirequest');
var util = require('util');

function BlogPosts(options) {
  BlogPosts.super_.call(this);
  var self = this;
  this._options = options || {};
  /**
   * basicPages.list
   * @param  {object}   params   Parameters for the request
   * @param  {callback} callback The callback that handles the response
   * @return {object}            Request object
   */
  this.list = function(params, callback) {
    var parameters = {
      options: {
        url: 'https://{slug}.nationbuilder.com/api/v1/sites/{site_slug}/pages/blogs/{id}/posts',
        method: 'GET'
      },
      params: params,
      requiredParams: ['slug', 'site_slug', 'id'],
      pathParams: ['slug', 'site_slug', 'id'],
      context: self
    };

    return createAPIRequest(parameters, callback);
  };
}

/**
 * Inherit from Api.
 */
util.inherits(BlogPosts, Api);

/**
 * Exports People object
 * @type People
 */
module.exports = BlogPosts;
