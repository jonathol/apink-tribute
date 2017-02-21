import React from 'react';
import Slide from './slide';

export default class Tribute extends React.Component {
  render() {
    return(
      <div>
        <div className="header">
          <img className="apink-logo" src="https://b.thumbs.redditmedia.com/zfWPP6tWsLkWnuJY1NMVhWbiCdy9yu0mkLWLrtmrqlM.png" />
        </div>

        <div className="container">
          <div className="jumbotron">
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <Slide />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
