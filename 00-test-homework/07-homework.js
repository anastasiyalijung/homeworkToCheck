//1st function
const getRandomArray = (length, min, max) => {
    return Array.from({ length },() => Math.floor( Math.random() * (max-min+1))+ min )
}
console.log(getRandomArray(100, 10, 1));


//2nd function
function getModa(...n){
    return  n.filter (value => Number.isInteger(value)).sort((a,b) =>
        n.filter(move => move === a).length - n.filter(move => move === b).length).pop();
}
console.log(getModa(3, 8, 65, 45, 76, 54, 7, 87, 5, 43, 67, 54, 21, 12, 9));

//function 3
const getAverage = (...n) => {
    const myArr = n.filter(value => Number.isInteger(value) )
    const sum = myArr
        .reduce((a, b) => a + b);
    return sum / myArr.length;
}
console.log(getAverage(87, 4, 5, 6, 67.4, 4.67, 38, 67));



//function 4
function median(...n) {
    
    const myArr = n.filter(value => Number.isInteger(value))
    const { length } = myArr
    
    myArr.sort((a, b) => a - b)
    
    return (myArr[length / 2 - 1])

}
console.log(median(76, 62, 65, 98, 5, 34));


//function 5
const filterEvenNumbers = (...n) => {
    return myArr = n.filter(value => value % 2 !== 0)
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5));

//function 6
function countPositiveByFive(...n) {
    return n.filter((value, index) => value > 0).length;
}
console.log(countPositiveByFive(-56, 6, -7, -8, 67, -45, -13));