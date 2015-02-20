// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'div',
  className: 'queue-entry',

  template: _.template('<div class="artist"><%= artist %></div><div><%= title %></div>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function(newFlag){
    this.$el.html(this.template(this.model.attributes));
    if (newFlag) {
      this.$el.fadeIn();
    }
    return this.$el;
  }
});
