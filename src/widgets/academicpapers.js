import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class AcademicPapers extends React.Component {

  render() {
    return(
      <span>Check out if any <LinkNewWindow href={'https://www.jstor.org/action/doBasicSearch?Query=' + this.props.term} text={'Academic Papers about '+this.props.term} /> could give some insights.</span>
    )
  }

}

export default AcademicPapers;
