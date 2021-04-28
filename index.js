// object literal with key value pairs
// bad way to create an object if the object has more than one method 
// because if there is a problem in the method replicating the object will replicate the problematic method
// const circle = {
//   // radius and location are properties of the circle object
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   // draw is a method of the circle object
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw();


// Factory Function 
// If you return an object in the function  
// function createCircle(radius){
//     return {
//         // radius property has same name for key and value so you can just use ,
//         radius,
    
//         // draw is a method of the circle object
//         draw: function () {
//           console.log("draw");
//         },
//       };
// }

// const circle = createCircle(1)

// // Constructor Funciton
// // if you use the this keyword along with the new operator
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw')
//     }
// }
// const another = new Circle(1)

// The take away is that in Javascript functions are objects


/////////// ---------------- ///////////
// Value / Primitive type
// x and y are independent of each other
// let x = 10;
// let y = x;

// x = 20;

// Reference Type 
// let x = { value: 10};
// let y = x;

// x.value = 20

// let obj = {value: 10};

// function increase(obj){
//     obj.value++
// }

// increase(obj)
// console.log(obj)

//// Enumerating over Objects ////
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(10);
// for in loop used to enumerate all the members of an object
for (let key in circle){
    if (typeof circle[key] !== 'function')
    console.log(key, circle[key])
}

// to get all the keys in object use Object.keys
const keys = Object.keys(circle)
console.log(keys)

// to check for the existance of a property or a method in an object use the in operator
if('radius' in circle)
    console.log('Circle has a radius.');


function Stopwatch(){
    
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running)
            throw new Error('Stopwatch has already been started.');
        
        running = true;

        startTime = new Date();
    };

    this.stop = function(){
        if(!running)
            throw new Error('Stopwatch is not started.');
        
        running = false

        endTime = new Date()

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration;}
    });
}

console.log(Stopwatch)