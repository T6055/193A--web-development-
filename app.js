'use strict';

const express = require('express');
const app = express();

// Root route to handle GET requests to the base URL
app.get('/', (req, res) => {
    res.send('Welcome to the Server! Navigate to /math/circle/:r or /hello/name to use specific functionalities.');
});

// Define endpoint for /math/circle/:r
app.get('/math/circle/:r', (req, res) => {
    const radius = parseFloat(req.params.r);
    if (isNaN(radius)) {
        return res.status(400).send({ error: "Invalid radius" });
    }
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;
    res.json({
        area: area,
        circumference: circumference
    });
});

// Define endpoint for /hello/name
app.get('/hello/name', (req, res) => {
    const firstName = req.query.first;
    const lastName = req.query.last;

    if (!firstName && !lastName) {
        return res.status(400).send("Missing Required GET parameters: first, last");
    }
    if (!firstName) {
        return res.status(400).send("Missing Required GET parameters: first");
    }
    if (!lastName) {
        return res.status(400).send("Missing Required GET parameters: last");
    }

    res.send(`Hello ${firstName} ${lastName}`);
});

// Additional endpoints can be added here

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
