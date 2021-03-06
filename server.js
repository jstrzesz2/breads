const express = require('express');
const breads = require('./controllers/breads_controllers');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
const breadsController = require('./controllers/breads_controllers');

// MIDDLEWARE
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!');
});

// Breads
app.use('/breads', breadsController);

app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})