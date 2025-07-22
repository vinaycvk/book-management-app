import dotenv from 'dotenv';
dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || 'fallbackSecret'; 


export const PORT = 5555

export const mongoDBURL = process.env.MONGO_URI
