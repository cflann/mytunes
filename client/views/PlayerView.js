// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<div class="player"><div class="now-playing"><div class="now-playing-artist"></div><div class="now-playing-song"></div></div><audio id="audio" controls autoplay /></div>',

  initialize: function() {
    this.$el.find('#audio').on('ended', function() {
      this.model.ended();
    }.bind(this));
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    this.$el.find('.now-playing-artist').text(this.model.get('artist'));
    this.$el.find('.now-playing-song').text(this.model.get('title'));
    this.$el.css('background-image', 'url(' + this.model.get('album') + ')');
    return this.$el.find('audio').attr('src', this.model ? this.model.get('url') : '');
  }

});
