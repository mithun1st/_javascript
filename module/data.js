
const dataObj = {
    "pi": 3.1415,
    "piDay": "March 14",
    "isIndexStartWithZero": true
}

let valueOfPi = dataObj.pi;

function callMyName() {
    console.log("Mahadi Hassan");
}

const getterFnc = (p1) => {
    console.log({ argument: p1, ...dataObj });
}

module.exports = { valueOfPi, callMyName, getterFnc }