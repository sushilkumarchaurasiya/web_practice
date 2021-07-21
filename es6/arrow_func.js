// Native JS
function aa(aa,bb) {
    return function addtion(a,b) {
        return a+b;
    }   
}

console.log('Addition : ',aa(10,15)(100,200));

// es6
const add = (a,b)=>{
    return a+b;
}
console.log('add', add(400,500));