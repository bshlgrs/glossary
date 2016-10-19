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

  componentDidMount () {
    window.onhashchange = (x) => {
      var url = x.newURL;
      this.setState({
        searchTerm: url.substring(url.indexOf('#')+1)
      });
    }
  }

  relevantWords () {
    return this.fuse.search(this.state.searchTerm);
  }

  render() {
    var currentWords;
    if (this.state.searchTerm) {
      currentWords = this.relevantWords();
    } else {
      console.log('sorting');
      currentWords = this.props.words.sort((x, y) => x.term.toLowerCase() < y.term.toLowerCase() ? -1 : 1);
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2 onClick={() => { this.setState({searchTerm: ""}); window.location.hash="#"; }}>Glossary</h2>
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
  description() {
    return marked(this.props.word.description).replace(/\[([^\]]+)\]/g, (x, y) => "<a href='#"+y+"'>"+y+"</a>")
  }

  render() {
    var word = this.props.word;
    return <div className="word-div">
      <div className="word-term">{word.term}</div>
      <div className="word-description" dangerouslySetInnerHTML={{__html: this.description()}}></div>
    </div>
  }
}

export default App;
