App.Collections.Posts = Backbone.Collection.extend({
  model: App.Models.Post,

  url: '/posts',

  initialize: function(){
    console.log('New Posts Collection');
  },


});
