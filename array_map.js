//array
let nums = [3, 5, 7, 2];
console.log(nums);
console.log(nums.sort());
console.log(nums[0]);
console.log(nums.reverse());
console.log(nums.length);

let dynArray = ['m2n', 94, 3.14, true, null, false];
console.log(dynArray);


let twoDArray = [[14, 17, 18], [33, 37], [52, 51]];
console.log(twoDArray);
console.log(twoDArray.length);
console.log(twoDArray[0]);
console.log(twoDArray[0][2]);



//map
let map = {
    'a': 'apple',
    'pi': 3.14,
    'isMale': true,
    'money': null,
    'days': 24,
    true: 'yes',
    0: false,
    'week': [false, true, 2, 'tue', 4.99, 'thusday', null],
};

console.log(map);
console.log(map.week);
console.log(map.week.length);


//---------
let arr= new Array();
arr=[66,33,22,88,11];
console.log(arr);
arr.push(99);
console.log(arr);
arr.splice(1,2);
console.log(arr);
arr.push(33);
console.log(arr);


let mp= new Map();
mp.set('a','apple');
mp.set('b','ball');
mp.set('c','cat');
console.log(mp);
console.log(mp.keys());
console.log(mp.values());
console.log(mp.get('a'));
mp.delete('a');
console.log(mp);



