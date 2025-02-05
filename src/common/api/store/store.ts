import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { dilApiSlice } from 'common/api/services/questSlice';
import authReducer from 'common/api/services/authSlice';

const rootReducer = combineReducers({
  // Add the generated reducer as a specific top-level slice
  [dilApiSlice.reducerPath]: dilApiSlice.reducer,
  auth: authReducer,
});

export const setUpStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dilApiSlice.middleware),
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const useAppDispatch = (...args: unknown[]) => useDispatch<AppDispatch>(...args);
