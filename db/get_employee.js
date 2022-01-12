function get_employee(a){
    //establishing database conection 
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./pythonsqlite.db');
    
    let id=a;
    //retrieving row entry with id=argument
    db.get(`SELECT id empid,
            name empname,
            department_id depid
            FROM Employee
            WHERE id = ?`,[id], (err,row) => {
                if(err){
                    return console.error(err.message);
                }

                //creating and returning object
                var obj={
                    "employee_id":row.empid
                };
                obj.employee_name = row.empname;
                obj.employee_dept = row.depid;
                console.log(obj);
                return obj;
              
            });
    db.get(`SELECT salary empsal
            FROM Salary
            WHERE employee_id = ?`,[id], (err,row) => {
                if(err){
                    return console.error(err.message);
                } 
            console.log("salary is:"+row.empsal);
    });
    

    db.close();

}

const ob=get_employee(process.argv[2]);
console.log(ob);// the returned object is undefined and i haven't been able to fix it yet

module.exports = {
    get_employee,
};