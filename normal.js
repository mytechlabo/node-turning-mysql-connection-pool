const express = require("express");
const mysql = require("mysql2");
const app = express();

const PORT = process.env.PORT || 5050;

function getConnection(params) {
  return mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "beechat",
    database: "todo",
    insecureAuth: true,
  });
}

app.get("/normal", (req, res) => {
  const conn = getConnection();
  conn.connect((err) => {
    if (err) {
      console.error("Error connecting: ", err);
      return;
    }
    conn.query("SELECT * FROM users limit 10", (error, records, fields) => {
      if (error) throw error;

      console.log(`record[0]:::`, records);
      res.send(records[0]);
      conn.end;
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
