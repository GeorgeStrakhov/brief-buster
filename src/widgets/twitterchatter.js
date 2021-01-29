import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class TwitterChatter extends React.Component {

  render() {
    return(
      <span>See how people are <LinkNewWindow href={'https://twitter.com/search?lang=en-GB&q=' + this.props.brand} text={'talking about '+this.props.brand} /> on Twitter.</span>
    )
  }

}

export default TwitterChatter;
