const express = require("express");
const mysql = require("mysql2");
const app = express();

const PORT = process.env.PORT || 5051;

function getConnection(params) {
  return mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "beechat",
    database: "todo",
    connectionLimit: 10,
  });
}

app.get("/pool1", (req, res) => {
  const conn = getConnection();
  conn.query("SELECT * FROM users limit 10", (error, records, fields) => {
    if (error) throw error;

    console.log(`record[0]:::`, records);
    res.send(records[0]);
    // conn.end;
  });
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
