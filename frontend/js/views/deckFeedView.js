var app = app || {};

app.deckFeedView = Backbone.View.extend({

    el: $("#deckFeed"),

    initialize: function(textUnits, isVisible) {
        if (textUnits)
            this.data = textUnits;
        else
            this.data = new app.textUnitCollection([]);

        //console.log(this.data.toJSON());

        this.setVisible(isVisible);
    },

    //setData: function(textUnits) {
    //    console.log(textUnits);
    //    this.data = textUnits;
    //},

    setVisible: function(isVisible) {
        //this.isVisible = isVisible;
        //if(this.isVisible)
        //else
        this.clearAll();
        this.renderAll(this.data);

        if(isVisible) {
            console.log("show");
            $(this.el).show();
        }
        else {
            console.log("hide")
            $(this.el).hide();
        }

    },

    renderAll: function(textUnits) {
        console.log(textUnits.toJSON());
        textUnits.each(this.addMessage, this);
    },

    clearAll: function() {
        console.log("clearAll called");
        this.$("#deckFeedTexts").html("");
    },

    addMessage: function(text_model) {
        //console.log(text_model.toJSON());
        //this.data.add(text_model);
        var textView = new app.textUnitView({model: text_model});
        this.$("#deckFeedTexts").append(textView.render().el);
        //console.log("appended");
        //console.log(textView.render().el);
    }


})