function update_salary(eid,ns){
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./pythonsqlite.db');

    let sql = 'UPDATE Salary SET salary = ? where employee_id = ?';

    db.run(sql, [ns,eid],function(err) {
        if(err){
            return console.error(err.message);
        }
        console.log('Row(s) updated: ${this.changes}');
    });

    db.close();

}

module.exports = {
    update_salary
}