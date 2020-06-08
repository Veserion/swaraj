import { DataStore, CurrentDropStore, SwitchScreenStore } from "./index";

class RootStore {
  public dataStore: DataStore;
  public currentDropStore: CurrentDropStore;
  public switchScreenStore: SwitchScreenStore;

  constructor(initState: any) {
    this.dataStore = new DataStore(
      this,
      initState && initState.dataStore ? initState.dataStore : null
    );
    this.currentDropStore = new CurrentDropStore(this);
    this.switchScreenStore = new SwitchScreenStore(this);
  }

  public serialize = () => ({
    dataStore: {},
  });
}

export { RootStore };
