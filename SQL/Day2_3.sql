CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user (
    id INT,
    age INT,
    name VARCHAR(30),
    email VARCHAR(50),
    followers INT,
    following INT,
    CONSTRAINT check_age CHECK (age >= 13),
    PRIMARY KEY (id)
);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@gmail.com", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16, "casey", "casey@email.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105),
(5, 14, "eve", "eve@yahoo.in", 400, 145),
(6, 16, "farah", "farah@gmail.com", 10000, 1000);

update user
set followers = 300
where age = 16;

DELETE FROM user
where age =14;

select * from user;

SET SQL_SAFE_UPDATES = 0;

select age,max(followers)
from user
group by age
having max(followers)>200;