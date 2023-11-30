function FourWheeler(brand,model,speed,engineCC,color){
this.brand=brand;
this.model=model;
this.speed=speed;
this.engineCC=engineCC;
this.color=color;

}

FourWheeler.prototype.acceleration=function(){
    this.speed+=10
    console.log("Your Vehicle Speed is",this.speed);
}

FourWheeler.prototype.brake=function(){
    this.speed-=5
    console.log("Your Vehicle Speed is",this.speed)
}


let car1=new FourWheeler("Tata",2020,50,150+"CC","black")

console.log(car1);
car1.acceleration()
car1.brake()


//  let obj = Object.create(FourWheeler.prototype);
//  console.log(obj)