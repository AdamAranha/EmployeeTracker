use employee_tracker;

INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Finance');
INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Legal');

INSERT INTO roles (title, salary, department_id) VALUES ('Sales Lead', 100000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Salesperson', 80000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Lead Engineer', 150000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Software Engineer', 120000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Accountant', 125000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Lawyer', 190000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ('Legal Team Lead', 250000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Denzel', 'Washington', 1, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Chris', 'Pratt', 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Ethan', 'Hawke', 3, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Vincent', "D'Onofrio", 4, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Byung-Hun', 'Lee', 5, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Manuel', 'Garcia-Rulfo', 6, 4);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Martin', 'Sensmeier', 7, 4);