//Namespace
var app = app || {};

app.collectionView = Backbone.View.extend({

    tagName: "li",
    className: "collection",

    template: _.template($("#collectionView").html()),                    // represented as template in index.html
                                                                        // TODO: place templates in a file and distribute via CDN
                                                                        // TODO: build template in index.html

    render: function() {
        var collectionTemplate = this.template(this.model.toJSON());
        this.$el.html(collectionTemplate);
        return this;
    }

});