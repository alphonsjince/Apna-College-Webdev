const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'stalphy@123'
});

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
  ["123b", "123new_userb", "abc@gmail.comb", "abcb"],
  ["123c", "123new_userc", "abc@gmail.comc", "abcc"]
];

try {
  connection.query(q, [users], (err, result) => {
    if (err) throw err;
    console.log(result); 
    
  })
} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
