import { Schema } from 'mongoose';
import { UserDocument } from './users.model';

export const userSchema= new Schema<UserDocument>({
    name: String,
    email: String,
    password: String,
}, {
    timestamps: true
});