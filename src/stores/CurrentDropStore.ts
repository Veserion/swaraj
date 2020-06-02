import { RootStore } from "./index";
import { SubStore } from "./SubStore";
import { action, observable, autorun } from "mobx";

export interface IWearable {
  id: string;
  key?: number;
  article: string;
  quantityIssued: number;
  materials: string;
  designer: string;
  price: number;
  description: string;
  picture: string;
}
// interface IWear extends Omit<IWearable, "id"> {}

export class CurrentDropStore extends SubStore {
  @observable currentDrop: Array<IWearable> =
    JSON.parse(localStorage.getItem("currentDrops")!) || [];

  autoUpdate = autorun(() => {
    localStorage.setItem("currenDrops", JSON.stringify(this.currentDrop));
  });

  @action addWear = (wear: IWearable) => {
    if (this.currentDrop.filter((item) => item.id === wear.id).length === 0) {
      this.currentDrop.push(wear);
    }
  };

  @action updateWear = (wear: IWearable) => {
    const index = this.currentDrop.findIndex((item) => item.id === wear.id);
    this.currentDrop[index] = wear;
  };

  @action deleteWear = (id: string) => {
    const index = this.currentDrop.findIndex((item) => item.id === id);
    this.currentDrop.splice(index, 1);
  };
}
