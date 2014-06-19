// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song) {
      if(this.length === 1) {
        this.playFirst();
      }
    });
  },

  playFirst: function(){
    this.models[0].play();
  },

  // playNext: function() {
  //   if(this.models.length > 0) {
  //     this.models[0].play();
  //   }
  // }

});

