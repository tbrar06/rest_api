function update_salary(a,b){
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./pythonsqlite.db');

    db.run(`UPDATE Salary
     SET salary = ?
     WHERE employee_id = ? `,[a,b],function(err){
        if(err){
            return console.error(err.message);
        }
        console.log(`Rows updated: ${this.changes}`);
    });
    db.close();
}

update_salary(process.argv[2],process.argv[3]);
//process.argv[2] is new salary
//process.argv[3] is employee_id 