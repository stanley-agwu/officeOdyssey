import { coreConfig } from 'common/core/config';
import { http, HttpResponse, type HttpHandler } from 'msw';
import loginDataResult from 'mocks/results/loginData';

const { baseUrl } = coreConfig.endpoints;

export const handlers: HttpHandler[] = [
  // Intercept "GET requests..."
  http.post(baseUrl.concat(coreConfig.endpoints.login), () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(loginDataResult, { status: 200 });
  }),
  http.post(baseUrl.concat(coreConfig.endpoints.logout), () => {
    return HttpResponse.json({ message: 'success' }, { status: 200 });
  }),
];
