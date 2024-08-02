"use strict";
const pointNumber = {
    x: 550,
    y: 20,
    z: 30,
};
const x = 'x';
const myXn = pointNumber.x;
function myPoint(point, key) {
    return point[key];
}
const myFunction = myPoint(pointNumber, x);
console.log(myFunction);
console.log(myXn, 'my xn');
