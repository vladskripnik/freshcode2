const pg = require('pg');
const conString = 'pg://postgres:123@localhost:5432/todo';
const client = new pg.Client(conString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });