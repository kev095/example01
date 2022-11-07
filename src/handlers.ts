import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { PLanetService } from "./service/planet/PlanetService";
import { PlanetServiceInterface } from "./service/planet/PlanetServiceInterface";

export const getPlanet = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const service: PlanetServiceInterface = new PLanetService();
    const id = event.pathParameters?.id as string;
    const planeta = await service.getPlanet(id);
    return {
      statusCode: 200,
      body: JSON.stringify(planeta),
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        error: error,
      }),
    };
  }
};

export const createClient = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify("ok"),
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        error: error,
      }),
    };
  }
};
