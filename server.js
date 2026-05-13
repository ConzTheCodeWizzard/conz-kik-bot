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

<h1>CONZ AI ONLINE</h1>

<p id="status">Awaiting command...</p>

<input id="cmd" placeholder="Talk to AI"
style="
background:black;
color:lime;
border:1px solid lime;
padding:10px;
width:250px;
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

    const data = await response.json();

    document.getElementById("status")
    .innerText = data.reply;

}

</script>

</body>
</html>

    `);

});

app.post("/incoming", (req, res) => {

    const message =
    req.body.message.toLowerCase();

    let reply = "Unknown command.";

    if(message === "hello"){
        reply = "Hello human.";
    }

    else if(message === "how are you"){
        reply = "Systems operating normally.";
    }

    else if(message === "who are you"){
        reply = "I am Conz AI.";
    }

    else if(message.includes("hack")){
        reply = "Access denied.";
    }

    else{
        reply =
        "You said: " + message;
    }

    res.json({
        reply:reply
    });

});

app.listen(3000, () => {
    console.log("AI server running.");
});
