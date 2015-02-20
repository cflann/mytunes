// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',
  className: 'library-entry',

  template: _.template('<div class="artist"><%= artist %></div><div class="title"><%= title %></div>'),

  events: {
    'click': function() {
      //this.model.play();
      this.model.enqueue();
    },
    // 'click .enqueue-btn': function (e) {
    //   e.stopPropagation();
    //   this.model.enqueue();
    // }
  },

  render: function(){
    return this.$el.addClass('animated fadeInUp').html(this.template(this.model.attributes));
  }

});
