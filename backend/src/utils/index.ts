// utils/index.ts

/**
 * Validates an email address format.
 * @param email - The email address to validate.
 * @returns true if the email is valid, false otherwise.
 */
export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

/**
 * Hashes a password using bcrypt.
 * @param password - The plain text password.
 * @returns The hashed password.
 */
import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

/**
 * Compares a plain text password with a hashed password.
 * @param password - The plain text password.
 * @param hashedPassword - The hashed password.
 * @returns true if the passwords match, false otherwise.
 */
export const comparePasswords = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
};

/**
 * Generates a random token for user sessions or password resets.
 * @param length - The length of the token.
 * @returns A random string token.
 */
import crypto from 'crypto';

export const generateToken = (length: number = 32): string => {
    return crypto.randomBytes(length).toString('hex');
};
