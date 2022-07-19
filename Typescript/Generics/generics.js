function array(a) {
    return a;
}
var isType = array(15);
console.log(typeof (isType));
// console.log(array<number|string|boolean>([1,'2',false]));
function funt(val) {
    return val;
}
console.log(typeof (funt("hello")));
// function add<T>(a:T):T{
//     return a;
// }
// console.log(add('10'));
