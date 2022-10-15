const express = require('express')
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const path = require('path');
const app = express();
const secret = process.env.SECRET_KEY
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile('./public/index.html');
})
app.get('/decode', (req, res) => {
  res.sendFile('./public/decode.html', { root: __dirname });
})
app.post('/api', (req, res) => {
  console.log(req.body);
  const data = req.body;
  var token = jwt.sign({...data}, secret);
  res.json(token);
})
app.post('/decode', (req, res) => {
  console.log(req.body);
  const data = req.body;
  try{
    var decoded = jwt.verify(data.code, secret);
  }catch{
    res.json('Token không thuộc hệ thống');
  }
  res.json(decoded.user);
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
