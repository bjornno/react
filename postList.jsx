PostList = React.createClass({

  mixins: [ReactMeteorData],
  
  getMeteorData () {
    Meteor.subscribe("posts");
    return {
      posts: Posts.find({}, {sort: {createdAt: -1}}).fetch()
    }
  },

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    var title = ReactDOM.findDOMNode(this.refs.textTitle).value.trim();
  
    Posts.insert({
      title: title,
      createdAt: new Date() // current time
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textTitle).value = "";
  },

  render() {
    return (

      <div className="posts">
      <h1>Messages</h1>
      <form className="new-post" onSubmit={this.handleSubmit} >
            <input
              type="text"
              ref="textTitle"
              placeholder="Type to add new message" />
          </form>
        {this.data.posts.map(post => 
        	<PostElement key={post._id} post={post} />)}
      </div>
    )
  }

});