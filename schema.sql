DROP DATABSE IF EXISTS employee_tracker;
use employee_tracker;

CREATE TABLE departments(
id INT(100) AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100)
);

CREATE TABLE roles (
id INT(100) AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100),
salary INT(100),
department_id INT(100)
);

CREATE TABLE employees (
id INT(100) AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(100),
last_name VARCHAR(100),
role_id INT(100),
manager_id INT(100)
);