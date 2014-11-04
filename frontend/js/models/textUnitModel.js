//Namespace
var app = app || {};

app.textUnit = Backbone.Model.extend({

    defaults: {
        body: "no message",
        owner: "no owner",
        img: "images/placeholder_textunit.jpg",
    }
});