import axios from "axios";
import { Planet } from "../../schema/Planet";
import { PlanetServiceInterface } from "./PlanetServiceInterface";

export class PLanetService implements PlanetServiceInterface {
  async getPlanet(id: string): Promise<Planet> {
    const { data } = await axios.get("https://swapi.py4e.com/api/planets/" + id);
    const result: Planet = {
      nombre: data.name,
      periodo_rotacion: data.rotation_period,
      periodo_orbital: data.orbital_period,
      diametro: data.diameter,
      gravedad: data.gravity,
    };
    return await result;
  }
}
