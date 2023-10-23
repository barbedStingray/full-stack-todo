

CREATE TABLE "taskdata" (
	"id" serial PRIMARY KEY,
	"title" VARCHAR (100),
	"date" DATE,
	"complete" BOOLEAN DEFAULT FALSE);
		
		
-- POST request
INSERT INTO "taskdata" ("title", "date")
VALUES 
('Clean Room', '10/10/23'),
('Do Homework', '10/11/23'),
('Feed the Dog', '10/12/23'),
('Wash the Car', '10/13/23'),
('Do the Dishes', '10/14/23'),
('Sweep the Floor', '10/15/23'),
('Mow the Lawn', '10/16/23'),
('Trim the Bushes', '10/17/23');




-- limits your displayed data
SELECT * FROM "taskdata" LIMIT 2;


-- PUT / request
UPDATE "taskdata"
SET "complete" = TRUE
WHERE "title" = 'Wash the Car';

-- GET / request
SELECT * FROM "taskdata";

-- / clears table of data
DELETE FROM "taskdata";

-- / clears tasks that are complete
DELETE FROM "taskdata" WHERE "complete" = TRUE;

-- eliminates the table
DROP TABLE "taskdata";
