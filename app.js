const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const form = require("./routes/form");
const todo = require("./routes/todo")

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(process.cwd(), "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/form", form);
app.use("/todo", todo);

app.listen(3000);
