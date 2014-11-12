var app = app || {};

app.deckModel = Backbone.Model.extend({

    defaults: {
        name: "no name",
        cards: null
    },

    initialize: function(){
        this.cards = new app.textUnitCollection([]);
    }


});
