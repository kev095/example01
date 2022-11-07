import { ItemList } from "aws-sdk/clients/dynamodb";
import { Client } from "../../schema/Client";

export interface ClientServiceInterface {
  saveClient(client: Client): Promise<boolean>;
  getAllClients(): Promise<any>;
}
