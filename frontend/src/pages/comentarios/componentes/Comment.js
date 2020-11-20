import React from 'react'
class Comment extends React.Component {
    render() {
      return (
        React.createElement("div", { className: "comment" },
        React.createElement("p", { className: "comment-header" }, this.props.author),
        React.createElement("p", { className: "comment-body" }, "- ", this.props.body),
        React.createElement("div", { className: "comment-footer" },
        React.createElement("a", { href: "#", className: "comment-footer-delete", onClick: this._deleteComment }, "Delete Comment"))));
  
  
  
    }
    _deleteComment() {
      alert("-- DELETE Comment Functionality COMMING SOON...");
    }}

    export default Comment