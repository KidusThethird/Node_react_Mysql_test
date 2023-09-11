const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "test",
  database: "employeesystem",
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;

  db.query(
    "INSERT INTO employees (name, age, country, position) VALUES (?,?,?,?)",
    [name, age, country, position],
    (err, result) => {
      if (err) {
        console.log("Error " + err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
