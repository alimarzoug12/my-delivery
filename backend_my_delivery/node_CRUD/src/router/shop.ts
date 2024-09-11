// src/routes/shop.ts
import express from 'express';
import { addOrUpdateProduct, getProductsByEmail } from '../controllers/shopController';

const router = express.Router();

router.post('/shop', addOrUpdateProduct);
router.get('/shop', getProductsByEmail);

export default router;
