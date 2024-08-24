import { Pool } from 'pg';

// Database configuration
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '12345678',
    database: 'postgres',
    connectionTimeoutMillis: 30000, // 30 seconds
});

// Function to connect to the database
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
