import React from 'react';
import { GiCardRandom } from 'react-icons/gi';

type Props = {
  setCardCoiceMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderField: React.FC<Props> = props => {
  return (
    <header style={{ fontSize: '3.5rem' }}>
      <GiCardRandom
        onClick={() => props.setCardCoiceMode(beforState => !beforState)}
      />
    </header>
  );
};

export default HeaderField;
