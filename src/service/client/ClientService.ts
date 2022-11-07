import { ClientRepository } from "../../repository/client/ClientRepository";
import { ClientRepositoryInterface } from "../../repository/client/ClientRepositoryInterface";
import { Client } from "../../schema/Client";
import { ClientServiceInterface } from "./ClientServiceInterface";

export class ClientService implements ClientServiceInterface {
  private repository: ClientRepositoryInterface = new ClientRepository();
  async saveClient(client: Client): Promise<boolean> {
    return await this.repository.save(client);
  }

  async getAllClients(): Promise<any> {
    return await this.repository.getAllClients();
  }
}
