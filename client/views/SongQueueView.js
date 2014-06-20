// SongQueueView.js - Defines a backbone view class for the song queue.
// display table and instantiate each new song view in the queue
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    // event listeners for our queue
    // listen to the entire songQueue collection and upon '.add' or '.remove' render the page
    // '.add' and '.remove' are called in the appModel
    this.listenTo( this.collection, 'add', this.render);
    this.listenTo( this.collection, 'remove', this.render);
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
