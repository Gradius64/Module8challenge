"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import AbleToTow from './AbleToTow.js';
class AbleToTow {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    displayInfo() {
        console.log(`AbleToTow: ${this.make} ${this.model}`);
    }
}
///import Motorbike from './Motorbike.js';
class Motorbike {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    displayInfo() {
        console.log(`Motorbike: ${this.make} ${this.model}`);
    }
}
//import Wheel from './Wheel.js';
class Wheel {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    displayInfo() {
        console.log(`Motorbike: ${this.make} ${this.model}`);
    }
}
const x = 'name';
console.log(x);
// TODO: Declare properties of the Truck class
const Truck1 = {
    Truck1: "Toyota",
    color: "Red",
    size: "Medium",
};
const Truck2 = {
    Truck2: "Chevy",
    color: "gray",
    size: "Large",
};
const Truck3 = {
    Truck3: "Mazda",
    color: "orange",
    size: "medi"
};
class vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
        this.towingCapacity = towingCapacity;
    }
}
// TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
class Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
        this.towingCapacity = towingCapacity;
    }
}
// TODO: Create a constructor that accepts the properties of the Truck class
class Truck {
    constructor(make, model, year, payloadCapacity) {
        // TODO: The constructor should call the constructor of the parent class, Vehicle
        class Vehicle {
            weight;

            constructor(weight) {
                this.weight = weight; // Initialize the weight property
            }

            canBeTowed(towingLimit) {
                if (this.weight > towingLimit) {
                    console.log("The vehicle is too heavy to be towed.");
                    return false;
                }
                return true;
            }
        }
            
        
            
            


            
        
           
            

            


      
        }
        // Constructor for the Truck class
        // TODO: The constructor should initialize the properties of the Truck class
        constructor(weight) {
            this.weight = weight; // Initialize the weight property
        }
    


    
    }
