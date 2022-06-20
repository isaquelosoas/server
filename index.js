import express from 'express';
import cors from 'cors';

const app = express();

const users = [{ name: 'Isaque', age: 24 }, { name: 'Davi', age: 21 }];

app.use(cors('*'));
app.use(express.json());

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/users', function(req, res) {
    res.send(users);
});

app.post('/users', function(req, res) {
    const user = req.body;
    users.push(user);
    res.send(users);
});

app.put('/users/:user', function(req, res) {
    const user = req.params.user;
    const newAge = req.body.age;

    const findUser = users.find((u) => u.name === user);
    findUser.age = newAge;

    res.send(users);
});

app.listen(3001);
