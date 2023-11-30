function Vehicle(brand,model,speed,FuelType){
    this.brand=brand;
    this.model=model;
    this.speed=speed;
    this.FuelType=FuelType
}


Vehicle.prototype.accelerate=function(){
    this.speed+=10
    console.log("our Vehicle speed is",this.speed);
}

Vehicle.prototype.brake=function(){
    this.speed-=5
    console.log("Vehicle speed is",this.speed);
}

Vehicle.prototype.refule=function(){
    console.log("Refuling the Vehicle");
}

let Vehicle1=new Vehicle("Tata",2020,50,"desial")
console.log(Vehicle1);
Vehicle1.accelerate();
Vehicle1.brake();

let Vehicle2=new Vehicle("BMW",2021,60,"desial")
console.log(Vehicle2);
Vehicle2.accelerate();
Vehicle2.brake();


// constructor function to creating a cars


function Car(brand,model,speed,FuelType,noOfWheels){
Vehicle.call(this,brand,model,speed,FuelType)
this.noOfWheels=noOfWheels;
}


Object.setPrototypeOf(Car.prototype,Vehicle.prototype);

let car1=new Car("Suzuki",2023,50,"petrol",4)
console.log(car1);
car1.brake()
car1.accelerate()

let car2=new Car("Lamborgini",2023,50,"petrol",4)
console.log(car2);
car2.brake()
car2.accelerate()



function Airplane(brand,model,speed,FuelType,noOfEngine,hasLandingGear,noOfWheels){
    Vehicle.call(this,brand,model,speed,FuelType);
    this.noOfEngine=noOfEngine;
    this.hasLandingGear=hasLandingGear;
    this.noOfWheels=noOfWheels
}



Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype)

Airplane.prototype.takeoff=function(){
    console.log("taking off");
}


let air= new Airplane("indigo",2020,0,"deseal",5,4,4)
console.log(air);
air.accelerate()
air.brake()


