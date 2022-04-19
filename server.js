 // Load express
 const express = require('express');
 const path = require('path');
 const todoDb = require('./data/students');
  
 // Create our express app
 const app = express();

 // Configure the app (app.set)
 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname, 'views'));

 app.get('/', function(req, res) {
    res.redirect('/home');
  });
  app.get('/home', function(req, res) {
    res.render('home');
  });
  app.get('/students', function(req, res) {
    res.render('students/index', {
      students: todoDb.getAll()
    });
  });
   // Tell the app to listen on port 3000
 // for HTTP requests from clients
 app.listen(5500, function () {
    console.log('Listening on port 5500');
  });