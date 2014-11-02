//Namespace
var app = app || {};

app.textUnitView = Backbone.View.extend({

    tagName: "div",
    className: "textUnit",

    template: _.template($("#textUnitView").html()),                    // represented as template in index.html
                                                                        // TODO: place templates in a file and distribute via CDN
                                                                        // TODO: build template in index.html

    render: function() {
        var textUnitTemplate = this.template(this.model.toJSON());
        this.$el.html(textUnitTemplate);
        return this;
    },


});