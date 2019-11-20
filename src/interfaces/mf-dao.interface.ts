import { AsyncType, CollectionReference, DocumentReference, DocumentSnapshot } from '../specifics/exports';
import { IMFFile } from './mf-file.interface';
import { IMFGetListOptions } from './mf-get-list-options.interface';
import { IMFGetOneOptions } from './mf-get-one-options.interface';
import { IMFLocation } from './mf-location.interface';
import { IMFSaveOptions } from './mf-save-options.interface';

export interface IMFDao<M> {
  mustachePath: string;

  getNewModel(data?: Partial<M>, location?: Partial<IMFLocation>): M;
  getReference(location: string | Partial<IMFLocation>): DocumentReference<M> | CollectionReference<M>;
  get(location: string | IMFLocation, options?: IMFGetOneOptions): AsyncType<M>;
  getByReference(reference: DocumentReference<M>, options?: IMFGetOneOptions): AsyncType<M>;
  getByPath(path: string, options?: IMFGetOneOptions): AsyncType<M>;
  getList(location?: Omit<IMFLocation, 'id'>, options?: IMFGetListOptions<M>): AsyncType<M[]>;
  create(data: M, location?: string | IMFLocation, options?: IMFSaveOptions): Promise<M>;
  update(data: Partial<M>, location?: string | IMFLocation, options?: IMFSaveOptions): Promise<Partial<M>>;
  delete(location: string | IMFLocation): Promise<void>;
  getModelFromSnapshot(snapshot: DocumentSnapshot<M>): M;
  getSnapshot(location: string | IMFLocation, options?: IMFGetOneOptions): AsyncType<DocumentSnapshot<M>>;
  beforeSave(model: Partial<M>): Promise<Partial<M>>;
  saveFile(fileObject: IMFFile, location: string | IMFLocation): IMFFile;
}
