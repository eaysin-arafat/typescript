import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObject: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {}
