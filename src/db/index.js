const pg = require('pg');

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || '',
  // For extra protection
  ssl: process.env.DATABASE_URL
    ? {
        rejectUnauthorized: false,
      }
    : false,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});
// console.log(process.env.DATABASE_URL);
client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
