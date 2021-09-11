import { Request, Response } from "express";
import { SESSION_NAME } from "../../config";

export const isLoggedIn = (req: Request) => {
    if (req.session) {
        return !!req.session.userID;
    }
}

export const LogIn = (req: Request, userID: string) : void => {
    if (req.session) {
        req.session.userID = userID;
    }
};

export const LogOut = (req: Request, res: Response) : void => {
    new Promise<void>((resolve, reject) => {
        req.session?.destroy((err: Error) => {
            if (err) reject(err);

            res.clearCookie(SESSION_NAME);
            resolve();
        });
    })
};