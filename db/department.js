// const knex = require("./knex");

// function add_department(dept){
//     return knex("Department").insert(dept);
// }

// //module.exports = {
//     add_department
// //}

function add_department(dept){
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./pythonsqlite.db');
    
    db.run('INSERT INTO Department VALUES(?,?)', ['C'], function(err){
        if(err){
            return console.log(err.message);
        }
        console.log('A row has been inserted with rowid ${this.lastID}');
    });

    db.close();
}

module.exports= {
    add_department
}