var app = app || {};

app.router = Backbone.Router.extend({

	routes: {

		"":"noRoute",
		"message/:id":"message",
		"save/:id":"savedMessage",
		"deck/:id":"openDeck"

	},

	noRoute:function(id) {
		if(main.convos.data.length == 0) {
			return;
		}

		var targetThread = main.convos.data.at(0);
		this.navigate("message/" + targetThread.id, {trigger: true});
		//this.message(targetThread.id);
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
		main.mainFeed.scrollFind(element)


		var foundText = main.mainFeed.data.get(element);
		if(foundText == undefined) {
			//console.log("early return");
			return;
		}

		var favoritesDeck = main.col.data.get("Favorites");
		favoritesDeck.cards.add(foundText);


	},

	openDeck: function(deckId) {
		var targetDeck = main.col.data.get(deckId);
		//console.log(targetDeck.cards.toJSON());

	},

	deckAdded: function(deck) {
		main.mainFeed.data;
	}

});