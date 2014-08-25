App.Views.PostList = Backbone.View.extend({
  el: "#blog-list",

  initialize: function(){
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  events: {
    'click span.add-post-form': 'showAddPost'
  },

  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(post){
    var postView = new App.Views.Post({model: post});
    postView.$el.appendTo($('.blog-list'));
  },

  showAddPost: function(){
    console.log('show form please');
    App.Router.router.navigate('posts/new');
    $('#post-form').show();
  }
});
