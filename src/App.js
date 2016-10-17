import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
import Fuse from 'fuse.js';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  keys: [
    "term",
    "description"
  ]
};

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: ""
    }

    this.fuse = new Fuse(props.words, fuseOptions);
  }

  relevantWords () {
    return this.fuse.search(this.state.searchTerm);
  }

  render() {
    var currentWords;
    if (this.state.searchTerm) {
      currentWords = this.relevantWords();
    } else {
      currentWords = this.props.words;
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Glossary</h2>
        </div>
        <div className="search-bar">
          <input
            className="search-bar-input"
            placeholder="Type your search term here!"
            value={this.state.searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })} />
        </div>
        <div className="definitions">
          {currentWords.map((x, idx) => <Word word={x} key={idx} />)}
        </div>
      </div>
    );
  }
}

class Word extends Component {
  render() {
    var word = this.props.word;
    return <div className="word-div">
      <div className="word-term">{word.term}</div>
      <div className="word-description" dangerouslySetInnerHTML={{__html: marked(word.description)}}></div>
    </div>
  }
}

export default App;
