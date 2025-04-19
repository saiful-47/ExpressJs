const express = require('express')

var bodyParser = require('body-parser');
var multer = require('multer');
var multer = multer();


const app = express();


app.use(bodyParser.json());
app.use(multer.array());
app.use(express.static('public'));
const port = 3000;


// file upload
var storage = multer.disks({
  destination: function (req,file,callBack){
    callBack(null, './uploads');
  },
  filename: function (req,file,callBack){
    callBack(null,file.originalname);
  }
});

var upload = multer({storage:storage}).single('myfile');



app.post('/file/upload', function(req,res){
  upload(req,res, function(error){
    if(error){
      res.send("File upload fail");
    }else{
      res.send("File upload success");
    }
  })
})



app.get('/json_data', function(req, res){

  let myJsonArray = [
    {
      name: "Hira Malek",
      city: "London",
      occupation: "SQA"
    },
    {
      name: "Saiful Islam",
      city: "Cumilla",
      occupation: "Software Engineer"
    }
  ]
  res.json(myJsonArray);
});

app.get('/download', function(req, res){
  res.download('./uploads/pic.jpg');
});

app.get('/bangladesh', function(req, res){
  res.redirect('http://localhost:3000/dhaka');
})
app.get('/dhaka', function(req, res){
  res.send('redirect route is dhaka');
}).name = 'dhakaRoute';

app.get('/respon/header',function(req, res){
  res.append('city','Dhaka');
  res.append('name','Saiful');
  res.append('age',30);
  res.status(201).end('Hello Hira');
});

app.get('/set/cookies', function(req, res){
  res.cookie('name', 'Saiful');
  res.cookie('city', 'Dhaka');
  res.cookie('home_town','Cumilla');
  res.end('cookies set successfully');
});

app.get('/clear/cookies', function(req, res){
  res.clearCookie('name');
  res.clearCookie('age');
  res.end('cookie clear success');
})

// get parameter req
app.get('/name', function(req, res){
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;

  res.end(firstName + " " +lastName);
});

// post request with header properties

app.post('/header/req', function(req, res){
  let userName = req.header('userName');
  let password = req.header('password');
  res.send("User Name:" +userName +"Password: " +password);
})


//post request with body
app.post('/body/req', function(req, res){
  let JsonData = req.body;
  let name = JsonData['name'];
  let city = JsonData['city'];
  res.send('Name: '+name+ 'City:' +city);
});

// post form data multipart req

app.post('/form/data', function(req, res){
  let JSONData = req.body;
  res.send(JSON.stringify(JSONData));
});

app.listen(port, ()=>{
  console.log('server run sucessful');
})