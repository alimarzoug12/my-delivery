import { Pool } from 'pg';
import { User } from '../models/User'; // Adjust the import path as necessary

const pool = new Pool({
    user: 'your_user', // Replace with your database user
    host: 'localhost',  // Replace with your database host
    database: 'your_database', // Replace with your database name
    password: 'your_password', // Replace with your database password
    port: 5432, // Default PostgreSQL port
});

// Function to create a new user
export const createUser = async (userData: Omit<User, 'id'>): Promise<User> => {
    const { firstName, lastName, email, password } = userData;
    try {
        const result = await pool.query(
            'INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
            [firstName, lastName, email, password]
        );
        return result.rows[0]; // Return the created user
    } catch (error) {
        console.error('Error creating user:', error);
        throw error; // Rethrow the error for further handling
    }
};

// Function to get a user by ID
export const getUserById = async (userId: number): Promise<User | null> => {
    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE id = $1',
            [userId]
        );
        return result.rows[0] || null; // Return the user if found, otherwise null
    } catch (error) {
        console.error('Error getting user by ID:', error);
        throw error; // Rethrow the error for further handling
    }
};
