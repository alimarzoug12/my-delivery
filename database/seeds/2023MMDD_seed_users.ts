// database/seeds/2023MMDD_seed_users.ts
import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
});

const seedUsers = async () => {
    const users = [
        { firstName: 'John', lastName: 'Doe', email: 'john@example.com', pssword: 'password123' },
        { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', pssword: 'password456' },
    ];

    for (const user of users) {
        await pool.query(
            'INSERT INTO users (firstName, lastName, email, pssword) VALUES ($1, $2, $3, $4)',
            [user.firstName, user.lastName, user.email, user.pssword]
        );
    }
    console.log("Users seeded successfully.");
};

seedUsers().catch(err => {
    console.error("Error seeding users:", err);
}).finally(() => {
    pool.end();
});
