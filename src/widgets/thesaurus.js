import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class Thesaurus extends React.Component {

  render() {
    return(
      <span> See the definition of <LinkNewWindow href={'https://www.google.com/search?q=' +this.props.term + '+definition'} text={this.props.term} /> from the Oxford dictionary. Check out synonyms, antonyms and word origin.</span>
    )
  }

}

export default Thesaurus;
