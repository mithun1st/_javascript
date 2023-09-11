


//###########################################   ARROW FUNCTION    ##################################

function bodyFnc(p1) {
    return "this is body fnc " + p1;
}

let arrowFnc = (p1) => "this is arrow fnc " + p1;

let arrowFnc2 = (p1) => {
    return "this is arrow fnc " + p1;
};

console.log(bodyFnc("data1"));
console.log(arrowFnc("data2"));
console.log(arrowFnc2("data3"));



// this is body fnc data1
// this is arrow fnc data2
// this is arrow fnc data3

//###########################################   For Eatch / IN / OF   ##################################

let arrForEatch = ['aa', 'bb', 'cc', 'dd']

arrForEatch.forEach((s, i) => {
    console.log(`${i} - ${s}`);
});

for (let i in arrForEatch) { //index
    console.log(i);
}
for (let e of arrForEatch) { //element
    console.log(e);
}

// 0 - aa
// 1 - bb
// 2 - cc
// 3 - dd
// 0
// 1
// 2
// 3
// aa
// bb
// cc
// dd

//###########################################   truehy / falsy    ##################################

// (this is falsy)
// False, 0, "", Null, Undefined, NaN

let con = '234';

if (con) {
    console.log(`this is truthy++++++++${con} ${typeof (con)}`);
} else {
    console.log(`this is falsy-------- ${typeof (con)}`);
}

//this is truthy++++++++234 string


//###########################################   NAN    ##################################

console.log(isNaN("hi"));   //true
console.log(isNaN("3.24")); //false
console.log(isNaN(3.24));   //false

// true
// false
// false

//###########################################   Ternary    ##################################

const age = 13;
const result = age < 18 ? "baby" : "adult";
console.log(result);

// baby

//###########################################   ARRAY FIND    ##################################

const arr1 = [10, 20, 30, 40, 50, 60];

let arr1Result = arr1.find((value, index, ar) => {
    console.log(`${value}    ${index}     ${ar}`)
    return value > 50;
});

console.log(arr1);
console.log(arr1Result);


// 10    0     10,20,30,40,50,60
// 20    1     10,20,30,40,50,60
// 30    2     10,20,30,40,50,60
// 40    3     10,20,30,40,50,60
// 50    4     10,20,30,40,50,60
// 60    5     10,20,30,40,50,60
// [ 10, 20, 30, 40, 50, 60 ]
// 60

//###########################################   ARRAY FILTER    ##################################

const arr2 = [11, 22, 33, 44, 55, 66];
let arr2Result = arr2.filter((value, index, ar) => {
    console.log(`${value}    ${index}     ${ar}`)
    return value % 2 == 0;
});
console.log(arr2);
console.log(arr2Result);

// 11    0     11,22,33,44,55,66
// 22    1     11,22,33,44,55,66
// 33    2     11,22,33,44,55,66
// 44    3     11,22,33,44,55,66
// 55    4     11,22,33,44,55,66
// 66    5     11,22,33,44,55,66
// [ 11, 22, 33, 44, 55, 66 ]
// [ 22, 44, 66 ]

//###########################################   ARRAY SLICE    ##################################

const arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];

let arr3Result = arr3.slice(2, 4);
console.log(arr3);
console.log(arr3Result);

// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// [ 'c', 'd' ]

//###########################################   ARRAY SPLICE *change main varible*    ##################################

const arr4 = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'];

let arr4Result = arr4.splice(2, 4, "xx", "yy", "zz");
console.log(arr4);
console.log(arr4Result);

// [ 'aa', 'bb', 'xx', 'yy', 'zz' ]
// [ 'cc', 'dd', 'ee', 'ff' ]

//###########################################   ARRAY CONCAT    ##################################


const arr5 = ["A", "B", "C"];
const arr6 = ["X", "Y"];

let arr7 = arr5.concat(arr6);

console.log(arr5);
console.log(arr6);
console.log(arr7);

// [ 'A', 'B', 'C' ]
// [ 'X', 'Y' ]
// [ 'A', 'B', 'C', 'X', 'Y' ]

//###########################################   ARRAY PUSH POP    ##################################

let arr8 = ["A", "B", "C"];

arr8.push(7);
arr8.push("X");
arr8.push(true);

console.log(arr8);

let popValue = arr8.pop()
console.log(popValue);

console.log(arr8);

// [ 'A', 'B', 'C', 7, 'X', true ]
// true
// [ 'A', 'B', 'C', 7, 'X' ]

//###########################################   ARRAY MAP    ##################################

let arr9 = [2, 4, 6, 8];

let arr10 = arr9.map((num, index, ar) => {
    console.log(`${num} ${index} ${ar}`);
    return num * 100;
});
console.log(arr9)
console.log(arr10)

