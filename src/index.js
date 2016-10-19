import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const words = {
  "Against Malaria Foundation": "A nonprofit which distributes anti-malarial bednets in poor countries mostly in Africa. [GiveWell] reckons it saves the life of a child for an expected [$3500](http://www.givewell.org/charities/against-malaria-foundation#What_do_you_get_for_your_dollar), which is probably the best price that you can get for saving a life of a human at the moment. AMF is kind of the stereotypical EA charity because it has strong evidence of positive impact, and it gets [far more EA funding](https://eahub.org/sites/eahub.org/files/SurveyReport2015.pdf) than any other nonprofit.",
  "AI risk": "[Existential risk] caused by the creation of smarter-than-human artificial intelligence. Nicely summarized by [this piece](http://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html).",
  "animal rights": "maybe we should care about animals.",
  "BOTEC": "Back-of-the-envelope calculation",
  "Elie Hassenfeld": "Founder of [GiveWell].",
  "Existential risk": "A risk that might kill us all. Eg [AI risk], [nuclear war], [bio risk].",
  "GiveWell": "One of the founding organizations of the EA movement. It investigates charities to decide how good they are. It mostly evaluates [global poverty] charities.",
  "global poverty": "One of the big three EA cause areas. It makes sense to focus on helping the poor, because that's much cheaper to do.",
  "Holden Karnofsky": "Founder of [GiveWell], runs [OpenPhil]",
  "leafletting": "an [animal rights] intervention where volunteers hand out leaflets about animal rights in public places. Leafletting is used as a shorthand for 'simple animal rights intervention', because for a while there were [BOTEC]s which indicated it was super effective.",
  "open borders": "One possible intervention for [global poverty] is to make it easier for poor people to move to rich countries. Much more info [here](http://openborders.info/)",
  "OpenPhil": "The Open Philanthropy Project.",
  "wireheading":  "the act of causing humans or nonhumans to experience great pleasure by directly stimulating the parts of their brains which control feelings of pleasure. This is a controversial idea which might be good if you are a hedonic utilitarian",
  "GiveDirectly": "A [GiveWell]-recommended [global poverty] nonprofit. They do unconditional cash transfers, mostly in Kenya--that's just free money sent to a selection of poor Kenyans. [See their website.](http://www.givedirectly.org)",
  "corporate outreach": "Usually refers to an [animal rights] intervention where you harass companies which make animal products and try to make them have higher welfare standards. This is somewhat effective at making nicer welfare standards, and also increases prices. [OpenPhil] endorses it (citation needed). It's probably 10,000x better than AMF. (citation needed)",
  "Slate Star Codex": "A blog many [rationalists] and EAs like. The author, [Scott Alexander], wrote some foundational EA posts.",
  "rationalists": "People who were into the website [LessWrong] back when it was cool.",
  "LessWrong": "A website about human rationality. Many EAs came from LessWrong. People who are really enthusiastic about LW are called [rationalists]. Founded by [Eliezer Yudkowsky].",
  "drowning child": "Famous thought experiment by [Peter Singer], where he argues that if you'd ruin a suit to save the life of a drowning child nearby, you should be willing to donate to save the life of a child who is dying because of preventable diseases far away."
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
