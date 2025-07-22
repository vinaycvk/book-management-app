import { Book } from '../models/bookModel.js';


export const getBooks = async (request, response) => {
    try {

        const books = await Book.find({});
        return response.status(201).json({
            count: books.length,
            data: books
        })

    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
}


export const createBook = async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                messsage: "Send all required fields: title, author and publishYear",
            })
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook);

        return res.status(201).send(book)

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ messsage: error.message })
    }
}



export const getBook = async (req, res) => {
    
    try {
        const { id } = req.params;

        const book = await Book.findById(id);
        return res.status(201).json(book)

    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
}


export const editBook = async (req, res) => {
     try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                messsage: "Send all required fields: title, author and publishYear",
            })
        }

        const { id } = req.params

        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result){
            return response.status(500).send({ message: "id not found" })
        }

        return res.status(201).send({message: "Book is updated"})

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ messsage: error.message })
    }
}


export const deleteBook = async (req, res) => {
    try{
        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(400).json({message: "Book Not Found"})
        }

        return res.status(201).send({message: "Book deleted"})
    }
    catch {
        return res.status(500).send({message: error.message})
    }
}