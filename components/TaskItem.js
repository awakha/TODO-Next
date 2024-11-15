import { Box, Checkbox, Button, Typography, Tooltip } from '@mui/material';

const TaskItem = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  return (
    <Box className="custom-box" display="flex" alignItems="center" justifyContent="space-between" mb={2}>
      <Box className="task" display="flex" alignItems="center">
        <Checkbox
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <Tooltip title={task.name} arrow>
          <Typography className="task-description" variant="body1" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </Typography>
        </Tooltip>
      </Box>
      <Box className="button-container">
        <Button className="action-button" onClick={() => editTask(task)} color="primary" variant="outlined" size="small" style={{ marginRight: '10px' }}>
          Редактировать
        </Button>
        <Button className="action-button"  onClick={() => deleteTask(task.id)} color="secondary" variant="outlined" size="small">
          Удалить
        </Button>
      </Box>
    </Box>
  );
};

export default TaskItem;