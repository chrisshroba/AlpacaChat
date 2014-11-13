// Namespace
var app = app || {};

app.convoUnit = Backbone.Model.extend({

    defaults: {
        title: "no title",
        img: "no image",
        id: 0,
        thread: null,
        selected: false
    },

    initialize : function() {
        this.thread = new app.textUnitCollection([]);
    }
});