"use strict";
/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// import get from '../../common/utils/CommonUtils'
class MovieDataBean {
}
class FormData {
}
let agencyStorage = new LocalStorage();
class DemoCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__topIndex = this.createLocalStorageProp("topIndex", 0, "topIndex");
        this.__topMovieImage = this.createLocalStorageProp("topMovieImage", '', "topMovieImage");
        this.__topTitle = this.createLocalStorageProp("topTitle", '', "topTitle");
        this.__topDescribe = this.createLocalStorageProp("topDescribe", '', "topDescribe");
        this.__bottomIndex = this.createLocalStorageProp("bottomIndex", 0, "bottomIndex");
        this.__bottomMovieImage = this.createLocalStorageProp("bottomMovieImage", '$r(app.media.ic_movie_eight)', "bottomMovieImage");
        this.__bottomTitle = this.createLocalStorageProp("bottomTitle", '', "bottomTitle");
        this.__bottomDescribe = this.createLocalStorageProp("bottomDescribe", '', "bottomDescribe");
        this.TITLE = 'Hello World';
        this.ACTION_TYPE = 'router';
        this.ABILITY_NAME = 'EntryAbility';
        this.MESSAGE = 'add detail';
        this.FULL_WIDTH_PERCENT = '100%';
        this.FULL_HEIGHT_PERCENT = '100%';
        this.flag = 0;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.TITLE !== undefined) {
            this.TITLE = params.TITLE;
        }
        if (params.ACTION_TYPE !== undefined) {
            this.ACTION_TYPE = params.ACTION_TYPE;
        }
        if (params.ABILITY_NAME !== undefined) {
            this.ABILITY_NAME = params.ABILITY_NAME;
        }
        if (params.MESSAGE !== undefined) {
            this.MESSAGE = params.MESSAGE;
        }
        if (params.FULL_WIDTH_PERCENT !== undefined) {
            this.FULL_WIDTH_PERCENT = params.FULL_WIDTH_PERCENT;
        }
        if (params.FULL_HEIGHT_PERCENT !== undefined) {
            this.FULL_HEIGHT_PERCENT = params.FULL_HEIGHT_PERCENT;
        }
        if (params.flag !== undefined) {
            this.flag = params.flag;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        this.__topIndex.aboutToBeDeleted();
        this.__topMovieImage.aboutToBeDeleted();
        this.__topTitle.aboutToBeDeleted();
        this.__topDescribe.aboutToBeDeleted();
        this.__bottomIndex.aboutToBeDeleted();
        this.__bottomMovieImage.aboutToBeDeleted();
        this.__bottomTitle.aboutToBeDeleted();
        this.__bottomDescribe.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get topIndex() {
        return this.__topIndex.get();
    }
    set topIndex(newValue) {
        this.__topIndex.set(newValue);
    }
    get topMovieImage() {
        return this.__topMovieImage.get();
    }
    set topMovieImage(newValue) {
        this.__topMovieImage.set(newValue);
    }
    get topTitle() {
        return this.__topTitle.get();
    }
    set topTitle(newValue) {
        this.__topTitle.set(newValue);
    }
    get topDescribe() {
        return this.__topDescribe.get();
    }
    set topDescribe(newValue) {
        this.__topDescribe.set(newValue);
    }
    get bottomIndex() {
        return this.__bottomIndex.get();
    }
    set bottomIndex(newValue) {
        this.__bottomIndex.set(newValue);
    }
    get bottomMovieImage() {
        return this.__bottomMovieImage.get();
    }
    set bottomMovieImage(newValue) {
        this.__bottomMovieImage.set(newValue);
    }
    get bottomTitle() {
        return this.__bottomTitle.get();
    }
    set bottomTitle(newValue) {
        this.__bottomTitle.set(newValue);
    }
    get bottomDescribe() {
        return this.__bottomDescribe.get();
    }
    set bottomDescribe(newValue) {
        this.__bottomDescribe.set(newValue);
    }
    aboutToAppear() {
        this.topMovieImage = './ic_movie_eight.png';
        this.bottomMovieImage = '$r(app.media.ic_movie_eight)';
        console.log('fdasfsa:' + this.topMovieImage);
        console.log('fdasfsa:' + this.bottomMovieImage);
    }
    // onAppear()
    // onAppear(){
    //
    // }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.backgroundColor({ "id": 16777280, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            Stack.align(Alignment.End);
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('每日推荐');
            Text.backgroundColor({ "id": 16777280, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontSize(14);
            Text.fontColor({ "id": 16777281, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontFamily('SimSun');
            Text.flexGrow(1);
            Text.width('100%');
            Text.textAlign(TextAlign.Center);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777486, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height(14);
            Image.width(14);
            Image.margin({ right: 20 });
            Image.margin({ right: 0 });
            Image.onClick(() => {
                this.updateAbility();
                this.topMovieImage = '../..' + this.topMovieImage;
                this.bottomMovieImage = '../..' + this.bottomMovieImage;
                console.log('cjm1' + this.topIndex);
                console.log('cjm1: ' + this.topMovieImage);
                // this.topIndex = 0;
                // this.topIndex = 1;
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Stack.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.onClick(() => {
                this.jumpToAbility(this.topIndex);
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.TopStart });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.topMovieImage);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius({ "id": 16777381, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.width(70);
            Image.height(70);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (1) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777442, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                        Image.width({ "id": 16777396, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                        Image.height({ "id": 16777396, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Stack.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.layoutWeight(1);
            Column.margin({
                left: { "id": 16777308, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                right: { "id": 16777309, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.topTitle);
            Text.fontSize(15);
            Text.fontWeight(FontWeight.Bolder);
            Text.fontColor({ "id": 16777278, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.padding(3);
            Text.maxLines(2);
            Text.textOverflow({
                overflow: TextOverflow.Ellipsis
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.topDescribe);
            Text.fontSize(12);
            Text.fontColor({ "id": 16777278, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Normal);
            Text.opacity({ "id": 16777305, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.maxLines(3);
            Text.textOverflow({
                overflow: TextOverflow.Ellipsis
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.onClick(() => {
                this.jumpToAbility(this.bottomIndex);
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.TopStart });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.bottomMovieImage);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius({ "id": 16777381, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.width(70);
            Image.height(70);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (1) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777475, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                        Image.width({ "id": 16777396, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                        Image.height({ "id": 16777396, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Stack.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.layoutWeight(1);
            Column.margin({
                left: { "id": 16777308, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                right: { "id": 16777309, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.bottomTitle);
            Text.fontSize(15);
            Text.fontWeight(FontWeight.Bolder);
            Text.fontColor({ "id": 16777278, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.padding(3);
            Text.maxLines(2);
            Text.textOverflow({
                overflow: TextOverflow.Ellipsis
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.bottomDescribe);
            Text.fontSize(12);
            Text.fontColor({ "id": 16777278, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Normal);
            Text.opacity({ "id": 16777305, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.maxLines(3);
            Text.textOverflow({
                overflow: TextOverflow.Ellipsis
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Row.pop();
        Column.pop();
    }
    updateAbility() {
        postCardAction(this, {
            'action': 'message',
            'params': {
                'msgTest': 'messageEvent'
            }
        });
    }
    jumpToAbility(index) {
        postCardAction(this, {
            'action': this.ACTION_TYPE,
            'abilityName': 'EntryDetailsAbility',
            'params': {
                'whichPage': 'MovieDetailsPage',
                'index': index
            }
        });
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadEtsCard(new DemoCard(undefined, {}, agencyStorage), "com.huawei.moviecard/entry/ets/card22/pages/Card22Card");
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Card22Card.js.map