import { fireEvent, render, screen } from 'test/utilities';
import PackingList from '.';

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  render(<PackingList />);
  const inputField = screen.getByPlaceholderText('New Item');

  expect(inputField).toBeInTheDocument();
});

it('has a "Add New Item" button that is disabled when the input is empty', () => {
  render(<PackingList />);

  const newItemInput = screen.getByLabelText('New Item Name');
  const addNewItemButton = screen.getByRole('button', { name: 'Add New Item' });

  expect(newItemInput).toHaveValue('');
  expect(addNewItemButton).toBeDisabled();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = render(<PackingList />);

  const button = screen.getByRole('button', { name: 'Add New Item' });
  const inputField = screen.getByPlaceholderText('New Item');

  await user.type(inputField, 'Test');
  expect(inputField).toHaveValue('Test');
  expect(button).toBeEnabled();
});

it.todo(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {},
);
