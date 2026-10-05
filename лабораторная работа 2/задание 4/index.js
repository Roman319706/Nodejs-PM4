const { isPositive, isEven } = require('./validator');

[5, -3, 0, 8, -10, 7].forEach((num) => {
  const positive = isPositive(num);
  const even = isEven(num);
  console.log(num + ': isPositive = ' + positive + ', isEven = ' + even);
});
