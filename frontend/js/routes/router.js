var app = app || {};
// var datmain = datmain || {};

app.router = Backbone.Router.extend({

	routes: {

		"message/:id":"message",
		"save/:body":"savedMessage"

	},

	message: function(id) {
		var convo = main.conversations.get(id);
		main.mainFeed.data = convo.thread;
		main.mainFeed.clearAll();
		main.mainFeed.renderAll(main.mainFeed.data);
		main.mainFeed.scroll();
		main.mainFeed.focusTextarea();
	},

	savedMessage: function(body) {
		console.log(body);

		//var curTextUnit = main.mainFeed.data.get(body);
		var newDeckModel = new app.deckModel({
			name: body
		});
		main.col.addDeck(newDeckModel);
	},

	deckAdded: function(deck) {
		//console.log("new deck added");

		main.mainFeed.data;
	}

});