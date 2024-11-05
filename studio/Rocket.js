"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    // Method to calculate the sum of massKg of all items
    Rocket.prototype.sumMass = function (items) {
        return items.reduce(function (total, item) { return total + item.massKg; }, 0);
    };
    // currentMassKg method to return combined mass of cargoItems and astronauts
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    // Method to check if adding an item would exceed the total capacity
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    // Method to add cargo if within capacity
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    // Method to add an astronaut if within capacity
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
