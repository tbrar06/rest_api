const express = require("express");
const res = require("express/lib/response");
const app = express();
const dept_table = require("./db/department.js");
const empl_table = require("./db/employee.js");
const sal_table = require("./db/salary.js");
const cors = require('cors')

app.use(cors());

app.post("/department", async(req,res) => {
    const results = await dept_table.add_department(req.body);
    res.status(201).json({ id: results[0] });
});

app.post("/employee", async(req,res) => {
    const results = await empl_table.add_employee(req.body);
    res.status(201).json({ id: results[0] });
});

app.get("/employee", async(req,res) => {
    const results = await empl_table.get_employee(req.body);
    res.status(201).json({ id: results[0] });
});

app.post("/employee", async(req,res) => {
    const results = await empl_table.terminate_employee(req.body);
    res.status(201).json({ id: results[0] });
});


app.put("/salary", async(req,res) => {
    const results = await sal_table.update_salary(req.body);
    res.status(201).json({ id: results[0] });
});

app.listen(1337, () => console.log("server is running on port 1337"));