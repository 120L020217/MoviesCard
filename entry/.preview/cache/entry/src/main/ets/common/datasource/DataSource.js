/**
 * Classes required for LazyForEach loading.
 */
export default class DataSource {
    constructor(listData) {
        this.listData = listData;
    }
    totalCount() {
        return this.listData.length;
    }
    getData(index) {
        return this.listData[index];
    }
    registerDataChangeListener() {
    }
    unregisterDataChangeListener() {
    }
}
//# sourceMappingURL=DataSource.js.map