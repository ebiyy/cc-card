import React from 'react';
import logo from './logo.svg';
import sampleImg from '../asset/img/f354.png';
import './img-resize.scss';

function ImgResize() {
  return (
    <div className="App resize">
      <header className="App-header">
        <div className="trim">
          <div
            style={{ backgroundImage: `url(${sampleImg})` }}
            className="App-logo"
          />
        </div>
      </header>
    </div>
  );
}

export default ImgResize;
