import { model, Document } from 'mongoose';
import { userSchema } from './users.schema';
import { encrypt, decrypt } from '../../config/bcrypt';
import { compare } from 'bcryptjs';

// User Model
export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    matchPassword: (password: string) => Promise<boolean>;
};

userSchema.pre<UserDocument>('save', async function () {
    if (this.isModified()) {
        this.password = await encrypt(this.password);
    }
});

userSchema.methods.matchPassword = async function(password: string) {
    return await compare(password, this.password);
};

const User = model<UserDocument>('User', userSchema, 'user');
export default User;