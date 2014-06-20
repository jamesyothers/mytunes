// App.js - Defines a backbone model class for the whole app.
// the clearinghouse for the app's communication between models and views
// instantiated in index.html, line 28
var AppModel = Backbone.Model.extend({
  // upon instantiation, the initialize method will run, passing in 'params'
  // params = {library:library}; - setting a library property
  initialize: function(params){
    // create a current song instance of a Song
    this.set('currentSong', new SongModel());
    // create a songQueue collection instance of the song Queue collection
    this.set('songQueue', new SongQueue());
    // given a property of songQueue -> use this!

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // these are the event listeners on all the songs in the library
    // when a song in the library emit these events, it is also triggered on its collection (library)

    // when the library emits a play event set current song to that song
    // song is passed in the event listener by the trigger method in the SongModel (2nd argument)
    params.library.on('play', function(song){
      // use Backbone's native method 'set' to set currentSong to the one passed by the SongModel
      this.set('currentSong', song);
      // handle the context issue, one of many ways
      // other way: var self = this;
    }, this);

    // add a song to the songQueue when enqueue function is called by the library entry view and triggered by the songModel
    params.library.on('enqueue', function(song){
      // use the backbone method .add to add the song to the songQueue
      // the 'add' listener in the songQueueView is triggered automatically
      this.get('songQueue').add(song);
    }, this);

    // songQueueEntryView's event listener ('click') calls the 'dequeue' method in the songModel
    // the songModel triggers the 'dequeue' event and it is listened for here
    params.library.on('dequeue', function(song){
      // the 'remove' listener in the songQueueView
      this.get('songQueue').remove(song);
    }, this);

    // event listener for 'ended', emitted by the playerView
    params.library.on('ended', function(song){
      // remove the first item in the songQueue when it finishes playing
      this.get('songQueue').shift();
      // if there is a song in the songQueue upon completion of a song, play the next song
      if(this.get('songQueue').length > 0)
        // use the backbone method 'at' to access the first song in the songQueue and play it
        // the function 'play' is in the songModel and triggers the 'play' event, being handled above
        this.get('songQueue').at(0).play();
    }, this);
  },
});
