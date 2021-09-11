import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    status: String,
    price: mongoose.Types.Decimal128,
}, { timestamps: true });

export default productsSchema;