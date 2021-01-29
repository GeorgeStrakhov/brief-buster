import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class CannesCases extends React.Component {

  render() {
    return(
      <span>Check out if {this.props.brand} has any interesting <LinkNewWindow href={'https://www.youtube.com/results?search_query=' + this.props.brand + '+cannes+lions'} text={'Cannes Lions cases'} />.</span>
    )
  }

}

export default CannesCases;
