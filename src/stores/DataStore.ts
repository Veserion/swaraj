import { RootStore } from "./index";
import { SubStore } from "./SubStore";
import { database } from "../utils/firebase";
import { action, observable } from "mobx";

export interface IItem {}
type TWearable = {
  article: string;
  quantityIssued: number;
  materials: string;
  designer: string;
  price: number;
  description: string;
  picture: string;
};

export class DataStore extends SubStore {
  @observable drops: Record<string, Record<string, TWearable>> = {};

  constructor(rootStore: RootStore, initState: any) {
    super(rootStore);
    this.syncGoods();
  }

  @action syncGoods = async () => {
    database
      .ref("/")
      .once("value")
      .then((snapshot) => {
        const drops = snapshot.val();
        this.drops = drops;
      });
  };

  addItem = async (item: IItem) =>
    new Promise(async (resolve) => {
      database.ref("/").push(item, (error) => resolve(error));
      await this.syncGoods();
    });

  updateItem = async (id: string, item: IItem) =>
    new Promise(async (resolve) => {
      database.ref(`/${id}`).update(item, (error) => resolve(error));
      await this.syncGoods();
    });

  removeItem = async (id: string) =>
    new Promise(async (resolve) => {
      database.ref(`/${id}`).remove((error) => resolve(error));
      await this.syncGoods();
    });
}
