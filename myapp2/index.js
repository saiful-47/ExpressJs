const express = require('express')

const app = express();
const port = 3000;



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

app.listen(port, ()=>{
  console.log('server run sucessful');
})