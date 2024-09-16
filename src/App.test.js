import { render, screen } from '@testing-library/react';
import App from './App';

test('renders table and add task', () => {
  render(<App />);
  const addTaskElement = screen.getByText(/add new task/i);
  const tableview = screen.getByText(/Task ID/i);
  expect(tableview).toBeInTheDocument();
  expect(addTaskElement).toBeInTheDocument();
});
