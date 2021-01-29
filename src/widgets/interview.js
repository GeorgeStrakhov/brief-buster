import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class Interview extends React.Component {

  render() {
    return(
      <span>
        Reach out to <LinkNewWindow href={"https://www.linkedin.com/search/results/people/?keywords=" + this.props.brand + "&qKat=search"} text={this.props.brand + " employees or alumni"} /> and ask them for a quick interview to get an insider's perspective.
      </span>
    )
  }

}

export default Interview;
