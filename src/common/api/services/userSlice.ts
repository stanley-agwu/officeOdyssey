import { coreConfig } from 'common/core/config';
import { ILoginFormData } from 'common/model';

import { dilApiSlice } from './questSlice';

export const userApiSlice = dilApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<void, ILoginFormData>({
      query: (data) => ({
        url: coreConfig.endpoints.signUp,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    login: builder.mutation<void, ILoginFormData>({
      query: (data) => ({
        url: coreConfig.endpoints.login,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: coreConfig.endpoints.logout,
        method: 'POST',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useLogoutMutation } = userApiSlice;
