// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  // the player intiates the 'ended' event on song completion
  el: '<audio controls autoplay />',
  // listens for the 'ended' event it triggers
  initialize: function() {
    // one way to pass in context to anonymous function on lines 12-13
    var that = this;
    this.$el.on('ended', function() {
      that.model.trigger('ended', that.model);
    });
  },

  // appView calls the setSong function to the current song
  setSong: function(song){
    this.model = song;
    this.render();
  },

  // the 'src' is the 'src' attribute of the 'audio' tag's HTML
  // if the model exists, get the url, otherwise leave it blank
  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
