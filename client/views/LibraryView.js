// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({
  // the library view will have a tag of <table></table> and each library collection song will be <tr></tr> within the table
  tagName: "table",
  // render on intialization
  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    // th is a the table header
    // set $el's HTML to header and append the table and then the table rows
    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
