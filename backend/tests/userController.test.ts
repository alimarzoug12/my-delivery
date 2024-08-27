import request from 'supertest';
import app from '../src/server'; // Ensure this path is correct

describe('User Controller', () => {
    // Setup: Create a test user before all tests
    beforeAll(async () => {
        await request(app)
            .post('/api/users/signup')
            .send({
                firstName: 'ali',
                lastName: 'marzoug',
                email: 'ali@example.com',
                password: 'password123'
            });
    });

    // Cleanup: Remove test users after all tests
    afterAll(async () => {
        await request(app)
            .delete('/api/users') // Assuming an endpoint exists for deleting users
            .send({ email: 'ali@example.com' });
    });

    it('should signup a new user', async () => {
        const response = await request(app)
            .post('/api/users/signup')
            .send({
                firstName: 'Jane',
                lastName: 'marzoug',
                email: 'jane@example.com',
                password: 'password456'
            });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User created');
    });

    it('should login an existing user', async () => {
        const response = await request(app)
            .post('/api/users/login')
            .send({
                email: 'ali@example.com',
                password: 'password123'
            });

        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();
    });

    it('should return an error for invalid login', async () => {
        const response = await request(app)
            .post('/api/users/login')
            .send({
                email: 'ali@example.com',
                password: 'wrongpassword'
            });

        expect(response.status).toBe(401);
        expect(response.body.message).toBe('Invalid credentials');
    });

    it('should return an error for missing email during signup', async () => {
        const response = await request(app)
            .post('/api/users/signup')
            .send({
                firstName: 'ali',
                lastName: 'marzoug',
                password: 'password123'
            });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Email is required');
    });

    it('should return an error for missing password during signup', async () => {
        const response = await request(app)
            .post('/api/users/signup')
            .send({
                firstName: 'ali',
                lastName: 'marzoug',
                email: 'ali2@example.com'
            });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Password is required');
    });

    it('should return an error for existing email during signup', async () => {
        const response = await request(app)
            .post('/api/users/signup')
            .send({
                firstName: 'ali',
                lastName: 'marzoug',
                email: 'ali@example.com',
                password: 'password123'
            });

        expect(response.status).toBe(409); // Conflict status for existing user
        expect(response.body.message).toBe('Email already exists');
    });
});
