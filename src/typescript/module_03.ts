

type Point ={
    x: number;
    y: number;
    z: number;
}


type p = keyof Point
type xn = Point['x']
const pointNumber:Point = {
    x: 550,
    y: 20,
    z: 30,
 
}

const x = 'x'
const myXn = pointNumber.x


function myPoint(point: Point, key: p){
    return point[key]
}


const myFunction = myPoint(pointNumber, x)
console.log(myFunction)
console.log(myXn,  'my xn')