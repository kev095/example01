import { ClientList } from '../../common/types/ClientList';
import { Client } from '../../schema/Client';
import { RepositoryInterface } from '../RepositoryInterface';

export interface ClientRepositoryInterface extends RepositoryInterface {
  save(client: Client): Promise<boolean>;

  getAllClients(): Promise<ClientList>;
}
