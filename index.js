let express = require('express');
let app = express();
let mongoose = require('mongoose');
let empRoute = require('./Route/emp_route');

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/HRManagementdb").then(() => {
    console.log("db Connected successfully");
}).catch((err) => {
    console.log( err);
});



app.use("/api/emp", empRoute);
//localhost:3000/api/emp/register =>post
//localhost:3000/api/emp/login    =>post
//localhost:3000/api/emp/viewtask =>get
//localhost:3000/api/updateprofile =>patch


//runthe server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
