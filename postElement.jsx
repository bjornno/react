PostElement = React.createClass({  
  deletePost() {
  	console.log("foo")
  	Posts.remove(this.props.post._id);
  },
  render() {
    return (
      <div className="post"	>
        <p>{this.props.post.title} <button onClick={this.deletePost}>X</button></p>
      </div>
    )
  },
});