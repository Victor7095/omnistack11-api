const express = require("express");

const routes = express.Router();

routes.get("/", (req,res) => {
    return res.json({msg:"Hello World"});
});

module.exports = routes;