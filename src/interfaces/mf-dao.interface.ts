import { IMFLocation } from './mf-location.interface';
import { IMFGetOneOptions } from './mf-get-one-options.interface';
import { IMFGetListOptions } from './mf-get-list-options.interface';
import { IMFFile } from './mf-file.interface';
import { IMFSaveOptions } from './mf-save-options.interface';
import { DocumentReference, DocumentSnapshot, AsyncType } from '../specifics/exports';

export interface IMFDao<M> {
  mustachePath: string;

  getNewModel(data?: Partial<M>, location?: Partial<IMFLocation>): M;
  getReference(location: string | IMFLocation): DocumentReference<M>;
  get(location: string | IMFLocation, options?: IMFGetOneOptions): AsyncType<M>;
  getByReference(reference: DocumentReference<M>, options?: IMFGetOneOptions): AsyncType<M>;
  getByPath(path: string, options?: IMFGetOneOptions): AsyncType<M>;
  getList(location?: Omit<IMFLocation, 'id'>, options?: IMFGetListOptions): AsyncType<M[]>;
  create(data: Partial<M>, location?: string | IMFLocation, options?: IMFSaveOptions): Promise<M>;
  update(data: Partial<M>, location?: string | IMFLocation, options?: IMFSaveOptions): Promise<M>;
  delete(location: string | IMFLocation): Promise<void>;
  getModelFromSnapshot(snapshot: DocumentSnapshot<M>): M;
  getSnapshotFromId(id: string): AsyncType<DocumentSnapshot<M>>;
  beforeSave(model: Partial<M>): Promise<Partial<M>>;
  saveFile(fileObject: IMFFile, location: string | IMFLocation): IMFFile;
}
