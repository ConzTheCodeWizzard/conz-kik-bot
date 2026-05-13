const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

    res.send(`
    <html>

    <body style="
    background:black;
    color:lime;
    font-family:monospace;
    text-align:center;
    padding-top:100px;
    ">

    <h1>CONZ BOT ONLINE</h1>

    <p>Bot server is running.</p>

    </body>
    </html>
    `);

});

app.post("/incoming", (req, res) => {

    const message = req.body.message;

    console.log("Message:", message);

    if(message === "!ping"){
        console.log("Pong command used");
    }

    if(message === "!hello"){
        console.log("Hello command used");
    }

    res.sendStatus(200);

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
