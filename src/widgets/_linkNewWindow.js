import React from 'react';

class LinkNewWindow extends React.Component {

  encodeUrl() {
    return encodeURI(this.props.href);
  }

  render() {
    return(
      <a href={this.encodeUrl()} target="_blank" rel="noreferrer">
      {this.props.text}
      </a>
    )
  }

}

export default LinkNewWindow;
