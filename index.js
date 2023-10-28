const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.get('/api', async (req, res) => {
    try {
        const bootstrapResponse = await axios.get('https://jsonplaceholder.typicode.com/todos/1', {
            headers: {
                'User-Agent': 'FPL-Website/1.0'
            }
        });
        try {
        res.send(bootstrapResponse.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch current gameweek' });
        }
    } catch (error) {
        console.log(error.response.data);
        console.error(error);
        res.status(500).json({ error: 'Failed to connect to FPL API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});