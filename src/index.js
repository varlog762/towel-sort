
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arr = [];
  for (let i = 0; i < matrix.length; i++){
      if (i % 2 == 1) {
          matrix[i].reverse().forEach(item => {
              arr.push(item);
          });
      } else {
          matrix[i].forEach(item => {
              arr.push(item);
          });
      }
  }

  return arr;
}
