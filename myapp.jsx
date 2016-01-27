Posts = new Mongo.Collection("posts");
if (Meteor.isClient) {
  // This code is executed on the client only
 
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<PostList />, document.getElementById("render-target"));
  });
}

