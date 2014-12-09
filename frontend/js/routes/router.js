var app = app || {};

app.router = Backbone.Router.extend({

	routes: {

		"":"noRoute",
		"message/:id":"message",
		"save/:id":"savedMessage",
		"deck/:id":"openDeck",
		"as/a/:id":"autoSaveAddress",
		"as/pn/:id":"autoSavePhoneNumber",
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

	autoSaveAddress: function(elementId) {
		// console.log("TEST FOUND AUTOSAVE LOOK HERE AUSTIN");
		// console.log(elementId);
		var mess = main.mainFeed.data.get(elementId);
		// mess.set("selected",true);
		mess.set("saved",true);

		// if(main.mainFeed.data.curSelected != null) {
		// 	main.mainFeed.data.curSelected.set("selected", false);
		// }

		// main.mainFeed.clearAll();
		// main.mainFeed.renderAll(main.mainFeed.data);


		// main.mainFeed.scrollFind(elementId);

		$("#mainFeedTexts").children(".selectedMessage").children("div").children("a").css({backgroundColor:"#C0C5Ce", borderColor:"#C0C5CE"}).animate({backgroundColor:"#DFE1E8", borderColor:"#DFE1E8"},600);

		// main.mainFeed.data.curSelected = mess;

		var foundText = main.mainFeed.data.get(elementId);
		if(foundText == undefined) {
			//console.log("early return");
			return;
		}

		var favoritesDeck = main.col.data.get("Addresses");
		favoritesDeck.cards.add(foundText);

		//main.deckFeed.addMessage(foundText, true);

		//console.log("called");
		this.navigate("", {trigger: false});
	},

	autoSavePhoneNumber: function(elementId) {
		// console.log("TEST FOUND AUTOSAVE LOOK HERE AUSTIN");
		// console.log(elementId);
		var mess = main.mainFeed.data.get(elementId);
		// mess.set("selected",true);
		mess.set("saved",true);

		// if(main.mainFeed.data.curSelected != null) {
		// 	main.mainFeed.data.curSelected.set("selected", false);
		// }

		// main.mainFeed.clearAll();
		// main.mainFeed.renderAll(main.mainFeed.data);


		// main.mainFeed.scrollFind(elementId);

		$("#mainFeedTexts").children(".selectedMessage").children("div").children("a").css({backgroundColor:"#C0C5Ce", borderColor:"#C0C5CE"}).animate({backgroundColor:"#DFE1E8", borderColor:"#DFE1E8"},600);

		// main.mainFeed.data.curSelected = mess;

		var foundText = main.mainFeed.data.get(elementId);
		if(foundText == undefined) {
			//console.log("early return");
			return;
		}

		var favoritesDeck = main.col.data.get("Phone Numbers");
		favoritesDeck.cards.add(foundText);

		//main.deckFeed.addMessage(foundText, true);

		//console.log("called");
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

	savedMessage: function(element) {

		//click save unit in collection
		//var newDeckModel = new app.deckModel({
		//	name: body
		//});
		//main.col.addDeck(newDeckModel);

		//click scroll
		var mess = main.mainFeed.data.get(element);
		mess.set("selected",true);
		mess.set("saved",true);

		if(main.mainFeed.data.curSelected != null) {
			main.mainFeed.data.curSelected.set("selected", false);
		}

		main.mainFeed.clearAll();
		main.mainFeed.renderAll(main.mainFeed.data);


		main.mainFeed.scrollFind(element);

		$("#mainFeedTexts").children(".selectedMessage").children("div").children("a").css({backgroundColor:"#C0C5Ce", borderColor:"#C0C5CE"}).animate({backgroundColor:"#DFE1E8", borderColor:"#DFE1E8"},600);

		main.mainFeed.data.curSelected = mess;

		var foundText = main.mainFeed.data.get(element);
		if(foundText == undefined) {
			//console.log("early return");
			return;
		}

		var favoritesDeck = main.col.data.get("Favorites");
		favoritesDeck.cards.add(foundText);

		//main.deckFeed.addMessage(foundText, true);

		//console.log("called");
		this.navigate("", {trigger: false});


		// mess.set("selected",false);
		// if(main.mainFeed.data.curSelected != null) {
		// 	main.mainFeed.data.curSelected.set("selected", false);
		// 	console.log("deselected");
		// }
		// main.mainFeed.clearAll();
		// main.mainFeed.renderAll(main.mainFeed.data);


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