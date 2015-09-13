var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');

module.exports = {


  messages: {
    get: function (req, res) {
      db.Message.findAll().then(function(data) {
        res.json(data);
        res.end();
      });
      // models.messages.get(function(error, data) {
      //   res.json(data);
      //   console.log(data);
      //   res.end();
      // });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.name, req.body.roomname];
      models.messages.post(params, function (error, data) {
        console.log(data);
        res.json(data);
        res.end();
      });
    }

   },

  users: {
    get: function (req, res) {
      db.User.findAll().then(function(data) {
        res.json(data);
        res.end();
      });

      // models.users.get(function(error, data) {
      //   res.json(data);
      //   res.end();
      // });
    },
    post: function (req, res) {
      var params = [req.body.name];
      models.users.post(params, function(error, data) {
        console.log(data);
        res.json(data);
        res.end();
      });
    }
  },

  rooms: {
    get: function (req, res) {
    },
    post: function (req, res) {
    }
  }

};

//var headers = {
//  "access-control-allow-origin": "*",
//  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//  "access-control-allow-headers": "content-type, accept",
//  "access-control-max-age": 10, // Seconds.
//  'Content-Type': "application/json",
//  'Access-Control-Allow-Origin': 'http://127.0.0.1:3000/classes/messages'
//};

//var sendResponse = function(response, data, statusCode){
//  statusCode = statusCode || 200;
//  response.writeHead(statusCode, headers);
//  response.end(JSON.stringify(data));
//};
//
//var collectData = function(request, callback){
//  var data = "";
//  request.on('data', function(chunk){
//    data += chunk;
//  });
//  request.on('end', function(){
//    callback(JSON.parse(data));
//  });
//};
