import { Client } from "../../schema/Client";

export interface ClientRepositoryInterface {
  save(client: Client): Promise<boolean>;
  getAllClients(): Promise<any>;
}
