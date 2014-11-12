var app = app || {};

app.deckView = Backbone.View.extend({

    tagName: "li",
    className: "deck",

    template: _.template($("#deckTemplate").html()),

    render: function(){
        var deckTemplate = this.template(this.model.toJSON());
        this.$el.html(deckTemplate);
        return this;
    }

});