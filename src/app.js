const express = require('express');
const app = express();
const categoryRoutes = require('./routes/v1/categoryRoutes');
const productRoutes = require('./routes/v1/productRoutes');
// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/products', productRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the Server API');
});

module.exports = app;