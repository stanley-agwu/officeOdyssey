import { PropsWithChildren, ReactElement } from 'react';
import { MemoryRouterProps } from 'react-router';
import { MemoryRouter } from 'react-router-dom';

import { afterEach } from 'vitest';

import { render, type RenderOptions, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { AppStore, RootState, setUpStore } from 'common/api/store/store';
import Toast from 'common/components/Toast/Toast';

afterEach(() => {
  cleanup();
});

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
  routerProps?: MemoryRouterProps;
}

const customRender = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setUpStore(preloadedState),
    routerProps = {},
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <>
        <Toast />
        <MemoryRouter {...routerProps}>
          <Provider store={store}>{children}</Provider>
        </MemoryRouter>
      </>
    );
  };
  return {
    store,
    ...render(ui, { wrapper, ...renderOptions }),
  };
};

export * from '@testing-library/react';
export * from '@testing-library/user-event';
export { customRender as render };
export { userEvent };
