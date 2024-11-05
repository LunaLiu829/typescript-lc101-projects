import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";
export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[];
  astronauts: Astronaut[];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  // Method to calculate the sum of massKg of all items
  sumMass(items: Payload[]): number {
    return items.reduce((total, item) => total + item.massKg, 0);
  }

  // currentMassKg method to return combined mass of cargoItems and astronauts
  currentMassKg(): number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
  }

  // Method to check if adding an item would exceed the total capacity
  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  // Method to add cargo if within capacity
  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }

  // Method to add an astronaut if within capacity
  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}
