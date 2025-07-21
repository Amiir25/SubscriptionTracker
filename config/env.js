import { config } from 'dotenv';

config({path: `.env.${process.env.NODE.ENV || 'development'}.local`});

export const {
    PORT, SERVER_URL, NODE_ENV,
    DB_URI,
    JWT_SECRET, JWT_EXPIRES_IN,
    ARKJET_KEY, ARKJET_ENV,
    QSTASH_TOKEN, QSTASH_URL
} = process.env;