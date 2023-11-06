
// ** this is the /todo route!

// Imports
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// GET response /todo
router.get('/', (req, res) => {
    console.log(`GET /todo server request made`);

    let queryText = 'SELECT * FROM "taskdata" ORDER BY "id" ASC;';

    pool.query(queryText).then((result) => {
        console.log('GET /todo Success from server/SQL');
        res.send(result.rows);

    }).catch((error) => {
        console.log('Error GET /todo server/SQL connection');
        res.sendStatus(500);
    });
});

// GET response /todo/priority
router.get('/priority', (req, res) => {
    console.log('GET /priority request made');

    let queryText = `SELECT * FROM "taskdata" ORDER BY "priority" ASC, "title" ASC;`;

    pool.query(queryText).then((result) => {
        console.log('GET /priority success!');
        res.send(result.rows);

    }).catch((error) => {
        console.log(`GET /priority error`, error);
        res.sendStatus(500);
    });
});

// GET response /todo/alphabetAsc
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

// GET response /todo/complete
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









// POST response /todo
router.post('/', (req, res) => {
    console.log(`/todo POST found, req.body:`, req.body);

    let queryText = `
    INSERT INTO "taskdata" ("title", "priority")
    VALUES ($1, $2);
    `;

    pool.query(queryText, [req.body.title, req.body.priority])
        .then((result) => {
            console.log(`/todo POST success`);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`/todo POST error`, error);
            res.sendStatus(500);
        });
});









// PUT response /todo/single/:id
router.put('/single/:id', (req, res) => {
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

// PUT /todo/resetAll
router.put('/resetAll', (req, res) => {
    console.log(`PUT /todo/resetAll running...`);

    let queryText = `
        UPDATE "taskdata"
        SET "complete" = FALSE;
    `;

    pool.query(queryText).then((result) => {
        console.log(`success in /todo/resetAll`);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`error PUT /todo/resetAll`);
        res.sendStatus(500);
    });
});








// DELETE response /todo/single/:id
router.delete('/single/:id', (req, res) => {
    console.log(`Delete /todo match! delete response:`, req.params);

    let queryText = `DELETE FROM "taskdata" WHERE "id" = $1;`;

    pool.query(queryText, [req.params.id])

        .then((result) => {
            console.log(`Delete /todo success!`);
            res.sendStatus(200);
        }).catch((error) => {
            console.log(`Delete Error /todo`);
            res.sendStatus(500);
        });
});

// DELETE response /todo/deleteAll
router.delete('/deleteAll', (req, res) => {
    console.log(`Delete /todo/deleteAll match!`);

    let queryText = `DELETE FROM "taskdata";`;

    pool.query(queryText).then((result) => {
        console.log(`/deleteAll success`);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`/deleteAll ERROR`, error);
        res.sendStatus(500);
    });
});

module.exports = router;


