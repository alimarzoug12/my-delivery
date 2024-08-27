import { Pool } from 'pg';

// Database configuration
const pool = new Pool({
    user: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "postgres",
    password: process.env.DB_PASSWORD || "12345678",
    port: Number(process.env.DB_PORT) || 5432,
});

// Function to connect to the databases
export const connectDatabase = async () => {
    try {
        const client = await pool.connect();
        console.log('Database connected successfully');
        client.release(); // Release the client back to the pool
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

// Export the pool for use in other parts of the application
export default pool;
