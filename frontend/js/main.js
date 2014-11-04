

var testText_1 = new app.textUnit({
    body: "test text 1!",
    owner: "tester 1"
});

var testText_2 = new app.textUnit({
    body: "test text 2!",
    owner: "tester 2"
});

var mainFeedTexts = new app.textUnitCollection([
    testText_1, testText_2
]);

var main = new app.mainFeedView(mainFeedTexts);
// main.data = mainFeedTexts;

console.log(mainFeedTexts.toJSON());