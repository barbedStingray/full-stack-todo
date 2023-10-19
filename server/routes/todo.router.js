
// ** this is the /todo route!

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');



// GET response /todo

router.get(`/`, (req, res) => {
    console.log(`GET /todo request matched`);

// queryText for SQL
    let queryText = `
    SELECT * FROM "tasks";
    `;

// send your query to SQL, if functional, run .then, if not .catch
    pool.query(queryText).then((result) => {
        console.log(`GET query /todo Success`);
// upon success send the resulting rows from SQL
        res.sendStatus(result.rows);
    }).catch((error) => {
        console.log(`GET query /todo ERROR`);
        res.sendStatus(500);
    });
});

// POST

// PUT

// DELETE

module.exports = router;
