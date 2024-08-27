import express from 'express';
import { createUser, getUserById } from './services/userService';
import cors from 'cors';
import { body, validationResult } from 'express-validator';
import router from './routes/userRoutes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.post('/users', 
    body('email').isEmail(),
    body('pssword').isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const user = await createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error creating user' });
        }
    }
);

app.get('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    try {
        const user = await getUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user' });
    }
});

// Centralized error handler
app.use((err: any, req: any, res: any , next: any) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
