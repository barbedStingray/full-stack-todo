
// ** this is the /todo route!

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');












// *** GET response /todo

// draws data from SQL to the Server, passes data to Client
router.get('/', (req, res) => {
    console.log(`GET /todo server request made`);

    // SQL query text
    let queryText = 'SELECT * FROM "taskdata" ORDER BY "id" ASC;';

    pool.query(queryText).then((result) => {
        console.log('GET /todo Success from server/SQL');
        res.send(result.rows);

    }).catch((error) => {
        console.log('Error GET /todo server/SQL connection');
        res.sendStatus(500);
    });
});

// *** GET response /todo/priority
router.get('/priority', (req, res) => {
    console.log('GET /priority request made');

    // SQL query text
    let queryText = `SELECT * FROM "taskdata" ORDER BY "priority" ASC, "title" ASC;`;

    pool.query(queryText).then((result) => {
        console.log('GET /priority success!');
        res.send(result.rows);

    }).catch((error) => {
        console.log(`GET /priority error`, error);
        res.sendStatus(500);
    });
});

// *** GET response /todo/alphabetAsc
router.get('/alphabetAsc', (req, res) => {
    console.log(`GET /alphabetAsc request`);

    let queryText = `SELECT * FROM "taskdata" ORDER BY "title" ASC;`;

    pool.query(queryText).then((result) => {
        console.log(`GET /alphabetAsc success!`);
        res.send(result.rows);

    }).catch((error) => {
        console.log(`GET /alphabetAsc error`, error);
        res.sendStatus(500);
    });
});

// *** GET response /todo/complete
router.get('/complete', (req, res) => {
    console.log(`GET /complete request`);

    let queryText = `SELECT * FROM "taskdata" ORDER BY "complete" ASC, "title" ASC;`;

    pool.query(queryText).then((result) => {
        console.log(`GET /complete Success!`);
        res.send(result.rows);

    }).catch((error) => {
        console.log(`GET /complete error`, error);
        res.sendStatus(500);
    });
});














// *** POST response

router.post('/', (req, res) => {
    console.log(`/todo POST found, req.body:`, req.body);

    let queryText = `
    INSERT INTO "taskdata" ("title", "priority")
    VALUES ($1, $2);
    `;

    // access database
    pool.query(queryText, [req.body.title, req.body.priority])
        .then((result) => {
            console.log(`/todo POST success`);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`/todo POST error`, error);
            res.sendStatus(500);
        });
});








// PUT response

router.put('/:id', (req, res) => {
    console.log('PUT /todo complete change', req.params);
    // console.log(`the res:`, res);
    // console.log(`the req:`, req);

    let queryText = `
        UPDATE "taskdata"
        SET "complete" = NOT "complete"
        WHERE "id" = $1;
    `;

    pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log('success in PUT complete');
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error in PUT complete', error);
            res.sendStatus(500);
        });
});










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


