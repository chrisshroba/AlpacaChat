var app = app || {};
// var datmain = datmain || {};

app.router = Backbone.Router.extend({

	routes: {

		"message/:id":"message"

	},

	message: function(id) {
		console.log(id);
		var convo = datmain.conversations.get(id);
		datmain.main.data = convo.thread;
		datmain.main.clearAll();
		datmain.main.renderAll(datmain.main.data);
	}

});