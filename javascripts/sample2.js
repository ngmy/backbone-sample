$(function(){

  //Application View

  window.AppView = Backbone.View.extend({

    el: $("#app"),

    events: {
    },

    // initialize は最初に必ず呼ばれる
    initialize: function() {
      alert("initialize");
    }

  });

  //START THE BACKBONE APP
  window.App = new AppView();

});
