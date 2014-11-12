
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
var testConvo3 = new app.convoUnit({
    title: "test title 3"
});
var testConvo4 = new app.convoUnit({
    title: "test title 14"
});
var testConvo5 = new app.convoUnit({
    title: "test title 25"
});


var conversations = new app.convoUnitCollection([
    testConvo, testConvo2, testConvo3, testConvo4, testConvo5
]);

var convos = new app.convoFeedView(conversations);

/* collections test area */

