import React from 'react';

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
                <h3>You can find more information about this amazing group in their <a href="https://en.wikipedia.org/wiki/Apink" target="_blank">Wikipedia entry</a>.</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
