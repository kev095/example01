import { Planet } from "../../schema/Planet";

export interface PlanetServiceInterface {
  getPlanet(id: string): Promise<Planet>;
}
