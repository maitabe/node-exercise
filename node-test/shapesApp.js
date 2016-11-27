var circleUtils = require('./circleUtils'); //{pi: pi, calcCircleArea: calcCircleArea}
console.log(title);
console.log(circleUtils.calcCircleArea(10));
console.log("Just to verify: " + 10 * 10 * 3.14159);
// console.log(module.exports);

var calcRectArea = require('./rectangleUtils').calcRectArea;
console.log(calcRectArea);
console.log(calcRectArea(4, 5));
