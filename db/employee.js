function add_employee(emp){
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./pythonsqlite.db');

    db.run('INSERT INTO Employee VALUES(?,?,?)', ['C'], function(err){
        if(err){
            return console.log(err.message);
        }
        console.log('A row has been inserted with rowid ${this.lastID}');
    });

    db.close();
}

function get_employee(eid){
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./pythonsqlite.db');
    let sql = 'SELECT id i, name n, department_id di FROM Employee WHERE id = ? ORDER BY name';

    db.all(sql, ['eid'], (err,rows) => {
        if(err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(`${row.i} ${row.n} ${row.di}`);
        });
    });

    db.close();
}

function terminate_employee(eid){
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./pythonsqlite.db');

    db.run('DELETE FROM Employee WHERE id=?', eid, function(err){
        if(err){
            return console.error(err.message);
        }
        console.log('Row(s) deleted ${this.changes}');
    });

    db.run('DELETE FROM Salary WHERE employee_id=?', eid, function(err){
        if(err){
            return console.error(err.message);
        }
        console.log('Row(s) deleted ${this.changes}');
    });

    db.close();
}

module.exports = {
    add_employee,
    get_employee,
    terminate_employee
}