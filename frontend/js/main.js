var main = main || {};
/* main feed test area */
var mainFeedTexts = new app.textUnitCollection([
]);

main.mainFeed = new app.mainFeedView(mainFeedTexts);

var last_id = 0;

function generate_id() {
	return ++last_id;
}


/* converations test area */
var testConvo = new app.convoUnit({
    title: "test title 1",
    id: generate_id()
});
var testConvo2 = new app.convoUnit({
    title: "test title 2",
    id: generate_id()
});
var testConvo3 = new app.convoUnit({
    title: "test title 3",
    id: generate_id()
});
var testConvo4 = new app.convoUnit({
    title: "test title 14",
    id: generate_id()
});
var testConvo5 = new app.convoUnit({
    title: "test title 25",
    id: generate_id()
});

// console.log(testConvo5.toJSON());

main.conversations = new app.convoUnitCollection([
    testConvo, testConvo2, testConvo3, testConvo4, testConvo5
]);

var convos = new app.convoFeedView(main.conversations);

var router = new app.router();

Backbone.history.start();