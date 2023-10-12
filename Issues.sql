DROP SCHEMA IF EXISTS Issues;
CREATE SCHEMA IF NOT EXISTS Issues;

CREATE TABLE Issues.issues (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
);


INSERT INTO
  Issues.issues (title, description)
VALUES
  ("Node", "This is a Node issue" ),
  ("React", "This is a React issue" ),
  ("Vue", "This is a Vue issue" ),


