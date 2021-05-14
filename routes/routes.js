const fs = require('fs');
const path = require('path');

module.exports = app => {

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


}