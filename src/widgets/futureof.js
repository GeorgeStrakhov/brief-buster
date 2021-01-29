import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class FutureOf extends React.Component {

  render() {
    return(
      <span>Find out what people have to say about  <LinkNewWindow href={'https://www.youtube.com/results?search_query=the+future+of+' + this.props.term} text={'the future of '+this.props.term} />.</span>
    )
  }

}

export default FutureOf;
