import React, { Component } from 'react';
import style form './style';

export default class CommentForm extends Component {
  constructor(props){
    super(props)
    this.state = {author: '', text: ''};

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(event) {
    this.setState({ author: e.target.value });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    constole.log(`${this.state.author} said "${this.state.text}"`)
  }

  render(){
    return(
      <form style={style.commentForm} onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Your name...'
          style={ style.commentFormAuthor }
          value={ this.state.author }
          onChange={ this.handleAuthorChange }/>
        <input
          type='text'
          placeholder='Say something...'
          style={ style.commentFormText }
          value={ this.state.text }
          onChange={ this.handleTextChange }/>
        <input
          type='submit'
          style={style.commentFormPost}
          value='Post'/>
      </form>
    )
  }
}
