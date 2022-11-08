import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { fromError } from '../common/helper/ResponseErrorHelper';
import { Client } from '../schema/Client';
import { ClientService } from '../service/client/ClientService';
import { ClientServiceInterface } from '../service/client/ClientServiceInterface';

const service: ClientServiceInterface = new ClientService();

export const createClient = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  let response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify({}),
  };

  try {
    const requestBody = JSON.parse(event.body as string);

    const client: Client = { ...requestBody };

    const clientSaved = await service.saveClient(client);
    console.log(clientSaved);
    if (clientSaved) {
      response.body = JSON.stringify(client);
    }
  } catch (error: unknown) {
    response = fromError(error);
  }

  return response;
};

export const allClients = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify([]),
  };

  const clientsList = await service.getAllClients();

  if (clientsList) {
    response.body = JSON.stringify(clientsList);
  }

  return response;
};
