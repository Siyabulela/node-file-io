const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./sqlQuery");
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`listening on localhost ${port}`);
});

app.get("/", (req, res) => {
  res.send("Using Express to expose JSON endpoints");
});

app.post("/addNewVisitor", db.addVisitor);
app.delete("/deleteVisitor:id", db.deleteVisitor);
app.delete("/deleteAllVisitors", db.deleteAllVisitors);
app.get("/viewVisitors", db.getVisitors);
app.get("/viewVisitors:id", db.getVisitorById);
app.put("/updateVisitor:id", db.updateVisitor);
