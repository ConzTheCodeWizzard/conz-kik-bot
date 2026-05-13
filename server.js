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

<p id="status">Bot server is running.</p>

<input id="cmd" placeholder="Enter command"
style="
background:black;
color:lime;
border:1px solid lime;
padding:10px;
">

<button onclick="sendCommand()"
style="
background:black;
color:lime;
border:1px solid lime;
padding:10px;
">
SEND
</button>

<script>

async function sendCommand(){

    const command =
    document.getElementById("cmd").value;

    const response = await fetch("/incoming",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            message:command
        })

    });

    document.getElementById("status")
    .innerText =
    "Command sent: " + command;

}

</script>

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
