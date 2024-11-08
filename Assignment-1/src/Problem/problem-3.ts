function countWordOccurrences (sentence : string, word : string) : number{
    const toLowerSentece : string = sentence.toLowerCase()
    const toLowerWord : string = word.toLowerCase()
    const words : string[] = toLowerSentece.split(' ')
    let count : number = words.filter((w)=>w===toLowerWord).length
    return count

}
const result_3 : number = countWordOccurrences("I love typescript", "typescript");
console.log(result_3);

