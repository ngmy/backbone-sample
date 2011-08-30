$(function(){

  //Application View

  window.AppView = Backbone.View.extend({

    el: $("#app"),

    events: {
      "click ul#delegate_events li#click_event": "showAlert",
      "mouseover ul#delegate_events li#mouseover_event": "showAlert",
      "submit form#form": "showFieldValue"
    },

    // 引数としてイベントが渡ってくる
    // イベントが不要な場合は function() と書いても大丈夫
    showAlert: function(event) {
      alert(event.type);
    },

    showFieldValue: function(event) {
      event.preventDefault(); // イベントの伝搬を止める
      var params = $(event.currentTarget).serializeObject();
      alert(params.text);
    }

  });

  //START THE BACKBONE APP
  window.App = new AppView();

});
