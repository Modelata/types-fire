import { OrderByDirection } from '../libs/exports';

export interface MFOrderBy {
  field: string;
  operator: OrderByDirection;
}