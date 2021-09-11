import {
    Request,
    Response,
} from 'express';
import { Unauthorized } from '../../errors/index.errors';
import { User } from '../../models/index';
import { LogIn, LogOut } from '../../controllers';
import { createAccessToken, createRefreshToken } from '../../utils/index';

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user || !(await user.matchPassword(password))) {
        throw new Unauthorized('Incorect Email Or Password!!');
    }

    LogIn(req, user.id);

    return res.json({
        accessToken: createAccessToken(user.id),
        refreshToken: createRefreshToken(user.id),
    });
}

const logout = async (req: Request, res: Response) : Promise<void> => {
    await LogOut(req, res);

    res.json({ message: "LogOut Successfully" });
}

export default { login, logout };