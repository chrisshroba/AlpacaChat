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
    title: "Austin Gadbois",
    id: generate_id()
});
var testConvo2 = new app.convoUnit({
    title: "Blade Chapman",
    id: generate_id()
});
var testConvo3 = new app.convoUnit({
    title: "Brendan Moriarty",
    id: generate_id()
});
var testConvo4 = new app.convoUnit({
    title: "Chris Shroba",
    id: generate_id()
});
var testConvo5 = new app.convoUnit({
    title: "Claire Sheong",
    id: generate_id()
});
var testConvo6 = new app.convoUnit({
    title: "Marie Lin",
    id: generate_id()
});
var testConvo7 = new app.convoUnit({
    title: "Niki Wells",
    id: generate_id()
});



//Conversations
main.conversations = new app.convoUnitCollection([
    testConvo1, testConvo2, testConvo3, testConvo4, testConvo5, testConvo6, testConvo7
]);

main.convos = new app.convoFeedView(main.conversations);

/* collections */
main.col = new app.colFeedView();


/* router */
main.route = new app.router();


main.header = new app.mainHeaderView();


/* Setup socket.io stuff */

var socket = io("http://shroba.io:3000");
socket.on("chat message",function(msg){

        main.mainFeed.addMessage( new app.textUnit(
            {
                body: msg,
                owner: "1",
                timestamp: timeStamp(),
                img: "none",
                id: msg + ((new Date()).getTime()) + "1"
            }
        ));
        main.mainFeed.scroll();

        });



Backbone.history.start();

