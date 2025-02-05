import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { SixRoot, SixSpinner } from '@six-group/ui-library-react/dist';

import Header from 'common/components/Header/Header';
import { coreConfig } from 'common/core/config';
import Login from 'views/Login/Login';

import '@six-group/ui-library/dist/ui-library/ui-library.css';
import PrivatedRoute from 'common/components/ProtectedRoute/ProtectedRoute';
import NotFoundPage from 'common/components/NotFoundPage/NotFoundPage';
import SignUp from 'views/SignUp/SignUp';
import Welcome from 'views/Welcome/Welcome';
import General from 'views/General/General';
import styles from './App.module.scss';

function App() {
  return (
    <SixRoot className={styles.container} padded={false}>
      <section className={styles.content} slot="main">
        <Header />
        <Suspense fallback={<SixSpinner />}>
          <Routes>
            <Route path={coreConfig.routes.welcome} element={<Welcome />} />
            <Route path={coreConfig.routes.signUp} element={<SignUp />} />
            <Route path={coreConfig.routes.signUp} element={<SignUp />} />
            <Route path={coreConfig.routes.login} element={<Login />} />
            <Route path={coreConfig.routes.general} element={<General />} />
            <Route index element={<Navigate to={coreConfig.routes.welcome} replace />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="" element={<PrivatedRoute />}>
              {/* <Route index element={<Navigate to={coreConfig.routes.quest} replace />} /> */}
              {/* <Route path={coreConfig.routes.quest} element={<Dashboard />} /> */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </section>
    </SixRoot>
  );
}

export default App;
