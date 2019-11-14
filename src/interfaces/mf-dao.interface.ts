import { MFLocation } from './mf-location.interface';
import { MFGetOneOptions } from './mf-get-one-options.interface';
import { MFGetListOptions } from './mf-get-list-options.interface';
import { MFFile } from './mf-file.interface';
import { MFSaveOptions } from './mf-save-options.interface';
import { DocumentReference, DocumentSnapshot } from '../libs/exports';
import { Observable } from 'rxjs';

export interface MFDaoInterface<M, AsyncType extends Promise<any> | AsyncType extendsObservable<any>> {
  collectionPath: string;

  getNewModel(data?: Partial<M>, location?: Partial<MFLocation>): M;
  getReference(location: string | MFLocation): DocumentReference<M>;
  getById(location: string | MFLocation, options?: MFGetOneOptions): Observable<M> | Promise<M>;
  getByReference(reference: DocumentReference<M>, options?: MFGetOneOptions): Observable<M>;
  getByPath(path: string, options?: MFGetOneOptions): Observable<M>;
  getList(location?: Omit<MFLocation, 'id'>, options?: MFGetListOptions): Observable<M[]>;
  create(data: Partial<M>, location?: string | MFLocation, options?: MFSaveOptions): Promise<M>; // 'set' OR 'add'
  update(data: Partial<M>, location?: string | MFLocation, options?: MFSaveOptions): Promise<M>; // 'update'
  delete(id: string): Promise<void>;
  getModelFromSnapshot(snapshot: DocumentSnapshot<M>): M;
  getSnapshotFromId(id: string): Observable<DocumentSnapshot<M>>;
  beforeSave(model: Partial<M>): Promise<Partial<M>>;
  saveFile(fileObject: MFFile, location: string | MFLocation): MFFile;
}