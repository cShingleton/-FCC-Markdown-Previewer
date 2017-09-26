import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { setMarkdown } from './redux/actions/markdown';
import { initialText } from './initialText';
const marked = require('marked');

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(setMarkdown(initialText));
  }

  parseHTML = markdown => ({ __html: marked(markdown) });
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>A Markdown Previewer</h2>
        </div>
        <p className="App-intro">
          To get started, type some markdown into the text input on the left.
        </p>
        <div className="content-body">
          <textarea 
            className="markdown input"
            value={this.props.markdown.mrkdownInput}
            onChange={event => this.props.dispatch(setMarkdown(event.target.value))}
          />
          <div 
            className="markdown output"
            dangerouslySetInnerHTML={this.parseHTML(this.props.markdown.mrkdownInput)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  markdown: state.markdown
});

export default connect(mapStateToProps)(App);
