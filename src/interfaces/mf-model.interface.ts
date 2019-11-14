import { MFLocation } from './mf-location.interface';

export interface MFModelInterface<M> {
  _id: string;
  _collectionPath: string;
  creationDate: Date;
  lastUpdateDate: Date;

  initialize(data: Partial<M>, location: Partial<MFLocation>): void;
}