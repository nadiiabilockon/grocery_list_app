const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "11071995",
  host: "localhost",
  port: 5432,
  database: "perngrocery",
});

export default pool;
