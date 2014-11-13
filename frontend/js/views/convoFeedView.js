// Namespace
var app = app || {};

app.convoFeedView = Backbone.View.extend({

    el: $("#convoFeed"),

    events: {
        "keypress #convoSearch": "searchConvos"
    },

    initialize: function(convos) {
        this.input = this.$("#convoSearch");
        if(!convos) this.data = new app.convoUnitCollection([]);
        else        this.data = convos;

        this.renderAll(this.data);
    },

    renderAll: function(collection) {
        collection.each(this.addConvo, this);
    },

    searchConvos: function(e) {
        if(e.keyCode != 13) return;
        if(!this.input.val()) {
            this.renderAll(this.data);
        }

        var narrowed = this.narrowCollection(this.input.val());

        this.clearConvos();
        this.renderAll(narrowed);
    },

    narrowCollection: function(text) {
        var narrowedCollection = new app.convoUnitCollection([]);

        this.data.each(function(convo){
            if(convo.get("title").indexOf(text) > -1) {
                narrowedCollection.add(convo);
            }
        }, this);

        return narrowedCollection;
    },

    addConvo: function(convo) {
        var newConvo = new app.convoUnitView({model: convo});
        this.$("#convos").append(newConvo.render().el);
    },

    clearConvos: function(){
        this.$("#convos").empty();
    }
})