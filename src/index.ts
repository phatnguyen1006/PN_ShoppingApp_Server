import express, {
    Application,
    Request,
    Response,
} from 'express';
import { REDIS_OPTIONS, SESSION_OPTION, APP_PORT } from './config';
// import lib
import { json, urlencoded } from 'body-parser';
// Require Routes
import { registerRoute, loginRoute } from './routes/index.route';

const app: Application = express();

import 'dotenv/config';
const PORT = APP_PORT || 5051;
// require DB
import { connectDB } from './config/configDB';
connectDB();
// redis cache
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';
const RedisStore = connectRedis(session);
const client = new Redis(REDIS_OPTIONS);
app.use(
    session({
        ...SESSION_OPTION,
        store: new RedisStore({ client })
    })
);

// settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(json());
app.use(urlencoded({ extended: true }));
// api
// app.use('/api', api);
// Routes
app.use('/register', registerRoute);
app.use('/auth', loginRoute);

app.get('/', (req : Request, res: Response) => {
    res.send('Hello');
});

app.use(function (req: Request, res: Response) {
    res.status(404).send("Sorry can't find that!")
});

app.use(function (err : Error, req: Request, res: Response) {
    console.error(err.stack)
    res.status(500).json({message: 'Internal Server!!'});
});

app.listen(PORT,
    (): void => console.log(`http://localhost:${PORT}`)
);