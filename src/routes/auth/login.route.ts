import {
    Request,
    Response,
    Router
} from 'express';

import loginController from '../../controllers/auth/login.controller';
import { guest, notGuest, Validation } from '../../middlewares';
import { catchAsync } from '../../utils/index'

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Login Route Worked!!!");
});

router.get('/login', (req: Request, res: Response) => {
    res.send("Login Route Worked!!!");
});

router.post('/login', guest, Validation, catchAsync(loginController.login));

router.post('/logout', notGuest , catchAsync(loginController.logout));

export default router;