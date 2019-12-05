import { IMFModel } from './mf-model.interface';
import { NonFunctionPropertyNames } from './toolType';


export declare type IMFDeleteOnDeleteFilesOptions<M extends IMFModel<M>> = {
  [fileAttribute in NonFunctionPropertyNames<M>]?: boolean;
};
export interface IMFDeleteOptions<M extends IMFModel<M>> {
  deleteOnDeleteFiles?: IMFDeleteOnDeleteFilesOptions<M>;
}
