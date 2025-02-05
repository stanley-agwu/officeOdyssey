import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setUpStore } from 'common/api/store/store';
import enableMocking from 'mocks/browser.dev';
import { BrowserRouter as Router } from 'react-router-dom';
import Toast from 'common/components/Toast/Toast';
import ErrorHandler from 'common/components/ErrorHandler/ErrorHandler';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';

enableMocking();

const store = setUpStore({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ErrorBoundary
          fallback={<ErrorHandler />}
          onError={(error: Error, info: React.ErrorInfo) => console.log(error, info)}
        >
          <App />
        </ErrorBoundary>
        <Toast />
      </Provider>
    </Router>
  </React.StrictMode>
);
