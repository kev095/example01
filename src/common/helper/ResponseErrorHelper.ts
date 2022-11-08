import { APIGatewayProxyResult } from 'aws-lambda';
import { ResponseError } from '../types/ResponseError';

export const fromError = (error: unknown): APIGatewayProxyResult => {
  const response: APIGatewayProxyResult = {
    statusCode: 500,
    body: JSON.stringify(error),
  };

  if (error instanceof Error) {
    const responseError = ResponseError.from(error);

    response.body = responseError.toJSON();
  }

  return response;
};
