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

        // maybe can declare these globally
        var parse_phone_num_re = /(?:\d{10})|(?:1\d{10})|(?:\d{3}-\d{3}-\d{4})|(?:1-\d{3}-\d{3}-\d{4})|(?:\d{3}\u0020\d{3}\u0020\d{4})|(?:1\u0020\d{3}\u0020\d{3}\u0020\d{4})/;
        var parse_address_re = /\d{1,5}\u0020\w{1,30}\u0020(?:street|Street|St|st|road|Road|Rd|rd|avenue|Avenue|Ave|ave|trail|Trail|Tr|tr)/;
        var parse_time_re = /\d{1,2}:\d{2}/;
        var parse_date_re = /(?:\d{1,2})(?:\.|-|\/)(?:\d{1,2})(?:\.|-|\/)(?:(?:\d{2})|(?:\d{4}))/;
        // var parse_date_re = /(?:\d{1,2})(?:\.|-|\\)(?:\d{1,2})(?:\.|-|\\)(?:(?:\d{2})|(?:\d{4}))/;
        var parse_date_re2 = /(?:jan|Jan|january|January|feb|Feb|february|February|mar|Mar|march|March|apr|Apr|april|April|may|May|jun|Jun|june|June|jul|Jul|july|July|aug|Aug|august|August|sep|sept|Sep|Sept|september|September|oct|Oct|october|October|nov|Nov|november|November|dec|Dec|december|December)\u0020\d{1,2}/;
        var parse_date_re3 = /(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|monday|tuesday|wednesday|thursday|friday|saturday|sunday)/;
        var parse_link_re = /(?:www\.)|(?:http:)|(?:https:)/;
        if(new_model.get("body").search(parse_phone_num_re) > -1)
        {
            console.log("phone number");
            main.route.navigate("#save/" + new_model.id + "/type/phone", {trigger: true});
            // need to click on this message via code here somehow
        }
        if(new_model.get("body").search(parse_address_re) > -1)
        {
            console.log("address");
            main.route.navigate("#save/" + new_model.id + "/type/addr", {trigger: true});
            // need to click on this message via code here somehow
        }
        if(new_model.get("body").search(parse_time_re) > -1)
        {
            console.log("time");
            main.route.navigate("#save/" + new_model.id + "/type/td", {trigger: true});
        }
        if((new_model.get("body").search(parse_date_re) > -1) || ((new_model.get("body").search(parse_date_re2) > -1)) || ((new_model.get("body").search(parse_date_re3) > -1)))
        {
            console.log("date");
            main.route.navigate("#save/" + new_model.id + "/type/td", {trigger: true});
        }
        if(new_model.get("body").search(parse_link_re) > -1)
        {
            console.log("link");
            main.route.navigate("#save/" + new_model.id + "/type/ln", {trigger: true});
        }

    },

    addMessage: function(text_model) {
        this.data.add(text_model);
        var textView = new app.textUnitView({model: text_model});
        this.$("#mainFeedTexts").append(textView.render().el);

    },

    renderAll: function(collection) {
        collection.each(this.addMessage, this);
    },

    clearAll: function() {
        this.$("#mainFeedTexts").html("");
    }

});