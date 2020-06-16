const express = require("express");
const path = require("path");
const notes = require("./Develop/db/db.json");
const direc = path.join(__dirname, "/Develop/public");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));

// HTML routes
app.get("/", function(req, res) {

res.sendFile(path.join(direc, "index.html"));

});
    
app.get("/notes", function(req, res) {

res.sendFile(path.join(direc, "notes.html"));

});

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});