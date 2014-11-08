
/* main feed test area */
var mainFeedTexts = new app.textUnitCollection([
]);

var main = new app.mainFeedView(mainFeedTexts);


/* converations test area */
var testConvo = new app.convoUnit({
    title: "test title 1"
});
var testConvo2 = new app.convoUnit({
    title: "test title 2"
});

var conversations = new app.convoUnitCollection([
    testConvo, testConvo2
]);

var convos = new app.convoFeedView(conversations);

console.log(conversations.toJSON());
