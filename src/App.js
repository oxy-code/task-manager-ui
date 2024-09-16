import React, { useState } from 'react';
import { Container, Button, Typography } from '@mui/material';
import TaskFormModal from './components/TaskFormModal';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const addOrUpdateTask = (task) => {
    if (task.id) {
      // Update existing task
      setTasks(tasks.map(t => t.id === task.id ? task : t));
    } else {
      // Add new task
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
    setOpen(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Container sx={{
      mt: '24px'
    }}>
      <Typography variant="h3" gutterBottom>
        Task Manager
      </Typography>
      <Button 
        variant="contained" 
        sx={{ float: 'right' }}
        color="primary" 
        onClick={() => { setCurrentTask(null); setOpen(true); }}
      >
        Add New Task
      </Button>
      <TaskList tasks={tasks} onEdit={(task) => { setCurrentTask(task); setOpen(true); }} onDelete={deleteTask} />
      <TaskFormModal 
        open={open} 
        onClose={() => setOpen(false)} 
        onSave={addOrUpdateTask} 
        task={currentTask} 
      />
    </Container>
  );
}

export default App;
