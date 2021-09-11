import { model } from 'mongoose';
import { IProductDocument, IProductModel } from './products.types';
import productsSchema from './products.schema';

export const ProductModel =
    model<IProductDocument>('Products', productsSchema, 'products');