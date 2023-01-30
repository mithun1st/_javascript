function add(a,b){
    let x=a+b;
    function sum() {
        console.log(x);
    }
    sum();
    return x;
}
console.log(add(5,2));

//
function outer(){
    function inner(a,b){
        return (a+b);
    };
    return inner;
}

let fnc=outer();
console.log(fnc(10, 20));

let map={
    'name' : 'Mahadi',
    'fnc' : function callMyName(n){
        return n;
    }
}

console.log(map.fnc(map.name));
