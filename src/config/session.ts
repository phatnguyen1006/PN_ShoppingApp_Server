import { SessionOptions } from 'express-session';
import { IN_PRODUCT } from './app';

const HALF_HOUR = 1000 * 60 * 30;

export const {
    SESSION_SECRET = 'secret',
    SESSION_NAME = 'sid',
    SESSION_TIMEOUT = HALF_HOUR
} = process.env;

export const SESSION_OPTION : SessionOptions = {
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    cookie: {
        maxAge: +SESSION_TIMEOUT,
        // signed?: boolean;
        // expires?: Date;
        // httpOnly?: boolean;
        // path?: string;
        // domain?: string;
        secure: IN_PRODUCT,
        sameSite: true,
    },
    // genid?(req: express.Request): string;
    // store?: Store;
    rolling: true,
    resave: false,
    // proxy?: boolean,
    saveUninitialized: false,
    // unset?: 'destroy' | 'keep';
};