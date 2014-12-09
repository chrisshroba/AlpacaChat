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

        socket.emit("chat message", this.input.val());

        // create new text unit and add to collection
        var new_model = new app.textUnit({
            body: this.input.val(),
            owner: "0", // 0 is you, the sender
            timestamp: timeStamp(), // get device time
            img: "none",
            id: ((new Date()).getTime()) + "0"
        });
        this.input.val('');

        
        this.addMessage(new_model);
        this.scroll(); // scroll conversation to bottom
    },

    addMessage: function(text_model) {
        this.data.add(text_model);
        var textView = new app.textUnitView({model: text_model});
        this.$("#mainFeedTexts").append(textView.render().el);


        // maybe can declare these globally
        var parse_phone_num_re = /\d{9,10}/;
        var parse_address_re = /\d{1,5}\s\w{1,30}\sstreet|Street|St|st|road|Road|Rd|rd|avenue|Avenue|Ave|ave|trail|Trail|Tr|tr/;
        if(text_model.get("body").search(parse_phone_num_re) > -1)
        {
            // console.log("found a message with phone number in it");
            main.route.navigate("#as/pn/" + text_model.id, {trigger: true});
            // need to click on this message via code here somehow
        }
        if(text_model.get("body").search(parse_address_re) > -1)
        {
            // console.log("found an address");
            main.route.navigate("#as/a/" + text_model.id, {trigger: true});
            // need to click on this message via code here somehow
            
        }

    },

    renderAll: function(collection) {
        collection.each(this.addMessage, this);
    },

    clearAll: function() {
        this.$("#mainFeedTexts").html("");
    }

});