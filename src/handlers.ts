import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import axios from "axios";

export const getPlanet = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const id = event.pathParameters?.id;
    const { data } = await axios.get("https://swapi.py4e.com/api/planets/" + id);
    const planeta = {
      nombre: data.name,
      periodo_rotacion: data.rotation_period,
      periodo_orbital: data.orbital_period,
      diametro: data.diameter,
      gravedad: data.gravity,
    };
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
