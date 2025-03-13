var z = 1;
let z; //Identifier ‘z’ has already been declared
console.log(z);
// -----------------
let z;
console.log(z); // Cannot access ‘z’ before initialization
z = 1;


// ==============================

function hoistingExample() {
    var a = 1;
}
hoistingExample();
console.log(a);

// =========


function a() {
    console.log("1")
}
a();
function a() {
    console.log("2")
}
a();


// =====================

var test = 1;
function functionHoisting() {
    test = 10;
    return 25;
    function test() { }
}
console.log(functionHoisting())
console.log(test);

// ===========

alert(a());
function a() {
    var b = function () {
        return 3;
    };
    return b();
    var b = function () {
        return 8;
    };
}
-------------------------
    alert(a());
function a() {
    function b() {
        return 3;
    }
    return b();
    function b() {
        return 8;
    }
}
Ou