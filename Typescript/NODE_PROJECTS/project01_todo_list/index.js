import inquirer from "inquirer";
// array
let todos = [];
async function createtodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select the Operator",
            name: "select",
            choices: ["Add", "view", "update", "delete"],
        });
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add item in the list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            todos.forEach((todo) => console.log(todo));
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "update item in the list",
                name: "todo",
                choices: todos.map((item) => item),
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add item in the list",
                name: "todo",
            });
            let newTodo = todos.filter((val) => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log("*** TO DO LIST ***");
            console.log(todos);
            console.log("*******************");
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "update item in the list",
                name: "todo",
                choices: todos.map((item) => item),
            });
            let newTodo = todos.filter((val) => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
createtodo(todos);
