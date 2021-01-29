import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class Statista extends React.Component {

  render() {
    return(
      <span>Check out some <LinkNewWindow href={"https://www.statista.com/search/?q=" + this.props.term + "&qKat=search"} text={'business stats'} /> about {this.props.term} (like market share, sales etc.)</span>
    )
  }

}

export default Statista;
