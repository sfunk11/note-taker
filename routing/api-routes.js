const fs = require("fs");

module.exports = function (app) {
    let notedata = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    
    app.get("/api/notes", (req,res) => {
        return res.json(notedata);
    })

    app.post('/api/notes', (req, res) => {
        let lastId;
        if (notedata.length) {
            lastId = Math.max(...(notedata.map(note => note.id)));
        } else {
            lastId = 0;
        }
        //Sets the id so that the note can be referenced
        const id = lastId + 1;

        notedata.push({ id, ...req.body });
        //Removes last index
        res.json(notedata.slice(-1));
    });

    app.delete("/api/notes/:id", (req,res) => {
        let deletedNote = notedata.find(({id})=> id === JSON.parse(req.params.id));
        notedata.splice(notedata.indexOf(deletedNote),1);
        res.end("All Gone!");
    })
};

