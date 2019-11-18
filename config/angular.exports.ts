import {
  DocumentReference as FbDocumentReference,
  DocumentSnapshot as FbDocumentSnapshot,
  CollectionReference as FbCollectionReference
} from '@firebase/firestore-types';

export { WhereFilterOp, OrderByDirection } from '@firebase/firestore-types';
import { Observable } from 'rxjs';

export interface CollectionReference<M> extends FbCollectionReference { }
export interface DocumentReference<M> extends FbDocumentReference { }
export interface DocumentSnapshot<M> extends FbDocumentSnapshot { }

export interface AsyncType<M> extends Observable<M> { }
