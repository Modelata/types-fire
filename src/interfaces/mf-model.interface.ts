import { IMFLocation } from './mf-location.interface';

export interface IMFModel<M> {
  _id: string;
  _collectionPath: string;
  creationDate: Date;
  updateDate: Date;

  initialize(data: Partial<M>, mustachePath: string, location: Partial<IMFLocation>): void;
}
