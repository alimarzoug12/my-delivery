import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
});

const createUsersTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            firstName VARCHAR(30) NOT NULL,
            lastName VARCHAR(30) NOT NULL,
            email VARCHAR(50) NOT NULL,
            pssword VARCHAR(50) NOT NULL
        );
    `;
    await pool.query(query);
    console.log("Users table created successfully.");
};

createUsersTable().catch(err => {
    console.error("Error creating users table:", err);
}).finally(() => {
    pool.end();
});