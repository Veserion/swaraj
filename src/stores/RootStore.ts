import { DataStore } from "./index";

class RootStore {
  public dataStore: DataStore;

  constructor(initState: any) {
    this.dataStore = new DataStore(
      this,
      initState && initState.dataStore ? initState.dataStore : null
    );
  }

  public serialize = () => ({
    dataStore: {},
  });
}

export { RootStore };
