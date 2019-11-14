import { MFLocation } from './mf-location.interface';
import { MFGetOneOptions } from './mf-get-one-options.interface';
import { MFGetListOptions } from './mf-get-list-options.interface';
import { MFFile } from './mf-file.interface';
import { MFSaveOptions } from './mf-save-options.interface';
import { DocumentReference, DocumentSnapshot, AsyncType } from '../libs/exports';

export interface MFDaoInterface<M> {
  collectionPath: string;

  getNewModel(data?: Partial<M>, location?: Partial<MFLocation>): M;
  getReference(location: string | MFLocation): DocumentReference<M>;
  getById(location: string | MFLocation, options?: MFGetOneOptions): AsyncType<M>;
  getByReference(reference: DocumentReference<M>, options?: MFGetOneOptions): AsyncType<M>;
  getByPath(path: string, options?: MFGetOneOptions): AsyncType<M>;
  getList(location?: Omit<MFLocation, 'id'>, options?: MFGetListOptions): AsyncType<M[]>;
  create(data: Partial<M>, location?: string | MFLocation, options?: MFSaveOptions): Promise<M>;
  update(data: Partial<M>, location?: string | MFLocation, options?: MFSaveOptions): Promise<M>;
  delete(id: string): Promise<void>;
  getModelFromSnapshot(snapshot: DocumentSnapshot<M>): M;
  getSnapshotFromId(id: string): AsyncType<DocumentSnapshot<M>>;
  beforeSave(model: Partial<M>): Promise<Partial<M>>;
  saveFile(fileObject: MFFile, location: string | MFLocation): MFFile;
}