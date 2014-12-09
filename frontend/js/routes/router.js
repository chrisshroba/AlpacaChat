var app = app || {};

app.router = Backbone.Router.extend({

	routes: {

		"":"noRoute",
		"message/:id":"message",
		"save/:id/type/:ty":"savedMessage",
		"deck/:id":"openDeck",
		//"as/a/:id":"autoSaveAddress",
		//"as/pn/:id":"autoSavePhoneNumber",
		"collections" : "returnToCollections"

	},

	noRoute:function(id) {
		if(main.convos.data.length == 0) {
			return;
		}

		var targetThread = main.convos.data.at(0);
		this.navigate("message/" + targetThread.id, {trigger: true});
		//this.message(targetThread.id);

	},

	savedMessage: function(element, type) {

		var mess = main.mainFeed.data.get(element);
		var shouldSave = !mess.get("saved");

		mess.set("selected",true);
		if(type == "fav")
			mess.set("saved",true);

		if(main.mainFeed.data.curSelected != null) {
			main.mainFeed.data.curSelected.set("selected", false);
		}

		main.mainFeed.reRender()

		main.mainFeed.scrollFind(element);

		$("#mainFeedTexts").children(".selectedMessage").children("div").children("a").css({backgroundColor:"#C0C5Ce", borderColor:"#C0C5CE"}).animate({backgroundColor:"#DFE1E8", borderColor:"#DFE1E8"},600);

		main.mainFeed.data.curSelected = mess;

		var foundText = main.mainFeed.data.get(element);
		if(foundText == undefined) {
			return;
		}

		var targetDeck;
		if(type == "fav") {
			targetDeck = main.col.data.get("Favorites");
		}
		else if(type == "phone") {
			targetDeck = main.col.data.get("Phone Numbers");
		}
		else if(type == "addr") {
			targetDeck = main.col.data.get("Addresses");
		}
		else if(type == "td") {
			targetDeck = main.col.data.get("Dates & Times");
		}
		else if(type == "ln") {
			targetDeck = main.col.data.get("Links");
		}

		if(shouldSave)
			targetDeck.cards.add(foundText);



		this.navigate("", {trigger: false});
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
		main.deckFeed.setVisible(false);
		//main.col.clearAll();
		// console.log(main.col.data.toJSON());
		//main.col.renderAll(main.col.data);
	},

	returnToCollections: function() {
		main.deckFeed.setVisible(false);
	},

	openDeck: function(deckId) {
		var targetDeck = main.col.data.get(deckId);

		main.deckFeed.setData(targetDeck.cards);
		main.deckFeed.setVisible(true);
	},

	deckAdded: function(deck) {
		main.mainFeed.data;
	}

});