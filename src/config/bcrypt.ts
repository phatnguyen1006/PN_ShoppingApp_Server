
import { hash, compare, genSaltSync } from 'bcryptjs';
const { saltRounds = genSaltSync(12) } = process.env;

export const encrypt = async (password: string) => {
    return await hash(password, saltRounds);
};

export const decrypt = async (password: string, hash: string) => {
    return await compare(password, hash)
        .then(res => res)
        .catch(err => new Error(err));
};