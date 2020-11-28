export type DefaultStorageListItem = string | number | number[] | string[];

export interface StorageListItem {
  id: number;
  value: DefaultStorageListItem;
}
export interface StorageStateInterface {
  list: StorageListItem[];
}

const state: StorageStateInterface = {
  list: []
};

export default state;
