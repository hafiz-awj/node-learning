const express = require("express");
// const path = require("path");

const router = express.Router();
router.get("/", (req, res) => {
    res.render("form", {name: "Ali"});
});
router.post("/submit",(req, res) => {
    res.send(req.body.adminName);
})

module.exports = router;
