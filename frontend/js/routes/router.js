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
		datmain.main.renderAll(datmain.main.data);
		console.log(datmain.main.data.toJSON());
		console.log(convo.toJSON()); 
	}

});