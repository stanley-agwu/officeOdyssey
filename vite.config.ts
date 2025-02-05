/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      common: '/src/common',
      mocks: '/src/mocks',
      types: '/types',
      views: '/src/views',
      styles: '/src/styles',
      tests: '/src/tests',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTest.ts',
    deps: {
      inline: ['vitest-canvas-mock'],
    },
    // For this config, check https://github.com/vitest-dev/vitest/issues/740
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
    css: true,
    coverage: {
      all: true,
      exclude: [
        '**/public/**',
        '**/src/mocks/**',
        '**/.eslintrc.cjs',
        '**/.prettierrc.cjs',
        '**/commitlint.config.js ',
        '**/main.tsx',
      ],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'styles/main';`,
        api: 'modern-compiler',
      },
    },
  },
});
