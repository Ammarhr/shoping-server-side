const pg = require('pg');
require('dotenv').config();

const client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = client;