var app = app || {};

app.router = Backbone.Router.extend({

	routes: {

		"message/:id":"message",
		"save/:id":"savedMessage"

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
		main.col.clearAll();
		console.log(main.col.data.toJSON());
		main.col.renderAll(main.col.data);
	},

	savedMessage: function(element) {

		//click save unit in collection
		//var newDeckModel = new app.deckModel({
		//	name: body
		//});
		//main.col.addDeck(newDeckModel);

		//click scroll
		//main.mainFeed.scrollFind(id)


		var foundText = main.mainFeed.data.get(element);
		if(foundText == undefined) {
			console.log("early return");
			return;
		}

		var favoritesDeck = main.col.data.get("Favorites");
		console.log(favoritesDeck.toJSON());
		favoritesDeck.cards.add(foundText);
		console.log(main.col.data.get("Favorites").cards.toJSON());

	},

	deckAdded: function(deck) {
		main.mainFeed.data;
	}

});