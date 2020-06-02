import { DataStore, CurrentDropsStore, SwitchScreenStore } from "./index";

class RootStore {
  public dataStore: DataStore;
  public currentDropsStore: CurrentDropsStore;
  public switchScreenStore: SwitchScreenStore;
  
  constructor(initState: any) {
    this.dataStore = new DataStore(
      this,
      initState && initState.dataStore ? initState.dataStore : null
    );
    this.currentDropsStore = new CurrentDropsStore(this);
    this.switchScreenStore = new SwitchScreenStore(this);
  }

  public serialize = () => ({
    dataStore: {},
  });
}

export { RootStore };
