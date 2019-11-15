import { IMFLocation } from './mf-location.interface';

export interface IMFModel {
  _id: string;
  _collectionPath: string;
  creationDate: Date;
  updateDate: Date;

  initialize(data: Partial<this>, mustachePath: string, location: Partial<IMFLocation>): void;
}
