function array<T>(a:T[]):T[]{
    return a.sort();
}
console.log(array<number>([1,20,11]));
console.log(array<string>(["a","g","e"]));
console.log(array<boolean>([false,true,false]));
console.log(array<number|string|boolean>([1,'2',false]));






// function add<T>(a:T):T{
//     return a;
// }
// console.log(add('10'));