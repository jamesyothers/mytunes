// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    // event listeners for our queue
    this.listenTo( this.collection, 'add', this.render);
    this.listenTo( this.collection, 'remove', this.render);
  },

  render: function(){
    // same as library.view

    console.log('this render: ', this);
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
