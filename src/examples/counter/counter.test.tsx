// @vitest-environment happy-dom

import { screen } from '@testing-library/react';
import Counter from '.';
import { render } from './test/utilities';

test('it should render the component', () => {
  render(<Counter />);
});

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = render(<Counter />);
  await user.click(screen.getByRole('button', { name: 'Increment' }));
  expect(screen.getByText('1')).toBeInTheDocument();
});
