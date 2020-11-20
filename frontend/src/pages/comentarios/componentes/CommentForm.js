import React from 'react'
class CommentForm extends React.Component {
    render() {
      return (
        React.createElement("form", { className: "comment-form", onSubmit: this._handleSubmit.bind(this) },
        React.createElement("div", { className: "comment-form-fields" },
        React.createElement("input", { placeholder: "Name", required: true, ref: input => this._author = input }), React.createElement("br", null),
        React.createElement("textarea", { placeholder: "Comment", rows: "4", required: true, ref: textarea => this._body = textarea })),
  
        React.createElement("div", { className: "comment-form-actions" },
        React.createElement("button", { type: "submit" }, "Post Comment"))));
  
  
  
    } // end render
  
    _handleSubmit(event) {
      event.preventDefault(); // prevents page from reloading on submit
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value, body.value);
    }}

    export default CommentForm;