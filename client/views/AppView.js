// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      // console.log(model);
      // this.model.attributes.son.unshift();
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.on('ended', function(model){
      console.log('I ended');
      // this.playerView.setSong(model.get('currentSong'));
    }, this);

  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el
    ]);
  }

});
