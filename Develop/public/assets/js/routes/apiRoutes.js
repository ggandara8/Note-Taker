let notesData = require("../../js/index");

module.exports = function(app) {
    
    app.get("/api/notes", function(req, res){
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res){
        res.json(notesData);
    });
}