const fs = require('fs');
const path = require('path');

module.exports = app => {

    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);
    

    //Set up the get/post routes for creating notes
    app.get ("/api/notes", function(req, res) {
        res.json(notes);
    });

    app.post("/api/notes", function(req, res) {
        let createNote = req.body;
        notes.push(createNote);
        updateDb();
        return console.log("Successfully created new note: "+createNote.title);
    });

    //retrieve and delete notes based on specific id
    app.get("/api/notes/:id", function(req,res) {
        res.json(notes[req.params.id]);
    });

    app.delete("/api/notes/:id", function(req, res) {
        notes.splice(req.params.id, 1);
        updateDb();
        console.log("Note deleted for " + req.params.id);
    });

    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, "../assets/notes.html"));
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "../assets/index.html"));
    });

    function updateDb() {
        fs.writeFile("db/db.json",JSON.stringify(notes, '\t'), err => {
            if (err) throw err;
            return true;
        });
        
    }

    }); 
}