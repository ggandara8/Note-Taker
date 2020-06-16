const express = require("express");
const path = require("path");
const notes = require("./Develop/db/db.json");
const fs = require("fs");
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

app.get("*", function(req, res) {
    res.sendFile(path.join(direc, "index.html"));
});

// Api routes
app.get("/api/notes", function(req, res) {
    res.json(notes);
});

app.post("/api/notes", function(req, res) {
    notes.push(req.body);
    addId();
    fs.writeFileSync("./Develop/db/db.json", JSON.stringify(notes));
});

//Delete obj
app.delete("/api/notes/:id", function(req, res){
    notes.splice( notes.findIndex(i => i.id === req.params.id), 1);
    fs.writeFile("./Develop/db/db.json", JSON.stringify(notes));
    res.json(notes);
});

//Add id to objects
function addId(){
    notes.forEach((item, i) => {
        item.id = i + 1;
    });
}

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});