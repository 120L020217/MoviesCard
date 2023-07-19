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
import CommonConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/CommonConstants';
import StyleConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/StyleConstants';
import CommonUtils from '@bundle:com.huawei.moviecard/entry/ets/common/utils/CommonUtils';
import StarsWidget from '@bundle:com.huawei.moviecard/entry/ets/view/StarsWidget';
import Logger from '@bundle:com.huawei.moviecard/entry/ets/common/utils/Logger';
import Curves from '@native:ohos.curves';
export default class MovieDetailsTitle extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__movieDetail = new SynchedPropertyNesedObjectPU(params.movieDetail, this, "movieDetail");
        this.__movieImage = new ObservedPropertyObjectPU(undefined, this, "movieImage");
        this.__title = new ObservedPropertySimplePU('', this, "title");
        this.__rating = new ObservedPropertySimplePU('', this, "rating");
        this.__stars = new ObservedPropertyObjectPU(undefined, this, "stars");
        this.__describe = new ObservedPropertySimplePU('', this, "describe");
        this.__isComplete = new ObservedPropertySimplePU(false, this, "isComplete");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        this.__movieDetail.set(params.movieDetail);
        if (params.movieImage !== undefined) {
            this.movieImage = params.movieImage;
        }
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.rating !== undefined) {
            this.rating = params.rating;
        }
        if (params.stars !== undefined) {
            this.stars = params.stars;
        }
        if (params.describe !== undefined) {
            this.describe = params.describe;
        }
        if (params.isComplete !== undefined) {
            this.isComplete = params.isComplete;
        }
    }
    updateStateVars(params) {
        this.__movieDetail.set(params.movieDetail);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__movieDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__movieImage.purgeDependencyOnElmtId(rmElmtId);
        this.__title.purgeDependencyOnElmtId(rmElmtId);
        this.__rating.purgeDependencyOnElmtId(rmElmtId);
        this.__stars.purgeDependencyOnElmtId(rmElmtId);
        this.__describe.purgeDependencyOnElmtId(rmElmtId);
        this.__isComplete.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__movieDetail.aboutToBeDeleted();
        this.__movieImage.aboutToBeDeleted();
        this.__title.aboutToBeDeleted();
        this.__rating.aboutToBeDeleted();
        this.__stars.aboutToBeDeleted();
        this.__describe.aboutToBeDeleted();
        this.__isComplete.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get movieDetail() {
        return this.__movieDetail.get();
    }
    get movieImage() {
        return this.__movieImage.get();
    }
    set movieImage(newValue) {
        this.__movieImage.set(newValue);
    }
    get title() {
        return this.__title.get();
    }
    set title(newValue) {
        this.__title.set(newValue);
    }
    get rating() {
        return this.__rating.get();
    }
    set rating(newValue) {
        this.__rating.set(newValue);
    }
    get stars() {
        return this.__stars.get();
    }
    set stars(newValue) {
        this.__stars.set(newValue);
    }
    get describe() {
        return this.__describe.get();
    }
    set describe(newValue) {
        this.__describe.set(newValue);
    }
    get isComplete() {
        return this.__isComplete.get();
    }
    set isComplete(newValue) {
        this.__isComplete.set(newValue);
    }
    labelIcon(icon, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(icon);
            Image.width('30vp');
            Image.height('30vp');
            Image.margin({ left: { "id": 16777390, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            Image.alignSelf(ItemAlign.End);
            Image.onClick(() => {
                this.isComplete = !this.isComplete;
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
    }
    aboutToAppear() {
        if (CommonUtils.isEmpty(this.movieDetail)) {
            Logger.error(CommonConstants.TAG_DETAILS_COMPONENT, 'movieDetail is null');
            return;
        }
        this.movieImage = this.movieDetail.movieImage;
        this.title = this.movieDetail.title;
        this.rating = this.movieDetail.rating;
        this.stars = this.movieDetail.stars;
        this.describe = this.movieDetail.describe;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.alignSelf(ItemAlign.Start);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.movieDetail.movieImage);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius({ "id": 16777425, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.width({ "id": 16777426, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777424, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.sharedTransition(this.title, { duration: 1000, curve: Curves.cubicBezier(0.2, 0.2, 0.1, 1.0), delay: 100 });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.layoutWeight(StyleConstants.WEIGHT_ONE);
            Column.margin({ left: { "id": 16777390, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.movieDetail.title);
            Text.fontSize({ "id": 16777429, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bolder);
            Text.fontColor({ "id": 16777278, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new StarsWidget(this, {
                        rating: this.rating,
                        stars: this.stars
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.movieDetail.describe);
            Text.fontSize({ "id": 16777311, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontColor({ "id": 16777278, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Normal);
            Text.opacity({ "id": 16777305, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.margin({ bottom: { "id": 16777310, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.align(Alignment.Start);
            Row.alignSelf(ItemAlign.Start);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777228, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bolder);
            Text.fontSize({ "id": 16777393, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
            Text.fontColor(Color.White);
            Text.borderRadius({ "id": 16777391, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.backgroundColor({ "id": 16777284, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.width({ "id": 16777394, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.height({ "id": 16777389, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.width('5');
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isComplete) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.labelIcon.bind(this)({ "id": 16777440, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.labelIcon.bind(this)({ "id": 16777439, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Row.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=MovieDetailsTitle.js.map