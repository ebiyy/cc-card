import React from 'react';
import './main-field.scss';
import goblinImg from '../asset/img/goblin.png';
import Enemy from './enemy/enemy';

const MainField: React.FC = () => {
  return (
    <div className="main-container">
      <header>
        <div>test</div>
      </header>
      <div className="flexbox">
        <section className="gallery">
          <h1>Contents</h1>
          <ul>...</ul>
        </section>
        <section className="main">
          <div className="card-container">
            <Enemy />
            <div className="party-container">
              <section className="avant-garde-container">
                <div className="pure-card">❶</div>
                <div className="pure-card">❷</div>
                <div className="pure-card">❸</div>
                <div className="pure-card">❹</div>
                <div className="pure-card">❺</div>
                <div className="pure-card">前衛</div>
              </section>
              <section className="rear-guard-container">
                <div className="pure-card">❶</div>
                <div className="pure-card">❷</div>
                <div className="pure-card">❸</div>
                <div className="pure-card">❹</div>
                <div className="pure-card">❺</div>
                <div className="pure-card">後衛</div>
              </section>
            </div>
          </div>
        </section>
        <section className="side">
          <h1>About</h1>
          <p>The Little Prince (French: Le Petit Prince),...</p>
        </section>
      </div>
    </div>
  );
};

export default MainField;
