const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.static('public')); // Serve files from the 'public' directory

app.get('/hello', (req, res) => {
    res.send('Hello from the server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
