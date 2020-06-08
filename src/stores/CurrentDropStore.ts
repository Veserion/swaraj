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

export class CurrentDropStore extends SubStore {
  @observable currentDrop: IWearable[] =
    JSON.parse(localStorage.getItem("currentDrop")!) || [];

  @observable currentWearId: string = ''
  @action setCurrentWearId = (id: string) => this.currentWearId = id

  autoUpdate = autorun(() => {
    localStorage.setItem("currentDrop", JSON.stringify(this.currentDrop));
  });

  @action addWear = (wear: IWearable) => {
    wear.id = this.currentWearId || Math.ceil(10000 * Math.random()).toString()

    if (this.currentDrop.filter((item) => item.id === wear.id).length === 0) {
      this.currentDrop.push(wear);
    } else {
      this.currentDrop[this.currentDrop.findIndex((item) => item.id === wear.id)] = {...this.currentDrop.find((item) => item.id === wear.id)!, ...wear}
    }
  };

  @action deleteWear = (id: string) => {
    const index = this.currentDrop.findIndex((item) => item.id === id);
    this.currentDrop.splice(index, 1);
  };

  @action clear = () => {
    this.currentDrop = [];
    localStorage.setItem("currentDrop", "");
  };
}
