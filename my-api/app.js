const express = require('express');
const router = require("./src/routes/api.js");
const app = new express();


//security middleware

const rateLimit= require('express-rate-limit');
const helmet = require('helmet');
// const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');

// security middleware implement
app.use(cors());
app.use(hpp());
// app.use(mongoSanitize());
app.use(helmet());
app.use(rateLimit());

//request rate limiting

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
});

app.use(limiter);

app.use('/api/v1', router);


// Catch-all for undefined routes (404 handler)
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

module.exports = app;

