import axios from 'axios';
import { Planet } from '../../schema/Planet';
import { PlanetServiceInterface } from './PlanetServiceInterface';

export class PlanetService implements PlanetServiceInterface {
  async getPlanetById(id: number): Promise<Planet> {
    const { data } = await axios.get(`https://swapi.py4e.com/api/planets/${id}/`);

    if (data.detail) {
      throw new Error(
        `Unable to find planet with id: ${id}, with details from api: ${data.detail}`,
      );
    }

    const planet: Planet = {
      name: data.name,
      rotation_period: data.rotation_period,
      orbital_period: data.orbital_period,
      diameter: data.diameter,
      gravity: data.gravity,
    };

    return planet;
  }
}
