const express = require("express");
const { addTodo, getAllTodos } = require("../controllers/todos");

const router = express.Router();


router.get("/", (req, res) => {
    res.render("todo", {todos: getAllTodos()});
})

router.post("/add", (req,res) => {
    addTodo(req.body.todoName);
    res.send("Data Added");
})

module.exports = router;