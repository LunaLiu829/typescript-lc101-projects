"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// URL for the instructions:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
// let spacecraftName: string = "Determination";
// let speedMph: number = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoom = 384400;
// let milesPerKilometer: number = 0.621;
// Part 2: Print Days to Mars
// let daysToMars: number = (kilometersToMars * milesPerKilometer) / speedMph / 24;
// Code an output statement here (use a template literal):
// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// function getDaysToLocation(kilometersAway: number): number {
//   let milesAway: number = kilometersAway * milesPerKilometer;
//   let hours: number = milesAway / speedMph;
//   return hours / 24;
// }
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
var spaceShuttle = new Spacecraft("Detemination", 17500);
// console.log(
//   `${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(
//     kilometersToMars
//   )} days to get to the Mars.`
// );
// console.log(
//   `${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(
//     kilometersToTheMoom
//   )} days to get to the Moon.`
// );
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation("Mars", kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation("Moon", kilometersToTheMoom));
