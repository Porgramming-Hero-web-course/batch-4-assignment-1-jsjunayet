"use strict";
function calculateShapeArea(shape) {
    if ("radius" in shape) {
        return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
    }
    else {
        return shape.height * shape.width;
    }
}
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(circleArea, rectangleArea);
