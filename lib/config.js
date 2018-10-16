"use strict";

const os = require("os");

const NUM_CPUS = os.cpus().length;

// TODO: Clean this up later using separate defaults.js and config.js files.
module.exports = Object.freeze((function () {
    const rv = new Map();
    rv.set("workers", Math.max(NUM_CPUS + 1, 2));

    return rv;
})());