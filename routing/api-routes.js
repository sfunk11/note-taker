const fs = require("fs");

module.exports = function (app) {
    let notedata = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
    
    app.get("/api/notes", function (req,res) {
        console.log(notedata);
        return res.json(notedata);
    })

    // app.post("/api/notes", function(req,res){
    //         notesData.push(req.body);
    //         res.end
    // })

    // app.delete("/api/notes", function (req,res){
    //     tableData = [];
    //     waitingListData = [];
    // })
};

