CREATE TABLE "tasks" (
	"todo" VARCHAR (100),
	"date" DATE,
	"complete" BOOLEAN );
	
INSERT INTO "tasks" ("todo", "date", "complete")
VALUES 
('Clean Room', '10/10/23', FALSE),
('Do Homework', '10/11/23', FALSE),
('Feed the Dog', '10/12/23', FALSE),
('Wash the Car', '10/13/23', FALSE),
('Do the Dishes', '10/14/23', FALSE),
('Sweep the Floor', '10/15/23', FALSE),
('Mow the Lawn', '10/16/23', FALSE),
('Trim the Bushes', '10/17/23', FALSE);