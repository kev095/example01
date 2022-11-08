import { ClientList } from '../../common/types/ClientList';
import { ClientRepository } from '../../repository/client/ClientRepository';
import { ClientRepositoryInterface } from '../../repository/client/ClientRepositoryInterface';
import { Client } from '../../schema/Client';
import { ClientServiceInterface } from './ClientServiceInterface';

export class ClientService implements ClientServiceInterface {
  private repository: ClientRepositoryInterface = new ClientRepository();

  constructor(repository?: ClientRepositoryInterface) {
    if (repository) {
      this.repository = repository;
    }
  }

  async saveClient(client: Client): Promise<boolean> {
    return await this.repository.save(client);
  }

  async getAllClients(): Promise<ClientList> {
    return await this.repository.getAllClients();
  }
}
