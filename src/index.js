import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const words = {
  "animal rights": "maybe we should care about animals",
  "Against Malaria Foundation": "A nonprofit which distributes anti-malarial bednets in poor countries mostly in Africa. [GiveWell] reckons it saves the life of a child for an expected [$3500](http://www.givewell.org/charities/against-malaria-foundation#What_do_you_get_for_your_dollar), which is probably the best price that you can get for saving a life of a human at the moment. AMF is kind of the stereotypical EA charity because it has strong evidence of positive impact, and it gets [far more EA funding](https://eahub.org/sites/eahub.org/files/SurveyReport2015.pdf) than any other nonprofit.",
  "leafletting": "an [animal rights] intervention where volunteers hand out leaflets about animal rights in public places. Leafletting is used as a shorthand for 'simple animal rights intervention', because for a while there were [BOTEC]s which indicated it was super effective.",
  "wireheading":  "the act of causing humans or nonhumans to experience great pleasure by directly stimulating the parts of their brains which control feelings of pleasure. This is a controversial idea which might be good if you are a hedonic utilitarian",
  "AI risk": "[Existential risk] caused by the creation of smarter-than-human artificial intelligence. Nicely summarized by [this piece](http://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html).",
  "Existential risk": "A risk that might kill us all. Eg [AI risk], [nuclear war], [bio risk].",
  "BOTEC": "Back-of-the-envelope calculation",
  "GiveWell": "One of the founding organizations of the EA movement. It investigates charities to decide how good they are. It mostly evaluates [global poverty] charities.",
  "Holden Karnofsky": "Founder of [GiveWell], runs [OpenPhil]",
  "Elie Hassenfeld": "Founder of [GiveWell].",
  "OpenPhil": "The Open Philanthropy Project.",
  "global poverty": "One of the big three EA cause areas. It makes sense to focus on helping the poor, because that's much cheaper to do.",
  "open borders": "One possible intervention for [global poverty] is to make it easier for poor people to move to rich countries. Much more info [here](http://openborders.info/)"
};

const aliases = {
  "x-risk": "existential risk",
  "AMF": "Against Malaria Foundation"
}

Object.keys(aliases).forEach((alias) => {
  words[alias] = "*alias for* [" + aliases[alias] + "]"
})


ReactDOM.render(
  <App words={Object.keys(words).map((key) => ({ term: key, description: words[key] }))}/>,
  document.getElementById('root')
);
