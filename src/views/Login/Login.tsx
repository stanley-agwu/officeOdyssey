import { useState } from 'react';

import { SixInputCustomEvent } from '@six-group/ui-library';
import { SixButton, SixInput } from '@six-group/ui-library-react/dist';

import { logUserIn } from 'common/api/services/authSlice';
import { useLoginMutation } from 'common/api/services/userSlice';
import { useAppDispatch } from 'common/api/store/store';
import { showError } from 'common/components/Toast/showToastUtil';
import { IAvatarData, ILoginFormData, ILoginResponseData } from 'common/model';
import { SizeEnum, TypeEnum } from 'common/utils/enums';

import { Box } from '@mui/material';
import CharacterBox from 'common/components/CharacterBox/CharacterBox';
import Avatar1 from 'common/assets/avatar-1.png';
import Avatar2 from 'common/assets/avatar-2.png';
import Avatar3 from 'common/assets/avatar-3.png';
import Avatar4 from 'common/assets/avatar-4.png';
import styles from './Login.module.scss';

const initAvatar = {
  avatar1: false,
  avatar2: false,
  avatar3: false,
  avatar4: false,
};

function Login() {
  const [formData, setFormData] = useState<ILoginFormData>({
    userId: '',
    nickname: undefined,
    avatar: null,
  });
  const [avatar, setAvatar] = useState<IAvatarData>(initAvatar);
  const dispatch = useAppDispatch();

  const [login, { isLoading, isError }] = useLoginMutation();

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.userId || !formData.nickname) {
      return;
    }

    try {
      const response = (await login(formData)) as unknown as {
        data: ILoginResponseData;
        error?: {
          data: { message: string };
        };
      };
      if (response?.data) {
        dispatch(
          logUserIn({
            ...response.data,
          })
        );
      } else {
        // setIsNoPermissionModalOpen(true);
      }
      if (response?.error) {
        throw Error(response.error.data.message);
      }
    } catch (error) {
      showError(
        'Login error',
        (error as unknown as { data: { message: string } })?.data?.message ??
          'An error occurred while trying to sign in'
      );
    }
  };

  const charactersData = [
    {
      name: 'Avatar1',
      isAvatar: avatar.avatar1,
      setAvatar: () => {
        setAvatar({ ...initAvatar, avatar1: !avatar.avatar1 });
        setFormData({ ...formData, avatar: Avatar1 });
      },
      logo: Avatar1,
    },
    {
      name: 'Avatar2',
      isAvatar: avatar.avatar2,
      setAvatar: () => {
        setAvatar({ ...initAvatar, avatar2: !avatar.avatar2 });
        setFormData({ ...formData, avatar: Avatar2 });
      },
      logo: Avatar2,
    },
    {
      name: 'Avatar3',
      isAvatar: avatar.avatar3,
      setAvatar: () => {
        setAvatar({ ...initAvatar, avatar3: !avatar.avatar3 });
        setFormData({ ...formData, avatar: Avatar3 });
      },
      logo: Avatar3,
    },
    {
      name: 'Avatar4',
      isAvatar: avatar.avatar4,
      setAvatar: () => {
        setAvatar({ ...initAvatar, avatar4: !avatar.avatar4 });
        setFormData({ ...formData, avatar: Avatar4 });
      },
      logo: Avatar4,
    },
  ];

  return (
    <div className={styles.login}>
      <div className={styles.cardContainer}>
        <form className={styles.form} onSubmit={onFormSubmit}>
          <Box className={styles.row} sx={{ width: { xs: '100%', md: '20rem' } }}>
            <span className={styles.label}>User ID</span>
            <SixInput
              className={styles.field}
              value={formData.userId}
              onSix-input-change={(event: SixInputCustomEvent<undefined>) =>
                setFormData({ ...formData, userId: event.target.value.trim() })
              }
              placeholder="Enter user ID"
              errorText={isError ? 'User ID is not correct' : undefined}
              invalid={isError}
              aria-label="user ID"
            />
          </Box>
          <Box className={styles.row} sx={{ width: { xs: '100%', md: '20rem' } }}>
            <span className={styles.label}>Nick name</span>
            <SixInput
              className={styles.field}
              value={formData.nickname}
              onSix-input-change={(event: SixInputCustomEvent<undefined>) =>
                setFormData({ ...formData, nickname: event.target.value.trim() })
              }
              placeholder="Enter Nick name"
              type="text"
              errorText={isError ? 'Nick name is not correct' : undefined}
              invalid={isError}
              aria-label="Nickname"
            />
          </Box>
          <Box className={styles.characters}>
            <div className={styles.characterTitle}>Choose your character</div>
            <Box className={styles.character}>
              {charactersData.map((data) => (
                <CharacterBox
                  key={data.name}
                  name={data.name}
                  isAvatar={data.isAvatar}
                  setAvatar={data.setAvatar}
                  logo={data.logo}
                />
              ))}
            </Box>
          </Box>
          <Box className={styles.button} sx={{ width: { xs: '100%', md: '20rem' } }}>
            <SixButton
              type={TypeEnum.secondary}
              size={SizeEnum.large}
              disabled={isLoading}
              submit
              className={styles.submitButton}
              aria-label="Submit"
            >
              Let&apos;s go
            </SixButton>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default Login;
