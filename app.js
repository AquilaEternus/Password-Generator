const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression());
app.use(helmet());

// Serve built files
app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '/client/dist', 'index.html'));
})

app.listen(PORT), () => {
   console.log(`Listening on Port ${PORT}`);
}