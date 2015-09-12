var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('logging the get from models index js. ');
      var query = "SELECT * FROM messages;";
      db.connection.query(query, function(error, data) {
        callback(data);
      });
    },
    post: function (params, callback) { // params: [message, username, room_name];
      var query =
        "INSERT into messages(message, user_id, room_id) values (" +
          "?, " +
          "(SELECT id FROM users WHERE name = ?;), " +
          "(SELECT id FROM rooms WHERE room_name = ?;)" +
        ")";
      db.connection.query(query, params, function(error, data) {
        if(error) {
          console.log('error e', error);
        }
        callback(data);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (callback) {
      var query = "SELECT * FROM users;";
      db.connection.query(query, function(error, data) {
        callback(data);
      });
    },
    post: function (params, callback) {
      var query = "INSERT INTO users(name) values(?);";
      db.connection.query(query, params, function(error, data) {
        if(error) {
          console.log("There is a error", error);
        }
        callback(data);
      });
    }
  },

  rooms: {
    get: function (callback) {
      var query = "SELECT * FROM rooms";
      db.connection.query(query, function(error, data) {
        callback(data);
      });
    },
    post: function () {
      var query = "INSERT INTO rooms(room_name) values(?);";
      db.connection.query(query, params, function(error, data) {
        if(error) {
          console.log("There is a error", error);
        }
        callback(data);
      });
    }
  }
};

