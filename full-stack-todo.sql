CREATE TABLE "taskdata" (
	"id" serial PRIMARY KEY,
	"title" VARCHAR (100),
	"complete" BOOLEAN DEFAULT FALSE,
	"priority" VARCHAR (10));
		
		
-- POST request
INSERT INTO "taskdata" ("title", "priority")
VALUES 
('Groom the Bunny Slippers', 'low'),
('Sort the Pointed Hats', 'low'),
('Stir the Cauldron', 'high'),
('Wash your Cape', 'high'),
('Beware the Dog', 'low'),
('Polish your Broom', 'low'),
('Practice Bewitching Charms', 'low'),
('Wand Care', 'high');


-- manipulation for ORDER BY priority and title
SELECT * FROM "taskdata" ORDER BY "priority", "title";

-- Sort by Title Ascending
SELECT * FROM "taskdata" ORDER BY "title" ASC;

-- Sort by Priority high -> low
SELECT * FROM "taskdata" ORDER BY "priority" ASC;

-- sort by priority low -> high
SELECT * FROM "taskdata" ORDER BY "priority" DESC;

-- sort by complete or not
SELECT * FROM "taskdata" ORDER BY "complete" ASC, "title" ASC;


-- add a column
ALTER TABLE "taskdata"
ADD "priority" VARCHAR(10);

ALTER TABLE "taskdata"
DROP COLUMN "date";


-- limits your displayed data
SELECT * FROM "taskdata" LIMIT 2;

-- DELETE / singular request 
DELETE FROM "taskdata" WHERE "id" = 21;


-- PUT / request "toggle Complete"
UPDATE "taskdata"
SET "complete" = NOT "complete"
WHERE "title" = 'Wash the Car';

UPDATE "taskdata"
SET "complete" = FALSE;

-- GET / request
SELECT * FROM "taskdata";

-- / clears table of data
DELETE FROM "taskdata";

-- / clears tasks that are complete
DELETE FROM "taskdata" WHERE "complete" = TRUE;

-- eliminates the table
DROP TABLE "taskdata";

