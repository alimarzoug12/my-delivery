import { Pool } from 'pg';

const pool = new Pool();

export interface User {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string; // Store hashed passwords
}

export const createUser = async (user: User) => {
    const { firstName, lastName, email, password } = user;
    const result = await pool.query(
        'INSERT INTO users (firstName, lastName, email, pssword) VALUES ($1, $2, $3, $4) RETURNING *',
        [firstName, lastName, email, password]
    );
    return result.rows[0];
};

export const findUserByEmail = async (email: string) => {
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );
    return result.rows[0];
};
