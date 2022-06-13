function find_average(array) {
    if(array.length !== 0) {
      return array.reduce((r, v) => r + v) / array.length;
    } else {
      return 0;
    }
  }
// console.log(find_average([1,1,1]))
// console.log(find_average([1,2,3]))
// console.log(find_average([1,2,3,4]))
// console.log(find_average([]))