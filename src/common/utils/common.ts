import { coreConfig } from 'common/core/config';
import moment from 'moment';
import { dilApiSlice } from 'common/api/services/questSlice';
import { logUserOut } from 'common/api/services/authSlice';
import { API_TAGS } from './constant';

export const formatDate = (utcDateString: string) =>
  moment.utc(utcDateString).format('DD/MM/YYYY HH:mm:ss');

export const PATHNAMES = {
  login: () => coreConfig.routes.login,
} as const;

export const hasPermission = (config: object) => Boolean(Object?.keys(config));

export const invalidateAPITags = (callback: (...args: unknown[]) => void) => {
  callback(dilApiSlice.util.invalidateTags([API_TAGS.quest]));
};

export const resetReduxState = (callback: (...args: unknown[]) => void) => {
  invalidateAPITags(callback);
  callback(dilApiSlice.util.resetApiState());
};

export const handleLogout = (
  logout: (url: string) => void,
  dispatch: (...args: unknown[]) => void,
  navigate: (url: string) => void
) => {
  logout(coreConfig.endpoints.logout);
  dispatch(logUserOut());
  navigate(coreConfig.routes.login);
  resetReduxState(dispatch);
};
