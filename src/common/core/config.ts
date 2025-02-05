interface CoreConfig {
  endpoints: {
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
  };
}

export const coreConfig: CoreConfig = {
  endpoints: {
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
  },
};
