import { Router } from 'express';
import { authenticateToken } from '../middleware/authMiddleware'; // Adjust the path as needed

const router = Router();

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

export default router;
