
var app = app || {};

app.colFeedView = new Backbone.View.extend({

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
    },

    createOnEnter: function(e){
        console.log("blaskdfa");
        //if not enter
        if(e.keyCode != 13) return;
        //if nothing in input, return early
        if(!this.input.val()) return;

        //create new deck
        var new_deck = new app.deckModel({
            name: this.input.val(),
            cards: null
        });

        this.addDeck(new_deck);
    },

    addDeck: function(deck_model){
        this.data.add(deck_model);
        var newDeckView = new app.deckView({model: deck_model});
        //adds a new list element to the list
        this.$("#cols").append(newDeckView.render().el);
        //clear
        this.input.val("");
    }
});