import { Client } from "../../schema/Client";

export interface ClientServiceInterface {
  saveClient(client: Client): Promise<boolean>;
  getClient(id: string): Promise<Client>;
}
