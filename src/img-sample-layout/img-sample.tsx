import React from 'react';
import logo from './logo.svg';
import sampleImg from '../asset/img/f354.png';
import './img-sample.scss';

function ImgFrame() {
  return (
    <div className="App frame">
      <header className="App-header">
        <div className="frame2">
          <div className="trime-frame">
            <div className="trim">
              <div className="img-frame">
                <img src={sampleImg} className="App-logo" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ImgFrame;
