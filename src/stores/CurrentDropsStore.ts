import {RootStore} from "./index";
import {SubStore} from "./SubStore";
import {action, observable, autorun} from "mobx";

interface IWearable  {
    id: string;
    article: string;
    quantityIssued: number;
    materials: string;
    designer: string;
    price: number;
    description: string;
    picture: string;
};
interface IWear extends Omit<IWearable, 'id'>{}

export class CurrentDropsStore extends SubStore {
    @observable currentDrops: Array<IWearable> =
        JSON.parse(localStorage.getItem("currentDrops")!) || [];

    autoUpdate = autorun(() => {
        localStorage.setItem("currenDrops", JSON.stringify(this.currentDrops));
    });

    @action addWear = (id: string, wear: IWear) => {
        if (this.currentDrops.filter((item) => item.id === id).length === 0) {
          this.currentDrops.push({ id, ...wear });
        }
    };

    @action updateWear = (id: string, wear: IWear) => {
        const index = this.currentDrops.findIndex((item) => item.id === id)
        this.currentDrops[index] = {id, ...wear}
    };

    @action deleteWear = (id: string) => {
        const index = this.currentDrops.findIndex((item) => item.id === id);
        this.currentDrops.splice(index, 1);
    };
}
