import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class WarcCases extends React.Component {

  render() {
    return(
      <span>Check out if there are any interesting <LinkNewWindow href={'https://www.warc.com/search?q=' + this.props.category} text={'Effectiveness Cases on WARC'} /> about the {this.props.category} category.</span>
    )
  }

}

export default WarcCases;
