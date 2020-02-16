import React from 'react';
import logo from './logo.svg';
import sampleImg from '../asset/img/f354.png';
import './img-fullsize.scss';

function ImgFullsize() {
  return (
    <div className="App fullsize">
      <header className="App-header">
        <div className="img-contatiner">
          <img src={sampleImg} className="App-logo" alt="logo" />
          <div className="cover">""</div>
          <div className="over">""</div>
          <div className="over-name">""</div>
        </div>
      </header>
    </div>
  );
}

export default ImgFullsize;
