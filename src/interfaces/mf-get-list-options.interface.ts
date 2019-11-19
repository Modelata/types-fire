import { IMFWhere } from './mf-where.interface';
import { IMFOrderBy } from './mf-order-by.interface';
import { IMFOffset } from './mf-offset.interface';

export interface IMFGetListOptions {
  completeOnFirst?: boolean;
  where?: IMFWhere[];
  orderBy?: IMFOrderBy;
  limit?: number;
  offset?: IMFOffset;
  cacheable?: boolean;
}
