const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello world"
    })
})

app.get('/get-method', (req, res) => {
    res.status(200).json({
        info: "GET method",
    });
})

app.post('/post-method', (req, res) => {
    res.status(200).json({
        info: "POST method",
    });
})

app.put('/put-method', (req, res) => {
    res.status(200).json({
        info: "PUT method",
    });
})

app.delete('/delete-method', (req, res) => {
    res.status(200).json({
        info: "DELETE method",
    });
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})