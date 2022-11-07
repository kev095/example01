import { Client } from "../../schema/Client";
import { ClientRepositoryInterface } from "./ClientRepositoryInterface";
import AWS from "aws-sdk";
import { v4 } from "uuid";

export class ClientRepository implements ClientRepositoryInterface {
  private docClient = new AWS.DynamoDB.DocumentClient();
  private tableName = "ClientTable";

  async save(client: Client): Promise<boolean> {
    const storableClient = {
      ...client,
      productID: v4(),
    };

    const saveClient = await this.docClient
      .put({
        TableName: this.tableName,
        Item: storableClient,
      })
      .promise();

    if (saveClient) {
      return true;
    }

    return false;
  }
}
