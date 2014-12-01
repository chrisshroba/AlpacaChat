//Namespace
var app = app || {};

app.mainFeedView = Backbone.View.extend({

    el: $("#mainFeed"),

    events: {
        "keypress #mainFeedInput": "createOnEnter"
    },

    initialize: function(texts) {
        this.input = this.$("#mainFeedInput");
        if (!texts) this.data = new app.textUnitCollection([]);
        else        this.data = texts;
    },

    focusTextarea: function() {
        document.getElementById("mainFeedInput").focus();
    },

    scroll: function() {
        var objDiv = document.getElementById("mainFeedTextsDiv");
        objDiv.scrollTop = objDiv.scrollHeight;
    },

    scrollFind: function(elementId) {
        //console.log("#" + elementId);
        this.scrollToElement("#" + elementId);
    },

    createOnEnter: function(e) {
        if(e.keyCode != 13) return; // prevents adding line break to textarea
        e.preventDefault();
        if(!this.input.val()) return;

        // create new text unit and add to collection
        var new_model = new app.textUnit({
            body: this.input.val(),
            owner: "0", // 0 is you, the sender
            timestamp: new Date().toLocaleTimeString(), // get device time
            img: "none",
            id: this.input.val().toString() + ((new Date()).getTime()) + "0"
        });

        this.addMessage(new_model);
        this.scroll(); // scroll conversation to bottom
    },

    addMessage: function(text_model) {
        this.data.add(text_model);
        var textView = new app.textUnitView({model: text_model});
        this.$("#mainFeedTexts").append(textView.render().el);
        this.input.val('');
    },

    renderAll: function(collection) {
        collection.each(this.addMessage, this);
    },

    clearAll: function() {
        this.$("#mainFeedTexts").html("");
    }

});