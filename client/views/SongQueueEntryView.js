// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
// to display individual songs in the songQueue
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  // set tags to table rows
  tagName: 'tr',
  // use underscore template
  // takes 'artist' and 'title' from the model's attributes
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // upon clicking the song in the song queue, it will be removed
  // the 'dequeue' function is called in the songModel and listened to in the appModel
  events: {
    'click': function() {
      this.model.dequeue(this.model);
    }
  },

  // render the $el HTML based on the underscore template and the model's attributes
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
