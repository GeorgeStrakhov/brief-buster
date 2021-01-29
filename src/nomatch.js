import React from 'react';

import { Link } from 'react-router-dom';

class NoMatch extends React.Component {

  render() {
    return (
      <div className="m-6">
        <div className="columns is-centered">
          <div className="column is-half">
            <p className="title has-text-centered">404</p>
            <p className="subtitle has-text-centered mt-5">Uh-oh, looks like the link is no good...</p>
            <div className="buttons is-centered m-6">
              <Link to="/" className="button is-warning is-rounded is-large">Back to the start</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default NoMatch;
