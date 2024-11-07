
function sumArray (number:number[]) : number {
    let sum : number = 0;
    for(let i =0; i<number.length; i++){
        sum +=number[i]
    }
    return sum
}
const result : number = sumArray([1, 2, 3, 4, 5]);
console.log(result);