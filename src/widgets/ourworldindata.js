import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class OurWorldInData extends React.Component {

  render() {
    console.log('hahaha');
    return(
      <span>See if there is any openly available <LinkNewWindow href={'https://ourworldindata.org/search?q=' + this.props.topic} text={'data about '+this.props.topic} />.</span>
    )
  }

}

export default OurWorldInData;
