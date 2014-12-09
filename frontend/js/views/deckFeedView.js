var app = app || {};

app.deckFeedView = Backbone.View.extend({

    el: $("#deckFeed"),

    initialize: function(textUnits, isVisible) {
        if (textUnits)
            this.setData(textUnits);
        else
            this.setData(new app.textUnitCollection([]));

        //console.log(this.data.toJSON());

        this.setVisible(isVisible);
    },

    setData: function(textUnits) {
        console.log(textUnits);
        this.stopListening(this.data);
        this.data = textUnits;
        this.listenTo(this.data, "change", this.reRender);
    },

    reRender: function(){
        this.clearAll();
        this.renderAll(this.data);
    },


    setVisible: function(isVisible) {
        //this.isVisible = isVisible;
        //if(this.isVisible)
        //else
        this.clearAll();
        this.renderAll(this.data);

        if(isVisible) {
            $(this.el).show();
        }
        else {
            $(this.el).hide();
        }

    },

    renderAll: function(textUnits) {
        textUnits.each(this.addMessage, this);
    },

    clearAll: function() {
        this.$("#deckFeedTexts").html("");
    },

    addMessage: function(text_model, withData) {
        //console.log(text_model.toJSON());
        if(withData)
            this.data.add(text_model);

        var textView = new app.textUnitView({model: text_model});
        this.$("#deckFeedTexts").append(textView.render().el);
        //console.log("appended");
        //console.log(textView.render().el);
    }


})