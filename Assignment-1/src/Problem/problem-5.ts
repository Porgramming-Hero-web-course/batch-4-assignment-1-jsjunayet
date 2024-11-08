

function getProperty <T, I extends keyof T>(obj:T, key:I): T[I] {
    return obj[key]

}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));