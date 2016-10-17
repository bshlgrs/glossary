import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App words={
    [
      {
        term: "leafletting",
        description: "an [animal rights](#animal-rights) intervention where volunteers hand out leaflets about animal rights in public places"
      },
      {
        term: "wireheading",
        description: "the act of causing humans or nonhumans to experience great pleasure by directly stimulating the parts of their brains which control feelings of pleasure. This is a controversial idea which might be good if you are a hedonic utilitarian"
      },
      {
        term: "AI risk",
        description: "Existential risk caused by the creation of smarter-than-human artificial intelligence. Nicely summarized by [this piece](#)."
      },
      {
        term: "x-risk",
        description: "*alias for* [existential risk](#)"
      }
    ]
  }/>,
  document.getElementById('root')
);
