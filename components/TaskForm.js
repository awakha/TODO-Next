import { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { validateTask } from '../utils/validate'; 

const TaskForm = ({ addTask, taskToEdit }) => {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(''); 

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const validationError = validateTask(taskName);
    if (validationError) {
      setError(validationError); 
      return; 
    }

    // Добавление задачи
    addTask({ name: taskName });

    setTaskName(''); 
    setError(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className="custom-box" display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Название задачи"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          variant="outlined"
          fullWidth
          error={!!error} 
          helperText={error} 
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {taskToEdit ? 'Обновить задачу' : 'Добавить задачу'}
        </Button>
      </Box>
    </form>
  );
};

export default TaskForm;
