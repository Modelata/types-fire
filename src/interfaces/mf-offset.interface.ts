import { DocumentSnapshot } from '../specifics/exports';

export interface IMFOffset<M> {
  startAt?: string | DocumentSnapshot<M>;
  startAfter?: string | DocumentSnapshot<M>;
  endAt?: string | DocumentSnapshot<M>;
  endBefore?: string | DocumentSnapshot<M>;
}
