//Namespace
var app = app || {};

app.mainFeedView = Backbone.View.extend({

    el: $("#mainFeed"),

    events: {
        "keypress #mainFeedInput": "createOnEnter"
    },

    initialize: function() {

        this.input = this.$("#mainFeedInput");
    },

    createOnEnter: function(e) {
        if(e.keyCode != 13) return;

        console.log("pressed enter!");
    }

});