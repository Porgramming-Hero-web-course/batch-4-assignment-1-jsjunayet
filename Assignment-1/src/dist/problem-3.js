"use strict";
function countWordOccurrences(sentence, word) {
    const toLowerSentece = sentence.toLowerCase();
    const toLowerWord = word.toLowerCase();
    const words = toLowerSentece.split(' ');
    let count = words.filter((w) => w === toLowerWord).length;
    return count;
}
const result_3 = countWordOccurrences("I love typescript", "typescript");
console.log(result_3);
