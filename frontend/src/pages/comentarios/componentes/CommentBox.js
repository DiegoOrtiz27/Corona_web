import React from 'react'
import CommentForm from "./CommentForm"
import "../dist/style.css"
import Comment from "./Comment"
class CommentBox extends React.Component {
    constructor() {
      super();
  
      this.state = {
        showComments: false,
        comments: [
        { id: 1, author: "landiggity", body: "This is my first comment on this forum so don't be a dick" },
        { id: 2, author: "scarlett-jo", body: "That's a mighty fine comment you've got there my good looking fellow..." },
        { id: 3, author: "rosco", body: "What is the meaning of all of this 'React' mumbo-jumbo?" }] };
  
  
    }
  
    render() {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = 'Show Comments';
  
      if (this.state.showComments) {
        buttonText = 'Hide Comments';
        commentNodes = React.createElement("div", { className: "comment-list" }, comments);
      }
  
      return (
        React.createElement("div", { className: "comment-box" },
        React.createElement("h2", null, "Empieza el debate."),
        React.createElement(CommentForm, { addComment: this._addComment.bind(this) }),
        React.createElement("button", { id: "comment-reveal", onClick: this._handleClick.bind(this) },
        buttonText),
  
        React.createElement("h3", null, "Comentarios"),
        React.createElement("h4", { className: "comment-count" },
        this._getCommentsTitle(comments.length)),
  
        commentNodes));
  
  
    } // end render
  
    _addComment(author, body) {
      const comment = {
        id: this.state.comments.length + 1,
        author,
        body };
  
      this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }
  
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments });
  
    }
  
    _getComments() {
      return this.state.comments.map(comment => {
        return (
          React.createElement(Comment, {
            author: comment.author,
            body: comment.body,
            key: comment.id }));
  
      });
    }
  
    _getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount} comentarios`;
      }
    }}
    export default CommentBox;