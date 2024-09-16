import React, { useState, useEffect } from 'react';
import { Container, Button, Typography } from '@mui/material';
import TaskFormModal from './components/TaskFormModal';
import TaskList from './components/TaskList';
import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8080';

class Task {
  static async add(task){
    const response = await axios.post(`${API_BASE_URL}/tasks`, task);
    return response.data
  }

  static async update(task) {
    const response = await axios.put(`${API_BASE_URL}/tasks/${task.id}`, task);
    return response.data;
  }

  static async delete(id) {
    await axios.delete(`${API_BASE_URL}/tasks/${id}`);
  }

  static async listAll() {
    const response = await axios.get(`${API_BASE_URL}/tasks`);
    return response.data;
  }
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    async function fetchData(){
      const data = await Task.listAll();
      setTasks(data);
    }
    fetchData();
  }, []);

  const addOrUpdateTask = async (task) => {
    if (task.id) {
      // Update existing task
      const updatedTask = await Task.update(task);
      setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
    } else {
      // Add new task
      const newTask = await Task.add(task);
      setTasks([...tasks, newTask]);
    }
    setOpen(false);
  };

  const deleteTask = async (id) => {
    await Task.delete(id);
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
