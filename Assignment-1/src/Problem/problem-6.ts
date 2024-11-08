interface profle {
    name:string,
    age:number,
    email:string
}

function updateProfile(obj:profle, value:Partial<profle>): profle {
    return {...obj, ...value}

}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));