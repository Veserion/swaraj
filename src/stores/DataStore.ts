import { RootStore } from "./index";
import { SubStore } from "./SubStore";
import { database } from "../utils/firebase";
import { action, observable } from "mobx";

type IWearable = {
  id: string;
  article: string;
  quantityIssued: number;
  materials: string;
  designer: string;
  price: number;
  description: string;
  picture: string;
};

export class DataStore extends SubStore {
  @observable drops: Record<string, Record<string, IWearable>> = {};

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

  addItem = async (drop: IWearable) =>
    new Promise(async (resolve) => {
      database.ref("/").push(drop, (error) => resolve(error));
      await this.syncGoods();
    });

  updateItem = async (id: string, drop: IWearable) =>
    new Promise(async (resolve) => {
      database.ref(`/${id}`).update(drop, (error) => resolve(error));
      await this.syncGoods();
    });

  removeItem = async (id: string) =>
    new Promise(async (resolve) => {
      database.ref(`/${id}`).remove((error) => resolve(error));
      await this.syncGoods();
    });
}
