import express from 'express';
const router: express.Router = express.Router();

// APIs require
import productAPI from './product.API/product.api';
// console.log(productAPI);

router.get('/product', productAPI);

export default router;