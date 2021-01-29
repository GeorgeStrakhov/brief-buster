import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class CreativeCases extends React.Component {

  render() {
    return(
      <span>Check out some recent <LinkNewWindow href={'https://www.contagious.com/io/search?query=' + this.props.brand} text={'fame-building creative ideas'} /> from {this.props.brand}.</span>
    )
  }

}

export default CreativeCases;
