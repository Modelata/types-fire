import { AsyncType, CollectionReference, DocumentReference, DocumentSnapshot } from '../specifics/exports';
import { IMFFile } from './mf-file.interface';
import { IMFGetListOptions } from './mf-get-list-options.interface';
import { IMFGetOneOptions } from './mf-get-one-options.interface';
import { IMFLocation } from './mf-location.interface';
import { IMFSaveOptions } from './mf-save-options.interface';
import { IMFUpdateOptions } from './mf-update-options.interface';
import { IMFModel } from './mf-model.interface';
import { IMFDeleteOptions } from './mf-delete-options.interface';

export type MFOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface IMFDao<M extends IMFModel<M>> {
  mustachePath: string;

  getNewModel(data?: Partial<M>, location?: Partial<IMFLocation>): M;
  getReference(location: string | Partial<IMFLocation> | M): DocumentReference<M> | CollectionReference<M>;
  get(location: string | IMFLocation, options?: IMFGetOneOptions): AsyncType<M>;
  getByReference(reference: DocumentReference<M>, options?: IMFGetOneOptions): AsyncType<M>;
  getByPath(path: string, options?: IMFGetOneOptions): AsyncType<M>;
  getList(location?: MFOmit<IMFLocation, 'id'>, options?: IMFGetListOptions<M>): AsyncType<M[]>;
  create(data: M, location?: string | Partial<IMFLocation>, options?: IMFSaveOptions): Promise<M>;
  update(data: Partial<M>, location?: string | IMFLocation | M, options?: IMFUpdateOptions<M>): Promise<Partial<M>>;
  delete(location: string | IMFLocation | M, options?: IMFDeleteOptions<M>): Promise<void>;
  getModelFromSnapshot(snapshot: DocumentSnapshot<M>): M;
  getSnapshot(location: string | IMFLocation, options?: IMFGetOneOptions): AsyncType<DocumentSnapshot<M>>;
  beforeSave(model: Partial<M>, location?: string | Partial<IMFLocation>): Promise<Partial<M>>;
  saveFile(fileObject: IMFFile, location: string | IMFLocation): Promise<IMFFile>;
}
