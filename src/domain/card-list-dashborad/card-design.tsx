import React from 'react';
import logo from './logo.svg';

const CardDesign: React.FC = () => {
  return (
    <div className="App frame">
      <header className="App-header">
        <div className="frame2">
          <div className="trime-frame">
            <div className="trim">
              <div className="img-frame">
                <img
                  src={require('asset/img/f354_n.png')}
                  style={{
                    backgroundImage: `url(${require('asset/img/shinpi_RARE_back.png')})`,
                  }}
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

export default CardDesign;
