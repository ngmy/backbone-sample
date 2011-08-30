$(function(){

  //Backbone Model

  window.Timeline = Backbone.Model.extend({
    url: "timeline.cgi",

    defaults: { search: {
      // モデルの初期化
    }},

    initialize: function(){
      //Can be used to initialize Model attributes
    }
  });

  //Collection

  window.TimelineCollection = Backbone.Collection.extend({
    model: Timeline,
    url: 'timeline.cgi'
  });

  window.Timelines = new TimelineCollection();

  //View

  window.TimelineView = Backbone.View.extend({

    events: {
      //Can be used for handling events on the template
    },

    initialize: function(){
      //this.render();
    },

    render: function(){
      var search = this.model.toJSON();

      $(this.el).html(ich.timeline_template(search));

      return this;
    }

  });

  //Application View

  window.AppView = Backbone.View.extend({

    el: $("#app"),

    events: {
      "click a#get_timeline": "getTimeline"
    },

    initialize: function() {
      /*_.bindAll(this, 'getTimeline', 'getTimeline2');
      Searchs.bind('add', this.getTimeline);
      Searchs.bind('refresh', this.getTimeline2);
      Searchs.bind('all', this.render);*/

      // モデルをコレクションにセットする
      Timelines.fetch();
    },

    //getTimeline: function(timeline) {
    getTimeline: function() {
      var view = new TimelineView({model: Timelines.models[0]});
      this.$("#timeline").empty();
      this.$("#timeline").append(view.render().el);
    },

    /*
    getTimeline2: function() {
      Timelines.each(this.getTimeline);
    }
    */

  });

  //START THE BACKBONE APP
  window.App = new AppView();

});
