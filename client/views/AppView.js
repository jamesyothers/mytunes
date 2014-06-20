// AppView.js - Defines a backbone view class for the whole music app.
// the appView listens to the app model
// instantiated in the index.html file, line 31
var AppView = Backbone.View.extend({

  // params = {model:app}, passed in on instantiation
  initialize: function(params){
    // instantiate the music player, library list, and song queue for rendering
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    // listen for a change in the current song
    this.model.on('change:currentSong', function(model){
      // define the setSong method in the player view
      this.playerView.setSong(model.get('currentSong'));
    }, this);

  },
  // access the appView's $el and set it to the aggregate of all views
  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.queueView.$el
    ]);
  }

});
