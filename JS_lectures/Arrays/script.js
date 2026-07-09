let todo = [];

let req = prompt("Enter your request");

while (true) {
    if (req == "quit") {
        console.log("You quitted");
        break;
    }

    if (req == "list") {
      console.log("------------------");
      for (let i = 0; i < todo.length; i++) {
        console.log(i, todo[i]);
      }
      console.log("------------------");
    } else if (req == "add") {
      let task = prompt("What to add");
      todo.push(task);
      console.log("Task Added");
    } else if (req == "delete") {
        let idx = prompt("Enter the index which u want to delete");
        todo.splice(idx, 1);
        console.log("Task deleted");
    } else {
        console.log("You have entered wrong request");
    }

    req = prompt("Enter your request");
    
}