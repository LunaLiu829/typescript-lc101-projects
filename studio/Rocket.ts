import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";
export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItem: Cargo[];
  astronauts: Astronaut[];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass(items: Payload[]): number {}
}
