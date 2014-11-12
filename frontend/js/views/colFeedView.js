
var app = app || {};

app.colFeedView = new Backbone.View.extend({

    el: $("#colFeed"),

    initialize: function(cols){
        this.input = this.$("#createNewCollection");

    }

})