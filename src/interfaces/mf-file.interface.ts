export interface IMFFile {
  name?: string;
  type?: string;
  contentLastModificationDate?: Date;
  url?: string;
  storagePath?: string;
  _file?: File;
}
