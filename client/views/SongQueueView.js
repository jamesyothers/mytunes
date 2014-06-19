// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    // event listeners for our queue
    this.model.on('add', function() {
      this.render();
    });

    this.model.on('remove', function() {
      this.render();
    });

  },

  render: function(){
    // same as library.view
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
