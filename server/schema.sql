--DROP SCHEMA IF EXISTS chat;

CREATE SCHEMA IF NOT EXISTS chat;

USE chat;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  message VARCHAR(255),
  PRIMARY KEY (ID)
);

ALTER TABLE messages ADD COLUMN created_at TIMESTAMP  DEFAULT now();
ALTER TABLE messages ADD COLUMN updated_at TIMESTAMP DEFAULT now() ON UPDATE now();

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID),
  name VARCHAR(255)
);


ALTER TABLE users ADD COLUMN created_at TIMESTAMP  DEFAULT now();
ALTER TABLE users ADD COLUMN updated_at TIMESTAMP DEFAULT now() ON UPDATE now();

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  room_name VARCHAR(255),
  PRIMARY KEY (ID)
);

ALTER TABLE rooms ADD COLUMN created_at TIMESTAMP  DEFAULT now();
ALTER TABLE rooms ADD COLUMN updated_at TIMESTAMP DEFAULT now() ON UPDATE now();
ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users(ID);
ALTER TABLE messages ADD FOREIGN KEY (room_id) REFERENCES rooms(ID);
