/* eslint-disable no-console */

function getTriangleArea (a, h) {
    if ((a <= 0) || (h <= 0)) {
        return 'Not a valid value.';
    } else {
        return a * h / 2;
    }
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(8, 10);
var triangle3Area = getTriangleArea(-6, 4);
