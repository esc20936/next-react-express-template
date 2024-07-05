require('ts-node/register');
require('tsconfig-paths/register');

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const table_routes = require('./src/routers/tables')
const sqlConfig = require('./src/persistance/database/index.ts');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


// Global Error Handler
app.use(require('./src/middlewares/errorHandler'));

app.get('/', (req, res) => {
    res.send('Hello a todos');
});

app.use('/tables', table_routes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// hello world endpoint

