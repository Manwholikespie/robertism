"use strict";

const {createServer} = require("http");
const {createServer: createTLSServer} = require("https");
const express = require("express");

const app = express();
app.disable("x-powered-by");
app.set("view engine", "ejs");
app.set("etag", "strong");

app.get("/", function (req, res) {
    return res.send('Join today, Live tomorrow.');
});

const server = createServer(app);
server.listen({
    port: 3000,
    host: "0.0.0.0"
}, () => {
    console.log("*")
})