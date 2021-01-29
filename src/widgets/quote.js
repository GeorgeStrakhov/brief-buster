import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class Quote extends React.Component {

  render() {
    return(
      <span> See what smart people <LinkNewWindow href={"https://www.google.com/search?tbm=isch&q=quotes+about+" +this.props.term} text={'have said'} /> about {this.props.term}.</span>
    )
  }

}

export default Quote;
