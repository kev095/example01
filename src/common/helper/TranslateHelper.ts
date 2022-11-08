import { GenericObject } from '../types/GenericObject';
import { TranslateMap } from '../types/TranslateMap';

export function translate<M extends GenericObject>(
  schema: GenericObject,
  map: M,
): GenericObject {
  let schemaValue: any;
  let mapKey: keyof M;
  let mappedKey: string;
  const mapKeys = Object.keys(map);
  const translatedObject: GenericObject = {};

  for (mapKey of mapKeys) {
    schemaValue = schema[mapKey as string];
    mappedKey = map[mapKey] as string;

    translatedObject[mappedKey] = schemaValue;
  }

  return translatedObject;
}
