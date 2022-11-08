import { Client } from '../../schema/Client';
import { ClientRepositoryInterface } from './ClientRepositoryInterface';
import AWS from 'aws-sdk';
import { v4 } from 'uuid';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { ClientList } from '../../common/types/ClientList';

export class ClientRepository implements ClientRepositoryInterface {
  private docClient = new AWS.DynamoDB.DocumentClient();
  private readonly tableName = 'ClientTable';

  constructor(docClient?: DocumentClient) {
    if (docClient) {
      this.docClient = docClient;
    }
  }

  async save(client: Client): Promise<boolean> {
    const storableClient = {
      ...client,
      clientID: v4(),
    };

    const savedItem = await this.docClient
      .put({
        TableName: this.tableName,
        Item: storableClient,
      })
      .promise();

    if (savedItem) {
      return true;
    }

    return false;
  }

  async getAllClients(): Promise<ClientList> {
    const result = await this.docClient
      .scan({
        TableName: this.tableName,
      })
      .promise();

    return await result.Items;
  }
}
