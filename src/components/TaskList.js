import React from 'react';
import { Table, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';


function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#EEEEEE' }}>
            <TableCell width='100px'>Task ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell width='450px'>Description</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Deadline</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {tasks.map((task) => (
            <TableRow key={task.id}>
                <TableCell>{task.id}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.priority}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>{task.deadline}</TableCell>
                <TableCell width='100px'>
                    <IconButton edge="end" onClick={() => onEdit(task)}><EditIcon /></IconButton>
                    <IconButton edge="end" onClick={() => onDelete(task.id)}><DeleteIcon /></IconButton>
                </TableCell>
            </TableRow>
        ))}
        </TableBody>
        </Table>
    </TableContainer>
  );
}

export default TaskList;
