import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import axios from 'axios';
import style from './style';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state= { data: [] };
  }

  loadCommentsFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
  }

  handleCommentSubmit(comment) {
    let comments = this.state.data;
    comment.id = Date.now();
    let newComments = comments.concat([comment]);
    this.setState({ data: newComments });
    axios.post(this.props.url, comment)
      .catch(err => {
        console.error(err);
        this.setState({ data: comments });
      });
}

  componentDidMount() {
    this.loadCommentsFromServer()
    setInterval(this.commentsFromServer, this.props.pollInterval)
  }

  render() {
    return(
      <div style={ style.commentBox }>
        <h2>Comments:</h2>
        <CommentList data= { this.state.data }/>
        <CommentForm />
      </div>
    )
  }
}
