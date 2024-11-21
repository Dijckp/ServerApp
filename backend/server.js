const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the VM!');
});

app.get('/status', (req, res) => {
    res.send('Ok');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const cors = require('cors');
app.use(cors());
