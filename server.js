const express = require("express");
const res = require("express/lib/response");
const app = express();
const dept_table = require("./db/department.js");
const empl_table = require("./db/employee.js");
const sal_table = require("./db/salary.js");
const cors = require('cors')

app.use(cors());
//enabling CORS
