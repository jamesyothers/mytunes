// SongModel.js - Defines a backbone model class for songs.
// an individual song's model
var SongModel = Backbone.Model.extend({
  // the play function is called by the appModel and the songQueue
  // it triggers the 'play' event which is listened to by the appModel
  play: function(){
    this.trigger('play', this);
  },

  // enqueue function is called by the libraryentryview because the song is originally only in the library collection
  // trigger's the 'enqueue' event which is listened to by the appModel
  enqueue: function(){
    this.trigger('enqueue', this);
  },

  // dequeue function is called by the songQueueEntryView because the song is already in the songQueue model
  // the 'dequeue' event is listened to by the appModel
  dequeue: function(){
    this.trigger('dequeue', this);
  },



});
