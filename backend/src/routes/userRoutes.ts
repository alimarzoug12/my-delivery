import { Router } from 'express';
import { signup, signin, fetchUsers } from '../controllers/userController';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/users', fetchUsers);

export default router;
