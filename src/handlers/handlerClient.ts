import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Client } from "../schema/Client";
import { ClientService } from "../service/client/ClientService";
import { ClientServiceInterface } from "../service/client/ClientServiceInterface";

export const createClient = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const requestBody = JSON.parse(event.body as string);
    const client: Client = { ...requestBody };
    const service: ClientServiceInterface = new ClientService();

    const clientSaved = await service.saveClient(client);
    if (clientSaved) {
      return {
        statusCode: 200,
        body: JSON.stringify(client),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify("unable to save card into database, please check the connection"),
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

export const allClients = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const service: ClientServiceInterface = new ClientService();
  const listClients = await service.getAllClients();
  return {
    statusCode: 200,
    body: JSON.stringify(listClients),
  };
};
