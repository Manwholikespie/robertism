"use strict";

const config = require("./lib/config");
const cluster = require("cluster");

const EXPIRATION_WORKER = "ROBERTISM_EXPIRATION_WORKER";

function master() {
    console.log(`Master ${process.pid.toString().bold} is running`);
  
    // Fork workers.
    const WORKERS = config.get("workers");
    console.log(`Starting ${WORKERS.toString().bold} http workers`);
    for (let i = 0; i <= WORKERS; i++) {
      cluster.fork();
    }
  
    console.log(`Point your browser to http://localhost:${config.get("port")}/`);
}

if (cluster.isMaster) {
    master();
}
else {
    require("./lib/httpserver");
}