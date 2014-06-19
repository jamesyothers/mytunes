// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song) {
      if(this.length === 1) {
        this.playFirst();
      }
      // this.trigger('play', this);
  });

    // this.on('remove', function() {

    // },
  },

  playFirst: function(){
    console.log('Im here?');
    this.models[0].play();
  }

});

