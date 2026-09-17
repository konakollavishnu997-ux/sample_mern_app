let express = require('express');
let app = express();
//localhost:3000/addstudent
app.get("/addstudent", (req, res) => {
    res.send("Add Student called");
});
//localhost:3000/getstudent
app.get("/getstudent", (req, res) => {
    res.send("Get Student called");
});
app.put("/updatestudent", (req, res) => {
    res.send("Update Student called");
});
//runthe server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
