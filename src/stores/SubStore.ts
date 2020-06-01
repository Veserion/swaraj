import { RootStore } from './index';

class SubStore {
    constructor(public rootStore: RootStore) {}
}

export {
    SubStore
};
