import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User ${user.firstName} added to db`);
};

export const getUserById = (req, res) => {
  const userId = req.params.id;

  const user = users.find(user => user.id === userId);

  res.send(user);
};

export const getUser = (req, res) => {
  res.send(users);
};

export const deleteUser = (req, res) => {
  const userId = req.params.id;

  users = users.filter(user => user.id !== userId);

  res.send(`User with id: ${userId} deleted from db`);
};

export const updateUser = (req, res) => {
  const userId = req.params.id;

  const { firstName, lastName, age } = req.body;

  const user = users.find(user => user.id === userId);

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  res.send(user);
};
