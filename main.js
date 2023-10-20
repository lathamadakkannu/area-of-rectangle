/*find area of rectangle using function expression*/

 let a=prompt("enter the length value")
 let b=prompt("enter the width value ")

let area=(l,w)=>{
    let result=l*w
    return result
}
console.log(`The area of the rectangle is:${area(a,b)}`);

