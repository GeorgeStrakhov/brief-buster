import React from 'react';

import LinkNewWindow from './_linkNewWindow';

class SearchTrends extends React.Component {

  render() {
    const competitors = this.props.brief.competitors.concat([this.props.brief.brand]); //add the brand to competitors
    const linkHref = 'https://trends.google.com/trends/explore?date=all&q='+competitors.join(',');
    return(
      <span>Compare <LinkNewWindow href={linkHref} text='long-term Share of Search trends' /> for {this.props.brief.brand} and its competitors.</span>
    )
  }

}

export default SearchTrends;
