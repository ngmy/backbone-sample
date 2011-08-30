$(function(){

  //View

  window.MenuView = Backbone.View.extend({

    events: {
      //Can be used for handling events on the template
    },

    initialize: function(){
      //this.render();
    },

    showMenu: function(){
      str = "";
      str += "<a href='javaScript:void(0);' id='hide'>hide</a>";
      str += "<ul>";
      str += "  <li>item1</li>";
      str += "  <li>teim2</li>";
      str += "  <li>teim3</li>";
      str += "</ul>";

      $(this.el).html(str);

      return this;
    },

    hideMenu: function(){
      str = "";
      str += "<a href='javaScript:void(0);' id='show'>show</a>";

      $(this.el).html(str);

      return this;
    }

  });

  //Application View

  window.AppView = Backbone.View.extend({

    el: $("#app"),

    events: {
      "click a#show": "show",
      "click a#hide": "hide"
    },

    show: function() {
      // 他のViewも呼び出せる 
      var view = new MenuView();
      this.$("#menu").empty();
      this.$("#menu").append(view.showMenu().el);
    },

    hide: function() {
      var view = new MenuView();
      this.$("#menu").empty();
      this.$("#menu").append(view.hideMenu().el);
    }

  });

  //START THE BACKBONE APP
  window.App = new AppView();

});
