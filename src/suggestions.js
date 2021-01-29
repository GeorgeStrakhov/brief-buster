/*
 * this component receives brief object as a prop and generates a number of suggestions in random order. it renders a <ol> element with all of them
 */

import React from 'react';
import { Link } from 'react-router-dom';

import { shuffleArray, constructQueryParams } from './helpers';

// import all the widgets
import Quote from './widgets/quote'; //quotes (google image search) about a $term
import Statista from './widgets/statista'; //statista info for a $brand or a $category
import Interview from './widgets/interview'; //reach out to $brand company's people on linkedin
import Callmom from './widgets/callmom'; // call your mom and ask her what she thinks about a $term
import Thesaurus from './widgets/thesaurus'; //check out dictionary definition for a $term, word origin and synonims
import CreativeCases from './widgets/creativecases'; // best creative cases for $brand from contagious
import CannesCases from './widgets/cannescases'; //cannes lions cases for $brand that are available on youtube
import FutureOf from './widgets/futureof'; //youtube search for "the future of $term"
import TedIdeas from './widgets/tedideas'; //TED search for $term
import WarcCases from './widgets/warccases'; //WARC search for $category
import AcademicPapers from './widgets/academicpapers'; //JSTOR search for a $keyword
import CognitiveBiases from './widgets/cognitivebiases'; //look at the list of cognitive biases from wikipedia
import TwitterChatter from './widgets/twitterchatter'; //see what people are saying on twitter about the $brand
import SearchTrends from './widgets/searchtrends'; //see how competitors are doing on search trends
import Innovations from './widgets/innovations'; //search SpringWise for innovations on the $topic

//n-gram?
// spotify or youtube playlist?
// wikipedia history of terms & competitors
// symbols and icons: thenounproject
// check out official social channels (FB, twitter)
// no-link tasks (e.g. think write down associations for 5 minutes)

class Suggestions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    // create an array with all suggestionTypes for each specifying how it works
    const suggestionTypes = [

      { name: 'Quote', propKey: 'keywords', isMult: true }, //propKey - which key needs to be passed, isMult means that for each of the competitors (or keywords) a new suggestino needs to be generated

      { name: 'Statista', propKey: 'competitors', isMult: true },

      { name: 'Statista', propKey: 'category', isMult: false }, // this is for a separate call on category, not just competitors

      { name: 'Callmom', propKey: 'brand', isMult: false },

      { name: 'Thesaurus', propKey: 'keywords', isMult: true },

      { name: 'CreativeCases', propKey: 'competitors', isMult: true, requiresSub: true },

      { name: 'CannesCases', propKey: 'competitors', isMult: true },

      { name: 'FutureOf', propKey: 'category', isMult: false },

      { name: 'TedIdeas', propKey: 'keywords', isMult: true },

      { name: 'AcademicPapers', propKey: 'keywords', isMult: true },

      { name: 'WarcCases', propKey: 'category', isMult: false },

      { name: 'CognitiveBiases', propKey: 'category', isMult: false },

      { name: 'TwitterChatter', propKey: 'competitors', isMult: true },

      { name: 'SearchTrends', propKey: 'competitors', isMult: false },

      { name: 'Innovations', propKey: 'keywords', isMult: true },

      { name: 'Interview', propKey: 'brand', isMult: false }

    ];

    let suggestions = [];


    //this bit of code figures out how many actual suggestions we need, because some suggestion Types need to be done for all competitors or all keywords

    suggestionTypes.forEach((st) => {

      if (!st.isMult) {
        if(this.props.brief[st.propKey]) { //check that the property exists (otherwise empty category can be passed on)
          suggestions.push({name: st.name, propKey: st.propKey, val: this.props.brief[st.propKey]});
        }
      } else {
        this.props.brief[st.propKey].forEach((p) => {
          suggestions.push({name: st.name, propKey: st.propKey, val: p, requiresSub: st.requiresSub});
        });
        //special case if mult and competitors => additionally one for the brand as well
        if(st.propKey == 'competitors') {
          suggestions.push({name: st.name, propKey: st.propKey, val: this.props.brief.brand});
        }
      }

    });


    this.state.suggestions = shuffleArray(suggestions);

  }

  renderSug(sug) { //renders the component whose name is passed as sug
    switch(sug.name) {

      case 'Quote':
        return (<Quote term={sug.val} />)
        break;

      case 'Statista':
        return (<Statista term={sug.val} />)
        break;

      case 'Interview':
        return (<Interview brand={sug.val} />)
        break;

      case 'Callmom':
        return (<Callmom term={sug.val} />)
        break;

      case 'Thesaurus':
        return (<Thesaurus term={sug.val} />)
        break;

      case 'CreativeCases':
        return (<CreativeCases brand={sug.val} />)
        break;

      case 'CannesCases':
        return (<CannesCases brand={sug.val} />)
        break;

      case 'FutureOf':
        return (<FutureOf term={sug.val} />)
        break;

      case 'TedIdeas':
        return (<TedIdeas term={sug.val} />)
        break;

      case 'WarcCases':
        return (<WarcCases category={sug.val} />)
        break;

      case 'AcademicPapers':
        return (<AcademicPapers term={sug.val} />)
        break;

      case 'CognitiveBiases':
        return (<CognitiveBiases category={sug.val}/>)
        break;

      case 'TwitterChatter':
        return (<TwitterChatter brand={sug.val}/>)
        break;

      case 'SearchTrends':
        return (<SearchTrends brief={this.props.brief}/>) //we are passing the full brief here as this widget needs to be a bit smarter than the rest
        break;

      case 'Innovations':
        return (<Innovations topic={sug.val}/>)
        break;

    }
  }

  render() {
    return(
      <div>
        <p className="subtitle has-text-centered mt-1">
          Here are {this.state.suggestions.length} suggestions to get you started on your <Link to={'/?'+constructQueryParams(this.props.brief)}>{this.props.brief.brand} brief</Link>:
        </p>
        <hr />
        <ol>
          {this.state.suggestions.map(sug => (
            <li className={'suggestion '+(sug.requiresSub ? 'sug-paywalled' : 'sug-free')} key={'key-'+Math.random()}>{this.renderSug(sug)}</li>
          ))}
        </ol>
        <hr />
        <p className="has-text-centered">This is it for now. Hope it was helpful in some way. Don't see your favorite tool here? Feel free to <a href="mailto:george.strahov@gmail.com?subject=Add%20a%20tool%20to%20Brief%20Exploder">send me a letter</a>. Best, +G</p>
      </div>
    );
  }

}

export default Suggestions;
