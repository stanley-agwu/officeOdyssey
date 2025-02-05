import { describe, expect, it } from 'vitest';

import { render, screen } from 'tests/test-utils';

import App from './App';

describe('App', async () => {
  it('renders App, displays login screen', async () => {
    render(<App />);

    const debitServicesTitle = await screen.findByRole('heading', { name: 'Office Odyssey' });
    expect(debitServicesTitle).toBeInTheDocument();
  });
});
