/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import router from '@ohos:router';
import MovieStills from '@bundle:com.huawei.moviecard/entry/ets/view/MovieStills';
import MovieStarring from '@bundle:com.huawei.moviecard/entry/ets/view/MovieStarring';
import CommonConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/CommonConstants';
import StyleConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/StyleConstants';
import CommonUtils from '@bundle:com.huawei.moviecard/entry/ets/common/utils/CommonUtils';
import StoryIntroduce from '@bundle:com.huawei.moviecard/entry/ets/view/StoryIntroduce';
import MovieDetailsTitle from '@bundle:com.huawei.moviecard/entry/ets/view/MovieDetailsTitle';
import Logger from '@bundle:com.huawei.moviecard/entry/ets/common/utils/Logger';
class MovieDetailPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__introduction = new ObservedPropertySimplePU('', this, "introduction");
        this.__movieData = new ObservedPropertyObjectPU(undefined, this, "movieData");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.introduction !== undefined) {
            this.introduction = params.introduction;
        }
        if (params.movieData !== undefined) {
            this.movieData = params.movieData;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__introduction.purgeDependencyOnElmtId(rmElmtId);
        this.__movieData.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__introduction.aboutToBeDeleted();
        this.__movieData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get introduction() {
        return this.__introduction.get();
    }
    set introduction(newValue) {
        this.__introduction.set(newValue);
    }
    get movieData() {
        return this.__movieData.get();
    }
    set movieData(newValue) {
        this.__movieData.set(newValue);
    }
    aboutToAppear() {
        var _a, _b;
        let index = 0;
        if (!CommonUtils.isEmpty(router.getParams())) {
            index = (_a = router.getParams()[CommonConstants.INDEX_KEY]) !== null && _a !== void 0 ? _a : 0;
        }
        else {
            index = (_b = globalThis.position) !== null && _b !== void 0 ? _b : 0;
        }
        let listData = CommonUtils.getListData();
        if (CommonUtils.isEmptyArr(listData)) {
            Logger.error(CommonConstants.TAG_DETAILS_PAGE, 'listData is 0');
            return;
        }
        this.movieData = listData[index];
        this.introduction = listData[index].introduction;
    }
    onPageShow() {
        var _a, _b;
        let index = 0;
        if (!CommonUtils.isEmpty(router.getParams())) {
            index = (_a = router.getParams()[CommonConstants.INDEX_KEY]) !== null && _a !== void 0 ? _a : 0;
        }
        else {
            index = (_b = globalThis.position) !== null && _b !== void 0 ? _b : 0;
        }
        Logger.info("cjm " + index);
        let listData = CommonUtils.getListData();
        if (CommonUtils.isEmptyArr(listData)) {
            Logger.error(CommonConstants.TAG_DETAILS_PAGE, 'listData is 0');
            return;
        }
        // this.movieData = listData[index];
        this.introduction = listData[index].introduction;
        this.movieData.describe = listData[index].describe;
        this.movieData.title = listData[index].title;
        this.movieData.movieImage = listData[index].movieImage;
        this.movieData.stars = listData[index].stars;
        this.movieData.rating = listData[index].rating;
        Logger.info("cjm " + listData[index].describe);
        Logger.info("cjm " + this.movieData.describe);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MovieDetailsPage.ets(74:5)");
            Column.backgroundColor({ "id": 16777230, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Column.width(StyleConstants.FULL_WIDTH);
            Column.height(StyleConstants.FULL_HEIGHT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/MovieDetailsPage.ets(75:7)");
            Row.alignSelf(ItemAlign.Start);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.debugLine("pages/MovieDetailsPage.ets(76:9)");
            Blank.width('2%');
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777489, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.debugLine("pages/MovieDetailsPage.ets(77:9)");
            Image.height('5%');
            Image.width('5%');
            Image.alignSelf(ItemAlign.Start);
            Image.onClick((event) => {
                router.back();
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777320, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.debugLine("pages/MovieDetailsPage.ets(85:9)");
            Text.fontWeight(FontWeight.Bolder);
            Text.fontSize({ "id": 16777434, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.margin({
                left: StyleConstants.COMMON_MARGIN_LEFT,
                top: StyleConstants.DETAILS_COMMON_MARGIN,
                bottom: StyleConstants.DETAILS_COMMON_MARGIN
            });
            Text.height({ "id": 16777372, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MovieDetailsPage.ets(96:7)");
            Column.margin({
                left: { "id": 16777356, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                right: { "id": 16777356, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            Column.padding({
                left: { "id": 16777357, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                top: { "id": 16777357, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                right: { "id": 16777357, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                bottom: { "id": 16777358, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            Column.borderRadius({ "id": 16777355, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Column.backgroundColor(Color.White);
            Column.width(StyleConstants.COLUMN_DETAILS_WIDTH);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MovieDetailsTitle(this, {
                        movieDetail: this.movieData
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        movieDetail: this.movieData
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new StoryIntroduce(this, {
                        introduction: this.__introduction
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MovieStarring(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MovieStills(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new MovieDetailPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=MovieDetailsPage.js.map