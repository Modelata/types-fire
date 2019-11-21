import { IMFLocation } from './mf-location.interface';
import { DocumentSnapshot } from '../specifics/exports';

export interface IMFModel<M> {
  _id: string;
  _collectionPath: string;
  _snapshot: DocumentSnapshot<M>;
  creationDate: Date;
  updateDate: Date;

  initialize(data: Partial<M>, mustachePath: string, location: Partial<IMFLocation>): void;
}
