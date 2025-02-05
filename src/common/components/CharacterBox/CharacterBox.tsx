import { Box } from '@mui/material';
import { SixCheckbox } from '@six-group/ui-library-react/dist';
import { IAvatarData } from 'common/model';
import { Dispatch, SetStateAction } from 'react';

import styles from './CharacterBox.module.scss';

interface CharacterBoxProps {
  name: string;
  isAvatar: boolean;
  setAvatar: Dispatch<SetStateAction<IAvatarData>>;
  logo: string;
}

const CharacterBox = ({ name, isAvatar, setAvatar, logo }: CharacterBoxProps) => {
  return (
    <Box className={styles.characterBox}>
      <SixCheckbox
        checked={isAvatar}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSix-checkbox-change={setAvatar as any}
      />
      <img src={logo} alt={name} width={100} height="auto" />
    </Box>
  );
};

export default CharacterBox;
