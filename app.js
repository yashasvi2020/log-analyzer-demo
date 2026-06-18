const express = require("express");
const cron = require("node-cron");

const app = express();

app.get("/", (req, res) => {
    res.send("Application Running");
});

// Scheduler with intentional bug
cron.schedule("*/1 * * * *", () => {
    console.log("Scheduler Started");

    const user = undefined;

    console.log(user.name);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});