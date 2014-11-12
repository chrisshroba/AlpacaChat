var app = app || {};
var datmain = datmain || {};

app.router = Backbone.Router.extend({

	routes: {

		"message/:id":"message"

	},

	message: function(id) {
		console.log(id);
		dat
	}

});