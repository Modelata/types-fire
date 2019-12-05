import { IMFModel } from './mf-model.interface';

export interface IMFUpdateOptions<M extends IMFModel<M>> {
  deletePreviousOnUpdateFiles?: {
    [fileAttribute in keyof M]: boolean
  };
}
