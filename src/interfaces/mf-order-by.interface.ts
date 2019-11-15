import { OrderByDirection } from '../specifics/exports';

export interface IMFOrderBy {
  field: string;
  operator: OrderByDirection;
}