// 2 0 2,4,6,8
// 4 1 2,4,6,8
// 6 2 2,4,6,8
// 8 3 2,4,6,8
// [ 2, 4, 6, 8 ]
// [ 200, 400, 600, 800 ]

//###########################################   ARRAY REDUCE    ##################################



let arr11 = [10, 20, 30, 40];

let arr12 = arr11.reduce((preValue, currValue, index) => {
    console.log(`${preValue}    ${currValue}     ${index}`);
    return currValue + preValue;
});

console.log(arr11);
console.log(arr12);

// 10    20     1
// 30    30     2
// 60    40     3
// [ 10, 20, 30, 40 ]
// 100

//###########################################   OBJECT TRICKS    ##################################

let obj1 = {
    "aaaa": "Alice",
    "bbbb": "Bob",
    "cccc": "Charls"
}

for (let k of Object.keys(obj1)) {
    console.log(k);
}
console.log(Object.keys(obj1))

for (let k of Object.values(obj1)) {
    console.log(k);
}
console.log(Object.values(obj1))

for (let k of Object.entries(obj1)) {
    console.log(k);
}
console.log(Object.entries(obj1))

console.log(obj1);


// aaaa
// bbbb
// cccc
// [ 'aaaa', 'bbbb', 'cccc' ]
// Alice
// Bob
// Charls
// [ 'Alice', 'Bob', 'Charls' ]
// [ 'aaaa', 'Alice' ]
// [ 'bbbb', 'Bob' ]
// [ 'cccc', 'Charls' ]
// [ [ 'aaaa', 'Alice' ], [ 'bbbb', 'Bob' ], [ 'cccc', 'Charls' ] ]
// { aaaa: 'Alice', bbbb: 'Bob', cccc: 'Charls' }


//###########################################  Function Default Parameter    ##################################

function callMyName1(p = 'no name found !') {
    console.log(p);
}

let callMyName2 = (p = null) => {
    console.log(p);
}

callMyName1('Mahadi Hassan');
callMyName1();

callMyName2(3.14);
callMyName2();

// Mahadi Hassan
// no name found !
// 3.14
// null

//###########################################  Spread Operator    ##################################


let arr13 = [10, 20, 30, 40, 50];
let arr14 = [...arr13, 60, 70,];

console.log(arr13);
console.log(arr14);

// [ 10, 20, 30, 40, 50 ]
// [
//   10, 20, 30, 40,
//   50, 60, 70
// ]

//###########################################  Rest Operator    ##################################


function fnc1(...p) {
    console.log(p);
}
function fnc2(p, ...p2) {
    console.log(p);
    console.log(p2);
}


fnc1(11, 22, 33, 44, 55);
fnc2(true, false, true, "p1", "p2");

// [ 11, 22, 33, 44, 55 ]
// true
// [ false, true, 'p1', 'p2' ]

//###########################################  Destructuring    ##################################

const person1 = {
    "name": "mahadi",
    roll: 101,
    isMale: true,
    "education": {
        result: 3.14,
        sub: ["sub1", "sub2", "sub3"],
    }
}

let { education: { sub: allSub = [] } } = person1;
// let allSub = person1.education.sub = [];


allSub.push('newSub');

console.log(person1);
console.log(allSub);


//swip variable
let v1 = 3;
let v2 = 5;

[v2, v1] = [v1, v2]

console.log(v1);
console.log(v2);

// {
//     name: 'mahadi',
//     roll: 101,
//     isMale: true,
//     education: { result: 3.14, sub: [ 'sub1', 'sub2', 'sub3', 'newSub' ] }
//   }
//   [ 'sub1', 'sub2', 'sub3', 'newSub' ]

// 5
// 3

//###########################################    Set & WeakSet   ##################################

let array = new Array();
array.push(4);
array.push(7);
array.push(7);
array.push(8);

let set = new Set(array); //array to set
set.add(11).add(22).add(33).delete(11);

console.log(array);
console.log(array.length);
console.log(set);
console.log(set.has(11));
console.log(set.has(33));
console.log(set.size);

let newArray = new Array(...set);// set to array
console.log(newArray);

// union - intersection - difference

let a1 = new Set([1, 2, 3]);
let a2 = new Set([4, 3, 2]);

let union = new Set([...a1, ...a2]);

let interSection = [...a1].filter((n) => {
    return a2.has(n);
});

let difference = [...union].filter((n) => {
    return !interSection.includes(n);
});

console.log(union);
console.log(interSection);
console.log(difference);


// [ 4, 7, 7, 8 ]
// 4
// Set(5) { 4, 7, 8, 22, 33 }
// false
// true
// 5
// [ 4, 7, 8, 22, 33 ]
// Set(4) { 1, 2, 3, 4 }
// [ 2, 3 ]
// [ 1, 4 ]

console.log("x");
setTimeout(()=>{
    console.log('Y')
},1000);
console.log("z");