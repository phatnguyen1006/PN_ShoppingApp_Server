import {
    Router,
} from 'express';

import { guest, Validation } from '../../middlewares';
import { registerController } from '../../controllers/auth/register.controller';
import { catchAsync } from '../../utils/index';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "worked!!"
    });
});

router.post('/', guest, Validation, catchAsync(registerController));

export default router;