let express = require('express');
let router = express.Router();
//router() used  to connect api with comman router
router.get('/register', (req, res) => {
    res.send("Register route called");
});
router.post('/login', (req, res) => {
    res.send("Login route called");
});
router.get('/viewtask', (req, res) => {
    res.send("View task route called");
});
router.patch("/updateprofile/:id",async (req, res) => {
    let data =req.body;
    if(data.password){
        data.password = await bcrypt.hash(data.password, 10);
    }
    let rusult = await user .findByIdAndUpdate(req.params.id , { $set: data });
    res.send("result");
});
module.exports = router;

//create two more routes 
//viewtask(get) & updatetask(patch)