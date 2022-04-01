CREATE TABLE users (
  id serial PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  address VARCHAR ( 50 ) NOT NULL,
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  created_on TIMESTAMP NOT NULL
);
