let months = ["January", "July", "March", "August"];

months.shift();

months.shift();

months.unshift("June");

months.unshift("July")

console.log(months);

//Good Method

months.splice(0, 2, "July", "June");

console.log(months);