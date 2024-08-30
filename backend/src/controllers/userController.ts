import { Request, Response } from 'express';
import { getUsers } from '../models/User';

// Mock user database (for demonstration purposes)
const users: { firstName: string; lastName: string; email: string; password: string }[] = [];

// Signup function
export const signup = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Save new user
    users.push({ firstName, lastName, email, password });
    res.status(201).json({ message: 'User created' });
};

// Signin function
export const signin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Authenticate user
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a mock token (for demonstration purposes)
    const token = 'Welcome!';
    res.status(200).json({ token });
};
export const fetchUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
