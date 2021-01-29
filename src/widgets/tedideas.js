import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class TedIdeas extends React.Component {

  render() {
    return(
      <span>Go watch some <LinkNewWindow href={'https://www.ted.com/search?cat=videos&q=' + this.props.term} text={'TED talks'} /> about {this.props.term}.</span>
    )
  }

}

export default TedIdeas;
