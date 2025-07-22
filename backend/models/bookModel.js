import mongoose from "mongoose";

const bookScheema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        author:{
            type: String,
            required: true
        },
        publishYear:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Book = mongoose.model('book', bookScheema);