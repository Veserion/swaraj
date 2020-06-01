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
        localStorage.setItem("basket", JSON.stringify(this.currentDrops));
    });

    @action increaseItem = (id: string, wear: IWear) => {
        this.currentDrops.filter((item) => item.id === id).length === 0
            ? this.currentDrops.push({id: id, count: count})
            : this.currentDrops.map((item) => {
                if (item.id === id) item.count += count;
            });
    };

    @action decreaseItem = (id: string, count: number = 1) => {
        if (this.basketItems.filter((item) => item.id === id).length !== 0) {
            this.basketItems.map((item) => {
                if (item.id === id) item.count -= count;
                if (item.count <= 0) item.count = 0;
            });
        }
    };

    @action deleteItem = (id: string) => {
        const index = this.basketItems.findIndex((item) => item.id === id);
        this.basketItems.splice(index, 1);
    };
}
