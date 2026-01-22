export {}

let name: string = "Toma"
let programmingLanguages: string[] = []
programmingLanguages.push("Toma");

// HTTP: "Sucess" -> 200
let result: string | number = "OK";


interface User {
    name: string;
    age: number;
}

// name: string, age: number
const user: User = {
    name: "toma",
    age: 20
};

console.log(user);