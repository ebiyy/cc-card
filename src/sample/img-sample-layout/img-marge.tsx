import React from 'react';
import logo from './logo.svg';
import sampleImg from '../asset/img/f354_n.png';
import sampleImg2 from '../asset/img/shinpi_RARE_back.png';
import './img-marge.scss';

function ImgMarge() {
  return (
    <div className="App marge">
      <header className="App-header">
        <div className="trim">
          <div
            style={{ backgroundImage: `url(${sampleImg}),url(${sampleImg2})` }}
            className="App-logo"
          />
        </div>
      </header>
    </div>
  );
}

export default ImgMarge;
