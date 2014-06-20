// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({
  // set the library entry view tag to <tr></tr>
  tagName: 'tr',
  // utilize the underscore template format to set the format of the individual library entry
  // 'artist' and 'title' attributes are taken from the model's attributes property
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  // when we click on the song in the library, put it in the songQueue
  // calls the enqueue function in the songModel which triggers the 'enqueue' event in the appModel
  events: {
    'click': function() {
      this.model.enqueue(this.model);
    },

  },
  // display the templated model tag
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
