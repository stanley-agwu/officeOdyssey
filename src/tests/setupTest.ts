/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import 'vitest-canvas-mock';
import { fetch } from 'cross-fetch';
import { server } from 'mocks/server';
import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';

// Add `fetch` polyfill.
global.fetch = fetch;

beforeEach(() => {
  // Mock the ResizeObserver
  const resizeObserverMock = vi.fn();
  resizeObserverMock.mockReturnValue({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  });

  // Stub the global ResizeObserver
  vi.stubGlobal('ResizeObserver', resizeObserverMock);
  window.ResizeObserver = resizeObserverMock;
  global.window.URL.createObjectURL = vi.fn();
  global.window.URL.revokeObjectURL = vi.fn();
});

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
