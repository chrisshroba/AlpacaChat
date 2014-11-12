var app = app || {};

app.colUnitView = Backbone.View.extend({

    tagName: "li",
    className: "colUnit",

    template: _.template($("#colUnitView").html()),

    render: function() {
        var colUnitTemplate = this.template(this.model.toJSON());
        this.$el.html(colUnitTemplate);
        return this;
    }
});