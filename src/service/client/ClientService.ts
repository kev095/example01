import { ClientRepository } from "../../repository/client/ClientRepository";
import { ClientRepositoryInterface } from "../../repository/client/ClientRepositoryInterface";
import { Client } from "../../schema/Client";
import { ClientServiceInterface } from "./ClientServiceInterface";

export class ClientService implements ClientServiceInterface {
  async saveClient(client: Client): Promise<boolean> {
    const repository: ClientRepositoryInterface = new ClientRepository();
    return await repository.save(client);
  }

  getClient(id: string): Promise<Client> {
    throw console.error();
  }
}
