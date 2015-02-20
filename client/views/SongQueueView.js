// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "div",
  className: "queue",

  initialize: function() {
    this.render();
    this.collection.on('add', this.render.bind(this));
    this.collection.on('remove', this.render.bind(this));
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<div class="queue-title">Song Queue</div>').append(
      this.collection.map(function(song, index){
        var newFlag = index === this.length-1 ? true : false;
        return new SongQueueEntryView({model: song}).render(newFlag);
      }.bind(this.collection))
    );
  }

});
