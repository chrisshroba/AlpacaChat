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

    createOnEnter: function(e) {
        if(e.keyCode != 13) return;
        if(!this.input.val()) return;

        // create new text unit and add to collection
        this.data.add({
            body: this.input.val(),
            owner: "created",
            img: "none"
        });

        console.log(this.data.toJSON());

        this.input.val('');
    }

});