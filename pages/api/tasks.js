export default function handler(req, res) {
  if (req.method === 'GET') {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const newTask = req.body;
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    res.status(201).json(newTask);
  }
}