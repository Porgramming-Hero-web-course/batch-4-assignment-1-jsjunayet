"use strict";
function removeDuplicates(number) {
    let uniqueArray = [];
    for (let i = 0; i < number.length; i++) {
        let isTrack = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (number[i] === uniqueArray[j]) {
                isTrack = true;
                break;
            }
        }
        if (!isTrack) {
            uniqueArray.push(number[i]);
        }
    }
    return uniqueArray;
}
const result_2 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result_2);
