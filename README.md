# nationbuilder-api

```
var nationbuilder = require('nationbuilder');
var OAuth2 = nationbuilder.auth.OAuth2;
var async = require('async');

var oauth2Client = new OAuth2();

oauth2Client.setCredentials({
	access_token: 'some token'
});

nationbuilder.options({
	params: {
		slug: 'some slug',
	},
	auth: oauth2Client
});

var sites = nationbuilder.sites('v1');


sites.list({
		limit: 100
	}, function(err, response) {
		if (err) return callback(err);
		var _sites = {};
		response.results.forEach(function(site) {
			_sites[site.id] = site;
		});

		async.whilst(
			function() {
				return !!response.next;
			},
			function(callback) {
				sites.next(response, function(err, _response) {
					if (err) throw err;

					_response.results.forEach(function(site) {
						_sites[site.id] = site;
					});

					response = _response;
					callback();
				});
			},
			function(err) {
				if (err) throw err;
				console.log(_sites);
			}
		);
	}
);
```
