import React, { useContext } from 'react';
import { GiCardRandom, GiArrowScope } from 'react-icons/gi';
import { AtackAnimationToggleContext } from '../../context';
import './header-field.scss';

type Props = {
  setCardCoiceMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderField: React.FC<Props> = props => {
  const { atackAnimationToggle, setatackAnimationToggle } = useContext(
    AtackAnimationToggleContext,
  );
  return (
    <header style={{ fontSize: '3.5rem' }}>
      <GiCardRandom
        onClick={() => props.setCardCoiceMode(beforState => !beforState)}
      />
      <GiArrowScope
        onClick={() => setatackAnimationToggle(beforState => !beforState)}
      />
    </header>
  );
};

export default HeaderField;
