import request from 'supertest';
import app from '../src/server'; // Ensure this path is correct

describe('User Controller', () => {
    it('should signup a new user', async () => {
        const response = await request(app)
            .post('/api/users/signup')
            .send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                password: 'password123'
            });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User created');
    });

    it('should login an existing user', async () => {
        // Ensure the user exists before testing login
        await request(app)
            .post('/api/users/signup')
            .send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                password: 'password123'
            });

        const response = await request(app)
            .post('/api/users/login')
            .send({
                email: 'john@example.com',
                password: 'password123'
            });

        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();
    });

    it('should return an error for invalid login', async () => {
        const response = await request(app)
            .post('/api/users/login')
            .send({
                email: 'john@example.com',
                password: 'wrongpassword'
            });

        expect(response.status).toBe(401);
        expect(response.body.message).toBe('Invalid credentials');
    });
});
