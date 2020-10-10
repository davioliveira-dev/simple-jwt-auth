require('dotenv').config();
const app = require('./app');
const http = require('http');

const port = process.env.SERVER_PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server running on port: ', port);
})