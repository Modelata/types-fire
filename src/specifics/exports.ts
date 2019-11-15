import { DocumentReference as GcDocumentReference, DocumentSnapshot as GcDocumentSnapshot } from '@google-cloud/firestore';

export { WhereFilterOp, OrderByDirection } from '@google-cloud/firestore';

export interface DocumentReference<M> extends GcDocumentReference { }
export interface DocumentSnapshot<M> extends GcDocumentSnapshot { }

export interface AsyncType<M> extends Promise<M> { }
