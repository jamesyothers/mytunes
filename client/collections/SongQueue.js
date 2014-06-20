// SongQueue.js - Defines a backbone model class for the song queue.
// SongQueue is an instance of the Songs collection
// SongQueue is an array of models
var SongQueue = Songs.extend({

  // when '.add' is called in the appModel it sends out a 'add' event
  // the 'add' event is listened to here
  initialize: function(){
    this.on('add', function(song) {
      // if the song is the only one in the Queue, it will play
      if(this.length === 1) {
        this.playFirst();
      }
    });
  },

  // access the first model in the songQueue and play it
  playFirst: function(){
    this.models[0].play();
  },

});

