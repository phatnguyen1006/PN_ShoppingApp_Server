import { NextFunction, Request, Response } from 'express';
import { isLoggedIn } from '../controllers/auth/auth';
import { Unauthorized } from '../errors/index.errors';

export const guest = (req: Request, res: Response, next: NextFunction) => {
    if (isLoggedIn(req)) {
        return next(new Unauthorized("You have already logged in!"));
    }

    next();
};

export const notGuest = (req: Request, res: Response, next: NextFunction) => {
    if (!isLoggedIn(req)) {
        return res.json(new Unauthorized("You must be logged in!"));
    }

    next();
};

export const Validation = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    // RegEx Password Check
    if (!password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/u)) {
        return res.json({
            message: "Invalid Password !!!",
            hint: "Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters"
        });
    }

    next();
}