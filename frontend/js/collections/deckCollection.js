var app = app || {};

app.deckCollection = Backbone.Collection.extend({
   model: app.deckModel,

   initialize: function(){
      //Default decks
      var favorites = new app.deckModel({
         name: "Favorites",
         cards: null
      });

      var addresses = new app.deckModel({
         name: "Addresses",
         cards: null
      });

      var datesAndTimes = new app.deckModel({
         name: "Dates & Times",
         cards: null
      });

      var links = new app.deckModel({
         name: "Links",
         cards: null
      });

      var phoneNums = new app.deckModel({
         name: "Phone Numbers",
         cards: null
      });

      this.add([favorites, addresses, datesAndTimes, links, phoneNums]);
   }
});