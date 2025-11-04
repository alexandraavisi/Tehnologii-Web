import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());

const people = [
    { id: 1, name: "Ionut", age: 25 },
    { id: 2, name: "Alex", age: 18 },
    { id: 3, name: "Mihai", age: 13 },
    { id: 4, name: "Marcel", age: 12 },
    { id: 5, name: "Marius", age: 22 }
];

router.get('/getById/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const person = people.find(p => p.id === id);

    if (person) {
        res.json(person);
    } else {
        res.status(404).json({ message: `Resursa cu ID-ul ${id} nu a fost gasita!` });
    }
});

app.use('/api', router);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
