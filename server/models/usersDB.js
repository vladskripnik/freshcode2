const pg = require('pg');
const conString = 'pg://postgres:123@localhost:5432/regist';
const client = new pg.Client(conString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, login VARCHAR(40) not null, password VARCHAR(40) not null)');
query.on('end', () => { client.end(); });