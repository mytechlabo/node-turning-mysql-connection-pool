const express = require("express");
const mysql = require("mysql2");
const app = express();

const PORT = process.env.PORT || 5052;

const conn = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "beechat",
  database: "todo",
  connectionLimit: 10,
});

app.get("/pool2", (req, res) => {
  conn.query("SELECT * FROM users limit 10", (error, records, fields) => {
    if (error) throw error;

    console.log(`record[0]:::`, records);
    res.send(records[0]);
    // conn.end;
  });
});

app.get("/pool3", (req, res) => {
  conn.getConnection(function (error, pool) {
    if (error) throw error;

    pool.query("SELECT * FROM users limit 10", (error, records, fields) => {
      if (error) throw error;

      console.log(`record[0]:::`, records);
      res.send(records[0]);
      // conn.end;
    });

    conn.end(pool);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
