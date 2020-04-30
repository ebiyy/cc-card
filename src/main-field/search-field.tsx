import React from 'react';

const MainField: React.FC = () => {
  return (
    <div>
      <header>
        <div>test</div>
      </header>
      <div className="flexbox">
        <section className="gallery">
          <h1>Contents</h1>
          <ul>...</ul>
        </section>
        <article className="main">
          <h1>The Little Prince</h1>
          <p>And he went back to meet the fox...</p>
        </article>
        <section className="side">
          <h1>About</h1>
          <p>The Little Prince (French: Le Petit Prince),...</p>
        </section>
      </div>
    </div>
  );
};

export default MainField;
