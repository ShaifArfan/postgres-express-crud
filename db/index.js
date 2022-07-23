const { Pool } = require('pg')

const dbOptions = {
  user: 'postgres',
  password: "postgres",
  host: 'localhost',
  database: 'psql_crud',
  port: 5432,
};

const pool = new Pool(dbOptions);

module.exports =  {
  query: (text, params, callback) => pool.query(text, params, callback),
};