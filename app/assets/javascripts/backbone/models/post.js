App.Models.Post = Backbone.Model.extend({
  urlRoot : '/posts',
  
  initialize: function(){
    console.log('New Post Created')
  }
})
