//Namespace
var app = app || {};

app.collectionViewView = Backbone.View.extend({

    el: $("#collectionView"),

    events: {
        "keypress #createNewCollection": "createOnEnter"
    },

    initialize: function(texts) {
        this.input = this.$("#createNewCollection");
        if (!texts) this.data = new app.collectionCollection([]);
        else        this.data = texts;
    },

    createOnEnter: function(e) {
        if(e.keyCode != 13) return;
        if(!this.input.val()) return;

        // create new text unit and add to collection
        var new_model = new app.collection({
            name: this.input.val(),
        })

        this.data.add(new_model);

        console.log(this.data.toJSON());

        var view = new app.collectionView({
            model: new_model
        })
        this.$("#collectionViewCollections").append(view.render().el);

        this.input.val('');
    }

});