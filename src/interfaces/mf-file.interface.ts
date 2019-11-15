export interface IMFFile {
  name: string;
  type: string;
  contentLastModificationDate: Date;
  url?: string;
  storageReference: any;
  _file?: File;
}
