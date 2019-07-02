DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT NOT NULL,

    product_name VARCHAR(100),

    department_name VARCHAR(100),

    price INTEGER,

    stock_quantity INTEGER,
    
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "technology", 399.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lego", "toy", 20.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("soap", "home", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("headPhones", "technology", 99.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphonex", "technology", 500.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sunglasses", "accessories", 100.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("earings", "accessories", 50.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("apple watch", "technology", 200.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("video game", "technology", 60.00, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cleaner", "home", 10.00, 60);

SELECT * FROM products;

