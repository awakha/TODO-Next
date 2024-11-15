import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TaskForm from '../../components/TaskForm';
import { Container, Typography } from '@mui/material';

const EditTask = () => {
  const router = useRouter();
  const { id } = router.query;
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    if (id) {
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const task = savedTasks.find(t => t.id === parseInt(id));
      if (task) {
        setTaskToEdit(task);
      } else {
        // Если задача не найдена, перенаправляем на главную
        router.push('/');
      }
    }
  }, [id, router]);

  const updateTask = (updatedTask) => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = savedTasks.map(task =>
      task.id === parseInt(id) ? { ...task, name: updatedTask.name } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    router.push('/'); // Перенаправляем на главную страницу
  };

  return (
    <Container className="container">
      <Typography variant="h1">Редактирование задачи</Typography>
      <TaskForm addTask={updateTask} taskToEdit={taskToEdit || { name: '' }} />
    </Container>
  );
};

export default EditTask;