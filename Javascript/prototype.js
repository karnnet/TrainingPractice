// function hello() {
//     console.log("hello world"); // only function provide prototype property
// }

// // var hello = 'xyz'; // object dont have prototype

// if (hello.prototype) {
//     console.log("prototype is present");
// } else {
//     console.log("prototype is not present");
// }

// // console.log(hello.prototype);

// hello.prototype.newproperty = "abcd";
// hello.prototype.newfunction = function() {
//     return 'navneet'
// }
// console.log(hello.prototype.newfunction());


function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
console.log(Student.prototype.age); //either this
console.log(studObj1.__proto__.age); //or this
console.log(typeof Student.prototype);
console.log(typeof studObj1.__proto__);
console.log(Student.prototype == studObj1.__proto__); //compare both prototype
console.log(Object.getPrototypeOf(studObj1));
console.log(Student.isPrototypeOf()); //true or false