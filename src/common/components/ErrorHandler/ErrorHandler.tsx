import { SixButton, SixErrorPage } from '@six-group/ui-library-react/dist';
import { SizeEnum } from 'common/utils/enums';
import { useErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'common/api/store/store';
import { useLogoutMutation } from 'common/api/services/userSlice';
import { handleLogout } from 'common/utils/common';
import styles from './ErrorHandler.module.scss';

const customDescription = [
  'Something went wrong!',
  "Please click the 'Try again' button. But if the problem persist, please contact the Office Odyssey team",
];

const ErrorHandler = () => {
  const { resetBoundary } = useErrorBoundary();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  const handleLogUserAfterReset = () => {
    handleLogout(logout, dispatch, navigate);
    resetBoundary();
  };

  return (
    <section className={styles.errorHandler}>
      <SixErrorPage error-code="500" language="en" customDescription={customDescription} />
      <div className={styles.buttonGroup}>
        <SixButton
          type="secondary"
          size={SizeEnum.medium}
          onClick={resetBoundary}
          aria-label="Reset boundary button"
        >
          Try again
        </SixButton>
        <SixButton
          type="primary"
          size={SizeEnum.medium}
          onClick={handleLogUserAfterReset}
          aria-label="Reset boundary button"
        >
          Logout
        </SixButton>
      </div>
    </section>
  );
};

export default ErrorHandler;
