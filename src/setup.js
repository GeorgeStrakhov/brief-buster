import React from 'react';

import { Link } from 'react-router-dom';

import { GetBrief, constructQueryParams } from './helpers';

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.state.brief = GetBrief();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let field = e.target.id.split('-')[1]; //FIX this is a terrible hack
    let val = e.target.value;
    if(field == 'competitors' || field == 'keywords') {
      val = e.target.value.split(', ');
      if (val.length == 1 && val[0] == "") { //crutch to avoid empty blocks if input field is empty
        val = [];
      }
    }
    this.setState(state => (state.brief[field] = val, state))
  }

  constructExplodeLink() {
    return 'explode?'+constructQueryParams(this.state.brief);
  }

  formIsValid() {
    if (this.state.brief.brand && this.state.brief.category) {
      return true;
    }
  }

  renderSubmit() { //conditionally renders submit button as enabled or disabled depending on whether the form is valid
    if (this.formIsValid()) {
      return (
        <Link className='button is-warning is-rounded is-large' to={this.constructExplodeLink()} >Let's do it</Link>
      )
    } else {
      return (
        <button className='button is-warning is-rounded is-large' disabled >Let's do it</button>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="container m-4 p-1">
              <p className="title has-text-centered mt-5">
                So you have a brief...
              </p>
              <p className="subtitle mt-1">
                This little tool can help you get started. Type in a few key things below and it will explode your brief into a long ToDo list that will help you start digging.
              </p>
              <hr />
              <div className="inputFormContainer">
                <div className="field">
                  <label className="label">What brand are you working on?</label>
                  <div className="control">
                    <input className="input" type="text" id="input-brand" onChange={this.handleChange} value={this.state.brief.brand} />
                  </div>
                  <p className="help">Type the name of the company, brand or sub-brand that is at the center of your brief.</p>
                </div>
                <div className="field">
                  <label className="label">What is the category?</label>
                  <div className="control">
                    <input className="input" type="text" id="input-category" onChange={this.handleChange} value={this.state.brief.category} />
                  </div>
                  <p className="help">Type the name of a single category that this brand is competing in.</p>
                </div>
                <div className="field">
                  <label className="label">Who are the biggest competitors?</label>
                  <div className="control">
                    <input className="input" type="text" id="input-competitors" onChange={this.handleChange} value={this.state.brief.competitors.join(', ')} />
                  </div>
                  <p className="help">List as many competitors as you want. Use comma to separate.</p>
                </div>
                <div className="field">
                  <label className="label">What are the most important words for this brand or category?</label>
                  <div className="control">
                    <input className="input" type="text" id="input-keywords" onChange={this.handleChange} value={this.state.brief.keywords.join(', ')} />
                  </div>
                  <p className="help">List a few keywords that are relevant to the brand and/or the category. Use comma to separate.</p>
                </div>
              </div>
              <hr />
              <div className="buttons is-centered">
                {this.renderSubmit()}
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

};

export default Setup;
