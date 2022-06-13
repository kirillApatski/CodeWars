function find_average(array) {
    return array.reduce((r, v) => r + v) / array.length;
}

console.log(find_average([1,1,1]))
console.log(find_average([1,2,3]))
console.log(find_average([1,2,3,4]))