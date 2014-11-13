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

// console.log(testConvo5.toJSON());

main.conversations = new app.convoUnitCollection([
    testConvo, testConvo2, testConvo3, testConvo4, testConvo5, testConvo6, testConvo7, testConvo8
]);

var convos = new app.convoFeedView(main.conversations);

var col = new app.colFeedView();

var router = new app.router();


main.header = new app.mainHeaderView()

Backbone.history.start();