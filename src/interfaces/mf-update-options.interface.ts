import { IMFModel } from './mf-model.interface';
import { NonFunctionPropertyNames } from './toolType';

export type IMFDeletePreviousOnUpdateFilesOptions<M extends IMFModel<M>> = {
  [fileAttribute in NonFunctionPropertyNames<M>]?: boolean;
};
export interface IMFUpdateOptions<M extends IMFModel<M>> {
  deletePreviousOnUpdateFiles?: IMFDeletePreviousOnUpdateFilesOptions<M>;
}
