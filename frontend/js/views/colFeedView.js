
var app = app || {};

app.colFeedView = Backbone.View.extend({

    el: $("#colFeed"),

    events: {
        "keypress #createNewCollection": "createOnEnter"
    },

    initialize: function(cols){
        this.input = this.$("#createNewCollection");
        if(cols){
            this.data=cols;
        }else{
            this.data = new app.deckCollection([]);
        }
        this.renderAll(this.data);
    },

    renderAll: function(defaultDecks) {
        defaultDecks.each(this.addDeck, this)
    },

    createOnEnter: function(e){
        if(e.keyCode != 13) return;
        if(!this.input.val()) return;

        //create new deck
        var new_deck = new app.deckModel({
            name: this.input.val(),
            cards: null
        });

        main.route.deckAdded(new_deck);

        this.addDeck(new_deck);

    },

    addDeck: function(deck_model){
        console.log("test add deck");


        console.log(deck_model.name);
        this.data.add(deck_model);
        var newDeckView = new app.deckView({model: deck_model});
        this.$("#cols").append(newDeckView.render().el);
        this.input.val("");
    }
});