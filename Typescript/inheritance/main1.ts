class Vehicle{
    Color:string;
    constructor(color:string){
        this.Color=color;
    }
}
class Car extends Vehicle{
Price:number;
constructor(color:string,price:number){
    super(color);//The constructor of the Car class initializes its own members as well as the parent class's properties by using a special keyword 'super.'
                 //The super keyword is used to call the parent constructor and its values.
    this.Price=price;
}
display():void{
    console.log(this.Color);
    console.log(this.Price);
}
}
let obj1=new Car('Honda',65000);
obj1.display();