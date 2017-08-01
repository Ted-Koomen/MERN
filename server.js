'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./model/comments');
var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

//db config
var mongoDB = 'mongodb://teddykoomen:Koomen21@ds127983.mlab.com:27983/commentstutorial'

app.use(bodyParser.urlencoded( {extended: true}))
app.use(bodyParser.json());


//Allow CORS with middlewares
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  // remove cacheing so most recent comments will show
  res.setHeader('Cache-Control', 'no-cache');
  next();
})

router.get('/', function(req,res) {
  res.json({message: 'API Initialized!'})
});

app.use('/api', router);

app.listen(port, function(){
  console.log(`api running on port ${port}`)
})
