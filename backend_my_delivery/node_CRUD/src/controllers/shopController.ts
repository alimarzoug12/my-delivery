import { Request, Response } from 'express';
import pool from "../database";

export const addOrUpdateProduct = async (req: Request, res: Response) => {
    const { email, title, totalAmount } = req.body;
  
    try {
      const result = await pool.query(
        `INSERT INTO shop (email, description, total_price)
         VALUES ($1, $2, $3) RETURNING *`,
        [email, title, totalAmount]
      );
      res.status(201).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
export const getProductsByEmail = async (req: Request, res: Response) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const result = await pool.query(
            `SELECT description FROM shop WHERE email = $1`,
            [email]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
