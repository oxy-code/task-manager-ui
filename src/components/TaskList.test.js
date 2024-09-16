import TaskList from "./TaskList";
import { render, screen } from '@testing-library/react';

test('renders task table', () => {
    const tasks = [];
    const mockFn = (task) => task;
    render(<TaskList tasks={tasks} onEdit={mockFn} onDelete={mockFn}/>);
    const taskId = screen.getByText(/Task ID/i);
    const title = screen.getByText(/Title/i);
    const description = screen.getByText(/description/i);
    const priority = screen.getByText(/priority/i);
    const status = screen.getByText(/status/i);
    const deadline = screen.getByText(/deadline/i);
    expect(taskId).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(priority).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(deadline).toBeInTheDocument();
});