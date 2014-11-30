var main = main || {};
/* main feed test area */
var mainFeedTexts = new app.textUnitCollection([
]);

main.mainFeed = new app.mainFeedView(mainFeedTexts);

var last_id = 1;

function generate_id() {
	return ++last_id;
}


/* converations test area */
var testConvo1 = new app.convoUnit({
    title: "Austin",
    id: generate_id()
});
var testConvo2 = new app.convoUnit({
    title: "Blade",
    id: generate_id()
});
var testConvo3 = new app.convoUnit({
    title: "Claire",
    id: generate_id()
});
var testConvo4 = new app.convoUnit({
    title: "Chris",
    id: generate_id()
});
var testConvo5 = new app.convoUnit({
    title: "Marie",
    id: generate_id()
});
var testConvo6 = new app.convoUnit({
    title: "Niki",
    id: generate_id()
});
var testConvo7 = new app.convoUnit({
    title: "Brendan",
    id: generate_id()
});
var testConvo8 = new app.convoUnit({
    title: "Victoria",
    id: generate_id()
});

//Default decks
var favorites = new app.deckModel({
    name: "Favorites",
    cards: null
});

var addresses = new app.deckModel({
    name: "Addresses",
    cards: null
});

var datesAndTimes = new app.deckModel({
    name: "Dates & Times",
    cards: null
});

var links = new app.deckModel({
    name: "Links",
    cards: null
});

var phoneNums = new app.deckModel({
    name: "Phone Numbers",
    cards: null
});

var decks = new app.deckCollection([
    favorites, addresses, datesAndTimes, links, phoneNums
]);

//Conversations
main.conversations = new app.convoUnitCollection([
    testConvo1, testConvo2, testConvo3, testConvo4, testConvo5, testConvo6, testConvo7, testConvo8
]);

var convos = new app.convoFeedView(main.conversations);

/* collections */
main.col = new app.colFeedView(decks);

/* router */
main.route = new app.router();


main.header = new app.mainHeaderView();

Backbone.history.start();

