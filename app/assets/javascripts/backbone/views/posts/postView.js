App.Views.Post = Backbone.View.extend({
  className: 'post',

  initialize: function(){
    console.log('Created a New Post View');
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.render();
  },

  template: HandlebarsTemplates['posts/post'],

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  events: {
    'click span.delete': 'deletePost'
  },

  deletePost: function(){
    this.model.destroy();
  }

})
