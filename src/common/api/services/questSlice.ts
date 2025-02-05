import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { coreConfig } from 'common/core/config';
import { API_TAGS } from 'common/utils/constant';

// RTK Query
export const dilApiSlice = createApi({
  reducerPath: 'officeOdysseyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: coreConfig.endpoints.baseUrl,
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }),
  tagTypes: [API_TAGS.quest],
  endpoints: (builder) => ({
    getQuestData: builder.query<void, null>({
      query: () => coreConfig.endpoints.quest,
      providesTags: [API_TAGS.quest],
    }),
    postQuestData: builder.mutation<void, { file: FormData; token: string }>({
      query: ({ file, token }) => ({
        url: coreConfig.endpoints.quest,
        method: 'POST',
        body: file,
        headers: {
          'X-CSRFToken': token,
        },
      }),
      invalidatesTags: [API_TAGS.quest],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuestDataQuery, usePostQuestDataMutation } = dilApiSlice;
