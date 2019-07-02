var mysql = require("mysql");
var inquirer = require('inquirer');
var Table = require('cli-table');

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "8X49bzl0!",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log("connected as id " + connection.threadId + "\n")
    // StaticRange();
});

function list() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        var table = new Table({
            head: ["item_id", "product_name", "department_name", "price", "stock_quantity"],
            colWidths: [10, 25, 25, 10, 14]
        });
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(table.toString());
    })
    customer();
}
list();
function customer() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        inquirer.prompt([
            // The first should ask them the ID of the product they would like to buy.
            {
                type: "input",
                message: "What is the ID of the product you would like to buy?",
                name: "product_id"
            },
            // The second message should ask how many units of the product they would like to buy.
            {
                type: "input",
                message: "How many units would you like to purchase",
                name: "quantity"
            }
        ]).then(function (answers) {
            var cust = parseInt(answers.quantity)
            // console.log(cust);
            var quant = res[parseInt(answers.product_id) - 1].stock_quantity;
            var newQuant = quant - cust;
console.log (newQuant)
            connection.query("UPDATE products SET ? WHERE ?", [{ stock_quantity: newQuant }, { item_id: answers.product_id }], function (err) {
                if (err) throw err;
            })
            
           newList(); 
        })
    })
}
function newList() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        var table = new Table({
            head: ["item_id", "product_name", "department_name", "price", "stock_quantity"],
            colWidths: [10, 25, 25, 10, 14]
        });
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(table.toString());
    })

}
