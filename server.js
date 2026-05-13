const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Conz Bot Online");
});

app.post("/incoming", (req, res) => {

    console.log(req.body);

    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
