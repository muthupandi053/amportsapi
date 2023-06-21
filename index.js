const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// Middleware to parse JSON requests
app.use(express.json());

// Sample data
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

// GET request to retrieve all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST request to create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT request to update a user
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  users = users.map(user => (user.id === parseInt(id) ? updatedUser : user));
  res.json(updatedUser);
});

// DELETE request to remove a user
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== parseInt(id));
  res.sendStatus(204);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
