var express = require('express');
var router = express.Router();
const {spawn}=require("child_process")

var argz
router.post("/predict", async (req, res)=>{
  var data1
  arg1= req.body;
  console.log(arg1.day)
  console.log(arg1.hospital)
  const python = await spawn("python",["jaush.py",arg1.day, arg1.hospital])
  
  python.stdout.on("data",(data)=>{
    data1=data.toString() 
    console.log("pattern",data1)
    res.send(data1)
})
})


const getArg1 = async (req, res) => {

  
  res.send("ok2")
  
}


router.get('/', function(req, res, next) {
  res.send("hhhh");
});

//router.post('/postArg1', postArg1)

router.get('/getArg1', getArg1)

module.exports = router;
