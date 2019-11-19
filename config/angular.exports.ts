import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';
export declare type OrderByDirection = firestore.OrderByDirection;

export declare type WhereFilterOp = firestore.WhereFilterOp;

export interface DocumentReference<M> extends firestore.DocumentReference { }
export interface DocumentSnapshotExists<T> extends firestore.DocumentSnapshot {
    readonly exists: true;
    data(options?: firestore.SnapshotOptions): T;
}
export interface DocumentSnapshotDoesNotExist extends firestore.DocumentSnapshot {
    readonly exists: false;
    data(options?: firestore.SnapshotOptions): undefined;
    get(fieldPath: string | firestore.FieldPath, options?: firestore.SnapshotOptions): undefined;
}
export declare type DocumentSnapshot<T> = DocumentSnapshotExists<T> | DocumentSnapshotDoesNotExist;
export interface QueryDocumentSnapshot<T> extends firestore.QueryDocumentSnapshot {
    data(options?: firestore.SnapshotOptions): T;
}
export interface AsyncType<M> extends Observable<M> { }
