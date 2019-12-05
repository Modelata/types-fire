import { IMFModel } from './mf-model.interface';

export type IMFDeletePreviousOnUpdateFilesOptions<M extends IMFModel<M>> = {
  [fileAttribute in keyof M]?: boolean
};
export interface IMFUpdateOptions<M extends IMFModel<M>> {
  deletePreviousOnUpdateFiles?: IMFDeletePreviousOnUpdateFilesOptions<M>;
}
