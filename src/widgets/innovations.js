import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class Innovations extends React.Component {

  render() {
    return(
      <span>Check out the latest <LinkNewWindow href={'https://www.springwise.com/search?q=' + this.props.topic} text={'innovations in '+this.props.topic} />.</span>
    )
  }

}

export default Innovations;
