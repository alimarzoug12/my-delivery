// express.d.ts
import * as express from 'express';

// Define the User interface with relevant properties
interface User {
    id: number;        // Unique identifier for the user
    firstName?: string; // Optional first name
    lastName?: string;  // Optional last name
    email: string;     // User's email address
    password:string
    
}

// Extend the Express namespace to include the custom user property in the Request interface
declare global {
    namespace Express {
        interface Request {
            user?: User; // Optional user property of type User
        }
    }
}

// Ensure this file is treated as a module
export {};
