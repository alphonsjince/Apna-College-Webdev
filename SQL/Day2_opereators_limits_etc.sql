CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user (
	id INT,
    name VARCHAR(30),
    email VARCHAR(50),
    followers INT,
    following INT,
    PRIMARY KEY (id)
);

create table posts (
	id INT,
    content varchar(50)
);