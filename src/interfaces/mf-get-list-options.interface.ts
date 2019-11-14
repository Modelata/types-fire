import { MFWhere } from './mf-where.interface';
import { MFOrderBy } from './mf-order-by.interface';
import { MFOffset } from './mf-offset.interface';

export interface MFGetListOptions {
  completeOnFirst: boolean,
  where: MFWhere[],
  orderBy: MFOrderBy,
  limit: number,
  offset: MFOffset,
  cacheable: boolean,
}