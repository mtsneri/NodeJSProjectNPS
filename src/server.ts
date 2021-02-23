import 'reflect-metadata';
import './database';
import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Testing GET method" });
});

app.post("/", (request, response) => {
    return response.json({ message: "Testing POST method" });
});

app.listen(3333, () => console.log("Server is running!"));