// Namespace
var app = app || {}

app.convoFeedView = Backbone.View.extend({

    el: $("#convoFeed"),

    events: {
        "keypress #convoSearch": "searchConvos"
    },

    initialize: function(convos) {
        this.input = this.$("#convoSearch");
        if(!convos) this.data = new app.convoUnitCollection([]);
        else        this.data = convos;
    },

    searchConvos: function(e) {
        if(e.keyCode != 13) return;
        if(!this.input.val()) return;

        this.clearConvos();
        (this.where({title: this.input.val()})).each(this.addConvo, this);
    },

    addConvo: function(convo) {

    },

    clearConvos: function(){
        this.$("#convos").empty();
    }

})