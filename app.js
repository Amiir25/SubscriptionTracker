import express from 'express';
import { PORT } from "./config/env.js";
import cookieParser from 'cookie-parser';

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subsRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from './middlewares/error.middleware.js';

// Initializing our application
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false})); // Helps to process the form data sent via HTML forms in a simple format
app.use(cookieParser()) // Reads cookies fom incoming requests to store user data

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subsRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to the Subscription tracker API');
});

// Making the server listen for requests
app.listen(PORT, async () => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
    await connectToDatabase();
});

export default app;