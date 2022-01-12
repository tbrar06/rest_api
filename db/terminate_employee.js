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

terminate_employee(process.argv[2]);
//process.argv[2] is employee_id 