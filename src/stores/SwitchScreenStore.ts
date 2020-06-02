import {observable, action} from 'mobx'
import { SubStore } from './SubStore';


export class SwitchScreenStore extends SubStore {
    @observable openScreen = 'Drops'

    @action setScreen = (typeOfScreen: string) => {
        this.openScreen = typeOfScreen
        console.log(typeOfScreen)
    }
}