import { IMFModel } from './mf-model.interface';

export interface IMFDeleteOptions<M extends IMFModel<M>> {
  deleteOnDeleteFiles: {
    [fileAttribute in keyof M]: boolean
  };
}
