import { Request, Response } from 'express';

// Mock user database (for demonstration purposes)
const users: { email: string; password: string }[] = [];

// Signup function
export const signup = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Save new user
    users.push({ email, password });
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
    const token = 'your-token';
    res.status(200).json({ token });
};
