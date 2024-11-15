import { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { validateTask } from '../utils/validate'; // Подключаем валидацию

const TaskForm = ({ addTask, taskToEdit }) => {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(''); // Состояние для ошибки

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация перед добавлением задачи
    const validationError = validateTask(taskName);
    if (validationError) {
      setError(validationError); // Если ошибка, устанавливаем её в состояние
      return; // Прерываем выполнение функции, не добавляем задачу
    }

    // Добавление задачи
    addTask({ name: taskName });

    setTaskName(''); // Очищаем поле ввода
    setError(''); // Очищаем ошибку
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
          error={!!error} // Если есть ошибка, текстовое поле будет подсвечено
          helperText={error} // Показываем сообщение об ошибке
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {taskToEdit ? 'Обновить задачу' : 'Добавить задачу'}
        </Button>
      </Box>
    </form>
  );
};

export default TaskForm;
