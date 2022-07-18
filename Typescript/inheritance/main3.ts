class Vehicles{
    private model:string[]=[];
   
    //private is modifier,it can be used only in class Vehicles
constructor(public vehicleName:string,public vehicleColor:string ){}
addModel(modelName:string){
    this.model.push(modelName);
}
}
class Car extends Vehicles{
    private fourwheel:string[]=[];
    constructor(){
        super('Honda','blue');
    }
    addStayering(name:string)
    {
        this.fourwheel.push(name);
    }
    //overrriding and it goes to parent and call addModel
    addModel(modelName:string):void{
        if(modelName!='hero') 
        super.addModel(modelName);
    }
}
//extends keyword inherit the parent class property
class Bike extends Vehicles{
    private twowheel:string[]=[];
    constructor(){
        super('Yamaha','green');
    }
    addHandle(type:string)
    {
    this.twowheel.push(type);
}
}

let car= new Car();
car.addStayering('4 wheeler drive');
car.addModel('SUV');
car.addModel('hero');


let bike=new Bike();
bike.addHandle('2 wheeler drive');
bike.addModel('SPORTS');
bike.addModel('hero');

console.log(car);
console.log(bike);