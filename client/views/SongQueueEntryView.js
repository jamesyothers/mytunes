// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      // this.model.play();
      console.log('in click event', this);
    }
  },

  render: function(){
    console.log("rendering 2");
    return this.$el.html(this.template(this.model.attributes));
  }

});
