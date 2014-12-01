//Namespace
var app = app || {};

app.textUnit = Backbone.Model.extend({

    defaults: {
        body: "empty",
        owner: "no owner",
        timestamp: "n/a",
        img: "images/placeholder_textunit.jpg",
        viewId: "no_id"
    }
});