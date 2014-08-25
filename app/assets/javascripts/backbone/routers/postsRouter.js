App.Routers.Router = Backbone.Router.extend({
  initialize: function(){
    console.log('made a router');
  },

  routes: {
    "": "index",
    "posts/new": "new",
  },

  index: function(){
  App.Collections.posts.fetch({reset: true});
  },

  new: function(){
    console.log('new post form fired')
    App.Collections.posts.fetch({reset: true});
    $('#post-form').show();
  }

})
