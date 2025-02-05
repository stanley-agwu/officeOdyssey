interface CoreConfig {
  endpoints: {
    baseUrl: string;
    signUp: string;
    login: string;
    logout: string;
    quest: string;
  };

  routes: {
    login: string;
    quest: string;
    signUp: string;
    logout: string;
    welcome: string;
    general: string;
  };
}

export const coreConfig: CoreConfig = {
  endpoints: {
    baseUrl: 'https://officeodyssey:80',
    login: '/login',
    logout: '/logout',
    quest: 'quest',
    signUp: '/signup',
  },
  routes: {
    login: '/login',
    quest: '/quest',
    signUp: '/signup',
    logout: '/logout',
    welcome: '/welcome',
    general: '/general',
  },
};
