import { ClientList } from '../../common/types/ClientList';
import { Client } from '../../schema/Client';
import { ServiceInterface } from '../ServiceInterface';

export interface ClientServiceInterface extends ServiceInterface {
  saveClient(client: Client): Promise<boolean>;

  getAllClients(): Promise<ClientList>;
}
