//Namespace
var app = app || {};

app.textUnitView = Backbone.View.extend({

    tagName: "li",
    className: "textUnit",

    template: _.template($("#textUnitView").html()),                    // represented as template in index.html
                                                                        // TODO: place templates in a file and distribute via CDN
                                                                        // TODO: build template in index.html


    initialize: function() {
        this.listenTo(this.model, "change:selected", this.render);
    },

    attributes : function () {
        return {
            id : this.model.get("id")
        };
    },

    render: function() {

        var textUnitTemplate = this.template(this.model.toJSON());
        this.$el.html(textUnitTemplate);
        this.$el.toggleClass("selectedMessage", this.model.get("selected"));
        this.$el.toggleClass("savedMessage", this.model.get("saved"));
        this.$el.toggleClass("myMessage", this.model.get("owner")=="0");
        this.$el.toggleClass("theirMessage", this.model.get("owner")=="1");
        return this;
    }

});