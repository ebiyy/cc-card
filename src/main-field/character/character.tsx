import React from 'react';
import { GiSpinningSword, GiFairyWand } from 'react-icons/gi';
import CharacterMiniCard from './character-mini-card';

const mock = [
  'f001',
  'f053',
  'f174',
  'f104',
  'f036',
  'f090',
  'f100',
  'f102',
  'f208',
  'f005',
];

const Character: React.FC = () => {
  return (
    <div className="party-container">
      <section className="avant-garde-container">
        {[0, 1, 2, 3, 4].map(val => (
          <CharacterMiniCard
            id={`vanguard${val + 1}`}
            characterImgId={mock[val]}
            key={val}
          />
        ))}

        <div className="pure-card">
          <GiSpinningSword />
        </div>
      </section>
      <section className="rear-guard-container">
        {[5, 6, 7, 8, 9].map(val => (
          <CharacterMiniCard
            id={`rearguard${val - 4}`}
            characterImgId={mock[val]}
            key={val}
          />
        ))}

        <div className="pure-card">
          <GiFairyWand />
        </div>
      </section>
    </div>
  );
};

export default Character;
