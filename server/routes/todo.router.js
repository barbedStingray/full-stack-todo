
// ** this is the /todo route!

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');



// *** GET response

// draws data from SQL to the Server, passes data to Client
router.get('/', (req, res) => {
    console.log(`GET /todo server request made`);

    // SQL query text
    let queryText = 'SELECT * FROM "taskdata";';

    pool.query(queryText).then((result) => {
        console.log('GET /todo Success from server/SQL');
        res.send(result.rows);

    }).catch((error) => {
        console.log('Error GET /todo server/SQL connection');
        res.sendStatus(500);
    })
})

// POST response

// PUT response



// *** DELETE response

router.delete('/:id', (req, res) => {
    console.log(`Delete /todo match! delete response:`, req.params);

    let queryText = `DELETE FROM "taskdata" WHERE "id" = $1;`;

    pool.query(queryText, [req.params.id])

        .then((result) => {
            console.log(`Delete /todo success!`);
            // send your success so client can run .then
            res.sendStatus(200);
        // add your .catch
        }).catch((error) => {
            console.log(`Delete Error /todo`);
            // send your error to the client to run .catch
            res.sendStatus(500);
        });
});




module.exports = router;


