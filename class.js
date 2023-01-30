

class Person{
    call() {
         return 'My Name is ' +this.name;
    };
    constructor(id, name){
        this.id=id;
        this.name=name;
    };
}

let p1=new Person(23,'Mahadi');
let p2=new Person(true,'Hassan');

console.log(p1.id);
console.log(p1.name);

console.log(p2.id);
console.log(p2.name);
console.log(p2.call());
console.log(typeof p2.call());