import { RootStore } from "./index";
import { SubStore } from "./SubStore";
import { database } from "../utils/firebase";
import { action, observable } from "mobx";

export interface IItem {
  title: string;
  model: string;
  gen: string;
  tags: string[];
  weight: number;
  price: number;
  oldPrice?: number;
  stock: boolean;
  description: string;
  attachments?: string[];
  key?: string;
  id?: string;
}

export class DataStore extends SubStore {
  @observable goods: { [key: string]: IItem } = {};
  
  constructor(rootStore: RootStore, initState: any) {
    super(rootStore);
    this.syncGoods();
  }

  @action syncGoods = async () => {
    database
      .ref("goods")
      .once("value")
      .then((snapshot) => {
        const goods = snapshot.val();
        this.goods = goods;
      });
  };
}
