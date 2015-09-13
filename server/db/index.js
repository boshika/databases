var mysql = require('mysql');
var Sequelize = require('sequelize');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var sequelize = new Sequelize("chat", "root", "");

var User = sequelize.define('users', {
  name: Sequelize.STRING,
}, {
  timestamps: false
});

var Room = sequelize.define('rooms', {
  room_name: Sequelize.STRING,
}, {
  timestamps: false
});

var Message = sequelize.define('messages', {
  message: Sequelize.STRING,
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  room_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Room,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {
  timestamps: false
});

User.hasMany(Message);
Room.hasMany(Message);
Message.belongsTo(User);
Message.belongsTo(Room);

//exports.connection = mysql.createConnection({
// user: "root",
// password: "comoergosum1970",
// database: "chat"
//});
module.exports.User = User;
module.exports.Room = Room;
module.exports.Message = Message;





