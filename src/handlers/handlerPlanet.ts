import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { fromError } from '../common/helper/ResponseErrorHelper';
import { translate } from '../common/helper/TranslateHelper';
import { PlanetMap } from '../common/types/PlanetMap';
import { planetTranslation } from '../i18n/schema/Planet.spa';
import { PlanetService } from '../service/planet/PlanetService';
import { PlanetServiceInterface } from '../service/planet/PlanetServiceInterface';

const service: PlanetServiceInterface = new PlanetService();

export const getPlanet = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  let response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify({}),
  };

  try {
    const id = event.pathParameters?.id;

    if (id === undefined) {
      response.statusCode = 400;
      response.body = JSON.stringify({
        error: 'Parameter id is needed please use ?id= at request URL',
      });

      return response;
    }

    const planet = await service.getPlanetById(parseInt(id));
    const translatedPlanet = translate<PlanetMap>(planet, planetTranslation);

    response.body = JSON.stringify(translatedPlanet);
  } catch (error: unknown) {
    response = fromError(error);
  }

  return response;
};
