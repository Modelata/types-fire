export interface MFFile {
  name: string,
  type: string,
  contentLastModificationDate: Date,
  url?: string,
  storageReference: any,
  _file?: File,
}