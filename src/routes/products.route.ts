import express, {
    Request,
    Response,
    NextFunction
} from 'express';
const router : express.Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        'title': 'work'
    })
})

export default router;