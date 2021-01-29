import React from 'react';

class Footer extends React.Component {

  render() {

    return(
      <footer className="footer p-6">
        <div className="content has-text-centered">
          <p className="has-text-grey">
            <a className="has-text-grey" href="https://georgestrakhov.com" rel="noreferrer" target="_blank">George Strakhov</a> | 2021 | <a className="has-text-grey" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0</a>
          </p>
        </div>
      </footer>
    )

  }

}

export default Footer;
