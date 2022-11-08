import { Planet } from '../../schema/Planet';

export type PlanetMap = {
  [key in keyof Planet]: string;
};
