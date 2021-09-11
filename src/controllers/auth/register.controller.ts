import {
    Request,
    Response,
} from 'express';
import { User } from '../../models/index';
import { LogIn } from '../../controllers';
import { createAccessToken, createRefreshToken } from '../../utils/index';

export const registerController = async (req: Request, res: Response): Promise<Response> => {
    const { email, password, name } = req.body;

    const foundUser = await User.exists({ email });
    if (foundUser) {
        throw new Error("Invalid Email!");
    }
    
    const newUser = new User({
        name,
        email,
        password
    });

    const user = await newUser.save()
        .then((result) => {
            console.log("Successed to register!!!");
            return result;
        })
        .catch((err) => {
            throw new Error(err);
        });
    
    LogIn(req, user._id);

    return res.status(200).json({
        accessToken: createAccessToken(user.id),
        refreshToken: createRefreshToken(user.id),
    });
}