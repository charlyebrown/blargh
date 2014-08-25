App.Views.PostForm = Backbone.View.extend({
  el: '.new-post',
  initialize: function(){
    console.log('New Post Form');
    this.render();
  },

  template: HandlebarsTemplates['posts/form'],

  render: function(){
    this.$el.html(this.template())
  },

  events: {
    'click #add-post': 'newPost'
  },

  newPost: function(e){
    var data= {
      author: this.$("[name='author']").val(),
      title: this.$("[name='title']").val(),
      content: this.$("[name='content']").val(),
    };
    App.Collections.posts.create(data, {success: function(data) {console.log('Added Post')}});
    $('.input').val('');
    App.Routers.router.navigate('');
  }
})
