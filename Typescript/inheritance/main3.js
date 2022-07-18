var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    //private is modifier,it can be used only in class Vehicles
    function Vehicles(vehicleName, vehicleColor) {
        this.vehicleName = vehicleName;
        this.vehicleColor = vehicleColor;
        this.model = [];
    }
    Vehicles.prototype.addModel = function (modelName) {
        this.model.push(modelName);
    };
    return Vehicles;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super.call(this, 'Honda', 'blue') || this;
        _this.fourwheel = [];
        return _this;
    }
    Car.prototype.addStayering = function (name) {
        this.fourwheel.push(name);
    };
    //overrriding
    Car.prototype.addModel = function (modelName) {
        if (modelName != 'hero')
            _super.prototype.addModel.call(this, modelName);
    };
    return Car;
}(Vehicles));
//extends keyword inherit the parent class property
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        var _this = _super.call(this, 'Yamaha', 'green') || this;
        _this.twowheel = [];
        return _this;
    }
    Bike.prototype.addHandle = function (type) {
        this.twowheel.push(type);
    };
    return Bike;
}(Vehicles));
var car = new Car();
car.addStayering('4 wheeler drive');
car.addModel('SUV');
car.addModel('hero');
var bike = new Bike();
bike.addHandle('2 wheeler drive');
bike.addModel('SPORTS');
bike.addModel('hero');
console.log(car);
console.log(bike);
