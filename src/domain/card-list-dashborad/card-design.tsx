import React from 'react';
import logo from './logo.svg';
import sampleImg from '../asset/img/f354_n.png';
import sampleImg2 from '../asset/img/shinpi_RARE_back.png';
import './img-sample.scss';

const cardDesign: React.FC = () => {
  return (
    <div className="App frame">
      <header className="App-header">
        <div className="frame2">
          <div className="trime-frame">
            <div className="trim">
              <div className="img-frame">
                <img
                  src={sampleImg}
                  style={{ backgroundImage: `url(${sampleImg2})` }}
                  className="App-logo"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default cardDesign;
