var app = app || {};

app.deckView = Backbone.View.extend({

    tagName: "li",
    className: "deck",

    template: _.template($("#deckTemplate").html()),

    initialize: function() {
        //console.log("initialize deckView");
        //this.listenTo(this.model.cards, 'add', this.renderList);
    },

    render: function(){
        var deckTemplate = this.template(this.model.toJSON());
        this.$el.html(deckTemplate);

        //console.log("render called");
        //console.log(this.model.toJSON());
        this.model.cards.each(this.renderList, this);

        return this;
    },

    renderList: function(text_model){
        //console.log("renderList");
        var newTextView = new app.textUnitView({model: text_model});
        this.$("#collectionTexts").append(newTextView.render().el);
    }

});