import dotenv from 'dotenv';
dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || 'fallbackSecret'; 


export const PORT = 5555

export const mongoDBURL = "mongodb+srv://sunnysony4379:vwftUEfs59PNVDJI@cluster0.lrrrodc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
