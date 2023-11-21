// array const:
const cars = ["Saab","Valvo","BMW"];
//change an element:
cars[0] = "Toyota";
//add an element:
cars.push("Audi");
document.getElementById("a").innerHTML = cars;
// Object const:
const car = {type:"Fiat",model:"500",color:"White"};
//change property:
car.color = "Red";
//add property:
car.owner = "SAGOR";
document.getElementById("b").innerHTML = car.color +  " Car Owner Habiba's husband " + car.owner;