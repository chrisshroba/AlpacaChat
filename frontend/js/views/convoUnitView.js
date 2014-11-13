// Namespace
var app = app || {};

app.convoUnitView = Backbone.View.extend({

    tagName: "li",
    className: "convoUnit",


    template: _.template($("#convoUnitView").html()),        // represented as a template in index.html
                                                             // TODO: build template

    initialize: function() {
        this.listenTo(this.model, "change:selected", this.render);
    },

    render: function() {
        var convoUnitTemplate = this.template(this.model.toJSON());
        this.$el.html(convoUnitTemplate);
        this.$el.toggleClass("selectedConvo", this.model.get("selected"));
        return this;
    }


});