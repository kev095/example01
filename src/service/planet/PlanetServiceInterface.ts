import { Planet } from '../../schema/Planet';
import { ServiceInterface } from '../ServiceInterface';

export interface PlanetServiceInterface extends ServiceInterface {
  getPlanetById(id: number): Promise<Planet>;
}
