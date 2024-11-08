type Circle={
    shape: string
    radius: number 
}

type Rectangle={
    shape: string
    width: number
    height: number
}

function calculateShapeArea(shape : Circle | Rectangle) : number{
    if("radius" in shape){
        return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2))
    }else{
        return shape.height * shape.width
    }
}

const circleArea : number = calculateShapeArea({ shape: "circle", radius: 5 });

const rectangleArea : number = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(circleArea, rectangleArea);