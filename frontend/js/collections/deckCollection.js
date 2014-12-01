var app = app || {};

app.deckCollection = Backbone.Collection.extend({
   model: app.deckModel,

   initialize: function(){
      //Default decks
      var favorites = new app.deckModel({
         name: "Favorites",
         cards: null,
         id: "Favorites"
      });

      var addresses = new app.deckModel({
         name: "Addresses",
         cards: null,
         id: "Addresses"
      });

      var datesAndTimes = new app.deckModel({
         name: "Dates & Times",
         cards: null,
         id: "Dates & Times"
      });

      var links = new app.deckModel({
         name: "Links",
         cards: null,
         id: "Links"
      });

      var phoneNums = new app.deckModel({
         name: "Phone Numbers",
         cards: null,
         id: "Phone Numbers"
      });

      this.add([favorites, addresses, datesAndTimes, links, phoneNums]);
   }
});