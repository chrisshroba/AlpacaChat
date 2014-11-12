var app = app || {};
// var datmain = datmain || {};

app.router = Backbone.Router.extend({

	routes: {

		"message/:id":"message"

	},

	message: function(id) {
		var convo = main.conversations.get(id);
		main.mainFeed.data = convo.thread;
		main.mainFeed.clearAll();
		main.mainFeed.renderAll(main.mainFeed.data);
		main.mainFeed.scroll();
	}

});