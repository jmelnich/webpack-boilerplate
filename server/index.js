import express from 'express';
import path from 'path';

const app = express();
const port = 5000;


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
