import mongoose, { Document, Model, Mongoose } from 'mongoose';

export interface IProduct {
    name: string;
    description: string;
    img: string;
    status: string;
    price: number;
    lastUpdated?: Date;
}

export interface IProductDocument
    extends IProduct, Document {}

export interface IProductModel
    extends Model<IProductDocument> {}