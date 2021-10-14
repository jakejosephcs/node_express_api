import express from 'express';
import {
  createUser,
  getUserById,
  getUser,
  deleteUser,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();

// All routes in here are starting with /users
router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
