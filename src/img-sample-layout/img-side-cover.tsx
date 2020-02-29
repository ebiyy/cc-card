import React from 'react';
import logo from './logo.svg';
import sampleImg from '../asset/img/f354_n.png';
import sampleImg2 from '../asset/img/shinpi_RARE_back.png';
import './img-side-cover.scss';

function ImgSideCover() {
  return (
    <div className="App side">
      <header className="App-header">
        <div className="trim">
          <div
            style={{ backgroundImage: `url(${sampleImg}),url(${sampleImg2})` }}
            className="App-logo"
          />
          {/* <div className="side-cover"></div> */}
        </div>
      </header>
    </div>
  );
}

export default ImgSideCover;
