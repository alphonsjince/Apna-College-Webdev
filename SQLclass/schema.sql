CREATE TABLE user(
  id varchar(50) PRIMARY KEY,
  username varchar(50) UNIQUE,
  email varchar(50) UNIQUE not null,
  password varchar(50) not null
);