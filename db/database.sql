-- create a database
CREATE DATABASE psql_crud;

-- use the database
\c psql_crud;

-- create user_accounts table
CREATE TABLE user_accounts(
  ID SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL
);

-- list of tables
\dt

-- show user_accounts table schema
\d user_accounts

-- insert a row in user_accounts table
INSERT INTO user_accounts(name, email) VALUES('admin', 'test@example.com');

-- see the row in user_accounts table
SELECT * FROM user_accounts;
TABLE user_accounts;