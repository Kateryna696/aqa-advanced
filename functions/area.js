function area(width,height){
    return console.log('The area is: ' + width*height);
}
area(5,10);
//
const area2=function area(width,height){
    return width*height;
}
console.log('The area is: ' + area2(15,17));
//
const area3=(width,height) => console.log('The area is: ' + width*height);
area3(9,11);