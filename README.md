# rest_api
My first attempt at creating a REST API with SQLite database using Node JS and Express

This REST API does not contain a Python middleware for now, you can make changes in the database by executing the corresponding .js files in ./db.

CORS has been enabled in server.js.

First create a database and add tables and their fields by running the following in your project terminal:
cd ./db_creation 
cd createdb_py.py
cd create_tables.py 

Next add in fields to your tables by executing the .js files in .db. An example run is provided below:

cd ../db
node add_department.js 1 HR
node add_department.js 2 Sales
node add_department.js 3 FrontDesk

node add_employee.js John 1 700
node add_employee.js Jeet 2 800

node update_salary 1500 1

node terminate_employee.js 1
