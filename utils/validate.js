export const validateTask = (taskName) => {
  if (!taskName.trim()) {
    return 'Название задачи не может быть пустым';
  }
  return '';
};