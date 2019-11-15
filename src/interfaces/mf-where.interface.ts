import { WhereFilterOp } from '../specifics/exports';

export interface IMFWhere {
  field: string;
  operator: WhereFilterOp;
  value: any;
}
