import React from 'react';
import CharacterMiniCard from './character-mini-card';
import { CharacterType } from '../../reducer/character-hp.reducer';

const mock = ['f001', 'f003', 'f007'];

const FirstCharacter: React.FC = () => {
  return (
    <div className="party-container">
      <section className="avant-garde-container">
        {[0, 1, 2].map(val => (
          <CharacterMiniCard
            id={`vanguard${val + 1}` as CharacterType}
            characterImgId={mock[val]}
            key={val}
          />
        ))}
      </section>
    </div>
  );
};

export default FirstCharacter;
