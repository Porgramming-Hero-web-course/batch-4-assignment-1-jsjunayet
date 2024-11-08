# The significance of union and intersection types in Typescript.

## Union Type:

Union types allow a variable or function parameter to accept values of multiple types. It is represented by a pipe (|) symbol.

example:

function Example(id: string | number) {
    console.log(id);
}

printID(10); // Output: 10
printID("hello world"); // Output: hello world

## Intersection Type:

Intersection types allow you to combine all the properties of multiple types into a single type. It is represented by an ampersand (&) symbol.


interface User {
    name: string;
    email: string;
}

interface Admin {
    role: "admin";
}

type AdminUser = User & Admin;

const adminUser: AdminUser = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "admin"
};

## When to Use Union vs. Intersection Types

Union Types (|): Use when a value can be one of several types. For example, when a value can be either a string or a number, or when you want to accept multiple formats for a value.

Example:

let value: string | number;
value = "Hello";
value = 123; 

Intersection Types (&): Use when you need to combine multiple types into one, meaning the value must have all the properties of each type. This is useful when combining different object structures.

Example:

interface Person {
    name: string;
}
interface Employee {
    jobTitle: string;
}

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = { name: "Alice", jobTitle: "Engineer" };

## significance 

Union and Intersection types, we can make our code more flexible (Union) or more specific and detailed (Intersection), which helps in creating better, more efficient code