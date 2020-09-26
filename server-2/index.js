var express = require("express");
var app = express();
var server = app.listen(process.env.PORT || 5001);

app.get("/*",  function(req,  res) {
    res.send("SERVER-2 is running...");
});

console.log("Server Running");