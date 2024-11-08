"use strict";
function updateProfile(obj, value) {
    return Object.assign(Object.assign({}, obj), value);
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
