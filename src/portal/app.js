var express = require("express");
var app = express();
var request = require("request");

var USER_HOST = "localhost";
var USER_PORT = 3000;

var user = (function() {
	return {
		cons: {
			HOST: "localhost",
			PORT: 3000
		},
		get: function(path, cb) {
			return this.request("get", path, cb);
		},
		post: function(path, data, cb) {
			return this.request("post", path, data, cb);
		},
		request: function(method, path, data, cb) {
			var url = "http://" + this.cons.HOST + ":" + this.cons.PORT + path;
			if (method === "get") {
				return request.get(url, function(res) {
					if (cb) {
						cb(res);
					}
				});
			} else if (method === "post") {
				return request.post({
					url: url,
					form: data
				}, function(error, response, body) {
					if (cb) {
						cb(error, response, body);
					}
				});
			}
		},
		isDown: function(cb) {
			this.get("/").on("error", function() {
				cb();
			});
		},
		register: function(method, local, endpoint) {
			app[method](local, function(req, res) {
				user.post(endpoint, req.query, function(error, response, body) {
					res.send(body);
				});
			});
		}
	}
})();

user.register("get", "/user/login", "/api/Clients/login");

app.get('/', function (req, res) {
	res.send('');
});

app.listen(3001, function () {
	user.isDown(function() {
		console.log("Servicio user no esta levantado");
		process.exit();
	});
	console.log("Iniciado servicio portal");
});

