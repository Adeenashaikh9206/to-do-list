import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "What would you like to do?"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more ?",
            default: "false"
        }
    ]);
    todo.push(addTask.todo);
    console.log(todo);
    condition = addTask.addMore;
}
