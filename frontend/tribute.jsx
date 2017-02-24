import React from 'react';
import Slide from './slide';
import Feed from './feed';

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
              <div className="col-xs-6 col-md-6">
                <Slide />
              </div>
              <div className="col-xs-4 col-md-4">
                <Feed />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
