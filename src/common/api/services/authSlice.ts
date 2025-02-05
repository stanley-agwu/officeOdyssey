/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { ILoginResponseData } from 'common/model';
import { hasPermission } from 'common/utils/common';

const initialState = {
  userDetails:
    localStorage?.getItem('userDetails') &&
    hasPermission(JSON.parse(localStorage.getItem('userDetails') as string) as ILoginResponseData)
      ? (JSON.parse(localStorage.getItem('userDetails') as string) as ILoginResponseData)
      : null,
};

// Redux Tool kit (RTK)
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logUserIn: (state, action) => {
      state.userDetails = action.payload;
      localStorage.setItem('userDetails', JSON.stringify(action.payload));
    },
    logUserOut: (state) => {
      state.userDetails = null;
      localStorage.removeItem('userDetails');
    },
  },
});

export const { logUserIn, logUserOut } = authSlice.actions;

export default authSlice.reducer;
