//in this function, i will insert parts of the get_employee function as I was unable to resolve the undefined object returned by it

function add_employee(a,b,c){
    //creating database connection
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./pythonsqlite.db');
    db.run(`INSERT INTO Employee(name,department_id) VALUES(?,?)`, [a,b], function(err){
        if(err){
            return console.log(err.message);
        }
    });
    db.run(`INSERT INTO Salary(salary) VALUES(?)`, [c], function(err){
        if(err){
            return console.log(err.message);
        }
    });
    

    //inserting get_employee function here - read start of this file please
    
    //retrieving row entry with id=argument
    db.get(`SELECT id empid,
            name empname,
            department_id depid
            FROM Employee
            WHERE name = ?`,[a], (err,row) => {
                if(err){
                    return console.error(err.message);
                }

                //creating and returning object
                var obj={
                    "employee_id":row.empid
                };
                obj.employee_name = row.empname;
                obj.employee_dept = row.depid;
                
                console.log('Inserted row is:');
                console.log(obj);
                return obj;
    });


    db.close();
}

const ob = add_employee(process.argv[2],process.argv[3],process.argv[4]);
//not sure why the returned object is undefined but displays well in the function
//process.argv[2] is name
//process.argv[3] is department id
//process.argv[4] is salary