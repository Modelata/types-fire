import { IMFModel } from './mf-model.interface';

export type IMFDeleteOnDeleteFilesOptions<M extends IMFModel<M>> = {
  [fileAttribute in keyof M]?: boolean
};
export interface IMFDeleteOptions<M extends IMFModel<M>> {
  deleteOnDeleteFiles?: IMFDeleteOnDeleteFilesOptions<M>;
}
