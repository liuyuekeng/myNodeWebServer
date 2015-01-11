var express = require("express");
var app = express();

app.use("/statics", express.static( __dirname + "/public" ));

app.get("/", function(req, res){
    res.send("Hellow world!");
});

app.listen(3000);
