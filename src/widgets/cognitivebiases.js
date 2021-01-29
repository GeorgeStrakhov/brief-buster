import React from 'react';

class CognitiveBiases extends React.Component {

  render() {
    return(
      <span>Look through the <a href="https://en.wikipedia.org/wiki/List_of_cognitive_biases#Belief,_decision-making_and_behavioral" target="_blank" rel="noreferrer">list of human cognitive biases</a> and see if there is anything relevant for the {this.props.category} category</span>
    )
  }

}

export default CognitiveBiases;
