export { DocumentReference, DocumentSnapshot, WhereFilterOp, OrderByDirection } from '@firebase/firestore-types';
import { Observable } from 'rxjs';

export interface AsyncType<M> extends Observable<M> { };