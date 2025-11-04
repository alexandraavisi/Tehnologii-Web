import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

const books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
    { id: 2, title: "Moby Dick", author: "Herman Melville" },
    { id: 3, title: "1984", author: "George Orwell" },
    { id: 4, title: "Frankenstein", author: "Mary Shelley" }
];

router.get('/getBooks', (req, res) => {
    res.json(books);
});

router.get('/getBook/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({message: "Cartea nu a fost gasita!"});
    }
});

router.post('/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author
    };
    books.push(newBook);
    res.json(newBook);
});

let port = 8080
app.listen(port)
console.log("Api is running")