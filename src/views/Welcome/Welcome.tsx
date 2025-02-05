import { useNavigate } from 'react-router-dom';

import { SixButton } from '@six-group/ui-library-react/dist';

import { coreConfig } from 'common/core/config';
import { SizeEnum, TypeEnum } from 'common/utils/enums';

import { Box } from '@mui/material';
import styles from './Welcome.module.scss';

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(coreConfig.routes.signUp);
  };

  return (
    <div className={styles.welcome}>
      <div className={styles.container}>
        <div className={styles.welcomeText}>
          The grand Hall of Beginnings welcomes you into the realm of Prosperitas. As you step
          through the ornate doors, the echoes of past legends and the promise of restored financial
          magic fill the air. This is where your epic journey commences.
        </div>
        <Box className={styles.button}>
          <SixButton
            type={TypeEnum.secondary}
            size={SizeEnum.large}
            className={styles.submitButton}
            onClick={handleClick}
            aria-label="Button"
          >
            Start the Journey!
          </SixButton>
        </Box>
      </div>
    </div>
  );
};

export default Welcome;
