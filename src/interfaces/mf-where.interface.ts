import { WhereFilterOp } from '../libs/exports';

export interface MFWhere {
  field: string;
  operator: WhereFilterOp;
  value: any;
}