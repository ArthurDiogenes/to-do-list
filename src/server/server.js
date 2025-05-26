import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid'

const app = express()
const PORT = 5000;

app.use(cors());

app.use(express.json());

let tasks = [
    { id: '1', text: 'Aprender React', completed: true},
    { id: '2', text: 'Aprender Node.js', completed: false},
    { id: '3', text: 'Aprender Typescript', completed: false}
];

app.get('/api/tasks', (req, res) => {
    setTimeout(() => {
        res.json(tasks)
    }, 500);
});

app.post('/api/tasks', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({
            error: "O texto da tarefa é obrigatório."
        });
    }

    const newTask = {
        id: uuidv4(),
        text,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;

    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({
            error: 'Tarefa não encontrada.'
        })
    }

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        completed
    };

    res.json(tasks[taskIndex]);
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});