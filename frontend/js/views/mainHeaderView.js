
var app = app || {};

app.mainHeaderView = Backbone.View.extend({

    el: $("#mainHeader"),
    className: "mainHeaderView",

    template: _.template(this.$("#mainHeaderTemplate").html()),

    render: function(){
        //var mainHeaderTemplate = this.template();
        var mainHeaderTemplate;
        if(main.conversations.curSelected == null)
            mainHeaderTemplate = this.template((new app.convoUnit({title: "no convo selected"})).toJSON());
        else
            mainHeaderTemplate = this.template(main.conversations.curSelected.toJSON());

        this.$el.html(mainHeaderTemplate);
        return this;
    }

})