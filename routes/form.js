const express = require("express");

const router = express.Router();
router.get("/", (req, res) => {
    res.send(`<h1>Admin Panel</h1>
    <form action="/form/submit" method="POST">
        <input name="adminName" />
        <button>Submit</button>
    </form>`);
});
router.post("/submit",(req, res) => {
    res.send("Access Granted");
})

module.exports = router;
