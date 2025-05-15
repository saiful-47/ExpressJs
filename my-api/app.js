const express = require('express');
const router = require("./src/routes/api.js");
const app = new express();

app.use('/api/v1', router);


// Catch-all for undefined routes (404 handler)
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

module.exports = app;

