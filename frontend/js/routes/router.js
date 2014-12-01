var app = app || {};

app.router = Backbone.Router.extend({

	routes: {

		"message/:id":"message",
		"save/:body":"savedMessage"

	},

	message: function(id) {
		var convo = main.conversations.get(id);

		convo.set("selected", true);
		if(main.conversations.curSelected != null) {
			main.conversations.curSelected.set("selected", false)
		}
		main.conversations.curSelected = convo;


		main.mainFeed.data = convo.thread;
		main.mainFeed.clearAll();
		main.mainFeed.renderAll(main.mainFeed.data);
		main.mainFeed.scroll();
		main.mainFeed.focusTextarea();
		main.header.render();

		main.col.data = convo.decks;
	},

	savedMessage: function(body) {
		//console.log(body);

		//var curTextUnit = main.mainFeed.data.get(body);
		var newDeckModel = new app.deckModel({
			name: body
		});
		//main.col.addDeck(newDeckModel);
	},

	deckAdded: function(deck) {
		main.mainFeed.data;
	}

});