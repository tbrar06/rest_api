function add_department(a,b){

    //in the first block, a connection is created with the database and the arguments are inserted into the Department table
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./pythonsqlite.db');
    db.run(`INSERT INTO Department(id,name) VALUES(?,?)`, [a,b], function(err){
        if(err){
            return console.log(err.message);
        }
        console.log("A row has been inserted with row id " + a);
    });
    
    //in the second block we will retrieve the inserted row and return it
    let id = a;
    db.get(`SELECT id depid,
     name depname
      FROM Department
       WHERE id=?`,[a],(err,row)=>{
        if(err){
            return console.error(err.message);
        }        
        const ret=[];
        ret[0]=row.depname;
        ret[1]=row.depid;
        console.log("Added entry is:");
        console.log(ret);
        return ret;
    });
    db.close();    
}


const arr=add_department(process.argv[2],process.argv[3]);
//process.argv[2] is department id
//process.argv[3] is department name
//i had issue displaying arr because apparently due to ajax the return statement is executed from the function is complete, will update it after resolving


