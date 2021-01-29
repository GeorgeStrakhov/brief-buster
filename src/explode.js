import React from 'react';

import { GetBrief } from './helpers';

import Suggestions from './suggestions';

class Explode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.brief = GetBrief();
  }

  render() {
    return (
      <div>
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="container m-4 p-1">
              <p className="title has-text-centered mt-5">
                Strategy Explosion ToDo List
              </p>
              <div className="widgetContainer content">
                <Suggestions brief={this.state.brief} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Explode;
